import TableOperation from './../../ui/TableOperations';
import Filter from './../../ui/Filter';

const CabinTableOperations = () => {
  return (
    <TableOperation>
      <Filter
        filterField={'discount'}
        options={[
          {
            value: 'all',
            label: 'All',
          },
          {
            value: 'with-discount',
            label: 'With discount',
          },
          {
            value: 'no-Discount',
            label: 'No discount',
          },
        ]}
      />
    </TableOperation>
  );
};

export default CabinTableOperations;
