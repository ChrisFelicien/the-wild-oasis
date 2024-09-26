import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

const useSetting = () => {
  const {
    isPending,
    error,
    data: settings,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  return { isPending, error, settings };
};

export default useSetting;
