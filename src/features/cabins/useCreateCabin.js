import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createAndEditCabin } from '../../services/apiCabins';

const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createAndEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      toast.success('Cabin created');
    },
    onError: () => {
      toast.error('Sorry, Something went wrong please try again later.');
    },
  });

  return { createCabin, isCreating };
};

export default useCreateCabin;
