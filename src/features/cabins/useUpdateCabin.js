import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createAndEditCabin } from '../../services/apiCabins';

const useUpdateCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: EditCabin, isPending: isUpdating } = useMutation({
    mutationFn: ({ newCabinData, id }) => createAndEditCabin(newCabinData, id),
    onSuccess() {
      toast.success('Cabin updated!!!');

      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError() {
      toast.error('Something went wrong please try again.');
    },
  });

  return { EditCabin, isUpdating };
};

export default useUpdateCabin;
