import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from './../../ui/FormRow';
import useCreateCabin from './useCreateCabin';
import useUpdateCabin from './useUpdateCabin';

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { createCabin, isCreating } = useCreateCabin();
  const { isUpdating, EditCabin } = useUpdateCabin();
  const { id: cabinId, ...editValue } = cabinToEdit;
  const isEditSession = Boolean(cabinId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession)
      EditCabin(
        { newCabinData: { ...data, image }, id: cabinId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register('name', { required: 'Please the cabin name' })}
        />
      </FormRow>
      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register('maxCapacity', {
            required: 'Max capacity should be greater than 1',
            min: {
              value: 1,
              message: 'The min value is 1',
            },
          })}
        />
      </FormRow>
      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register('regularPrice', {
            required: 'Please fill this field',
            min: {
              value: 1,
              message: 'The min value is 1',
            },
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register('discount', {
            required: 'Please fill this field',
            validate: (value) =>
              (value * 1 >= 0 && value * 1 <= getValues().regularPrice * 1) ||
              `Discount should be less than price and up 0`,
          })}
        />
      </FormRow>
      <FormRow label="description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register('description', { required: 'Please fill this field' })}
        />
      </FormRow>
      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: isEditSession ? false : 'Please add image',
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isCreating || isUpdating}>
          {isCreating
            ? 'Wait'
            : isEditSession
            ? 'Edit Cabin'
            : 'Create new Cabin'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
