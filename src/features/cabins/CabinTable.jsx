import Spinner from './../../ui/Spinner';
import CabinRow from './CabinRow';
import useFetchAllCabin from './useFetchAllCabin';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';

const CabinTable = () => {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get('discount') || 'all';

  const { isLoading, cabins, error } = useFetchAllCabin();

  if (isLoading) return <Spinner />;

  if (error) {
    <p>Something went wrong. please try again later.</p>;
  }

  let cabinsFiltered;

  if (filterValue === 'all') cabinsFiltered = cabins;
  if (filterValue === 'no-Discount')
    cabinsFiltered = cabins.filter((c) => !c.discount);

  if (filterValue === 'with-discount')
    cabinsFiltered = cabins.filter((c) => c.discount);
  return (
    <Menus>
      <Table columns={`0.6fr 1.8fr 2.2fr 1fr 1fr 1fr`}>
        <Table.Header>
          <div />
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div />
        </Table.Header>
        <Table.Body
          data={cabinsFiltered}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
