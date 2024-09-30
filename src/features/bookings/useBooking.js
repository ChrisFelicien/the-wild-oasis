import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';

const useBooking = () => {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryFn: getBookings,
    queryKey: ['booking'],
  });

  return { isLoading, bookings, error };
};

export default useBooking;
