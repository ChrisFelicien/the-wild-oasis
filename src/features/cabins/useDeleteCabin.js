import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteCabin as deleteCabinAPi } from '../../services/apiCabins';
import toast from 'react-hot-toast';

const useDeleteCabin = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinAPi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      toast.success('Cabin deleted');
    },
    onError: () => {
      toast.error('Something went wrong please try again later');
    },
  });

  return { isDeleting, deleteCabin };
};

export default useDeleteCabin;
