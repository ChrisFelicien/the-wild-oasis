import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constant';

const useBooking = () => {
  const [searParams] = useSearchParams();
  const queryClient = useQueryClient();
  const sortByRaw = searParams.get('sortBy') || 'startDate-desc';

  const [field, direction] = sortByRaw.split('-');

  // Filter
  const filterValue = searParams.get('status');

  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue, method: 'eq' };

  const sortBy = { field, direction };

  // pagination
  const page = !searParams.get('page') ? 1 : Number(searParams.get('page'));

  const { isLoading, data, error, count } = useQuery({
    queryFn: () => getBookings({ filter, sortBy, page }),
    queryKey: ['booking', filterValue, sortBy, page],
  });
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
      queryKey: ['booking', filterValue, sortBy, page + 1],
    });

  if (page > 1) {
    queryClient.prefetchQuery({
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
      queryKey: ['booking', filterValue, sortBy, page - 1],
    });
  }
  return { isLoading, data, error };
};

export default useBooking;
