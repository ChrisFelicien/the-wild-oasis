import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

const useBooking = () => {
  const [searParams] = useSearchParams();
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

  const { isLoading, data, error } = useQuery({
    queryFn: () => getBookings({ filter, sortBy, page }),
    queryKey: ['booking', filterValue, sortBy, page],
  });

  return { isLoading, data, error };
};

export default useBooking;
