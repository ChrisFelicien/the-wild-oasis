import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

const useBooking = () => {
  const [searParams] = useSearchParams();
  const sortByRaw = searParams.get('sortBy') || 'startDate-desc';

  const [field, direction] = sortByRaw.split('-');

  const filterValue = searParams.get('status');

  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue, method: 'eq' };

  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryFn: () => getBookings({ filter, sortBy }),
    queryKey: ['booking', filterValue, sortBy],
  });

  return { isLoading, bookings, error };
};

export default useBooking;
