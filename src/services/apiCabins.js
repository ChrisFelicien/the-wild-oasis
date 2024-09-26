import supabase, { supabaseUrl } from './supabase';

export const getAllCabins = async () => {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    throw new Error('Sorry cabins could not be loaded');
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { error, data } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    throw new Error('Something went wrong with deleting this cabin.');
  }

  return data;
};

export const createAndEditCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imgName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');

  const imgPath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin_images/${imgName}`;

  let query = supabase.from('cabins');

  // CREATE A NEW CABIN
  if (!id) query = query.insert([{ ...newCabin, image: imgPath }]);

  // UPDATE A CABIN
  if (id) query = query.update({ ...newCabin, image: imgPath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error('Something went wrong please try again later');
  }
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin_images')
    .upload(imgName, newCabin.image);

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    throw new Error('Something went wrong with image. Cabin not created');
  }

  return data;
};

export const updateCabin = async () => {
  const { data, error } = await supabase
    .from('cabins')
    .update({ other_column: 'otherValue' })
    .eq('some_column', 'someValue')
    .select();

  if (error) {
    throw new Error('Something went wrong with updating cabin');
  }
  return data;
};
