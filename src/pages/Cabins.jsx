import AddCabin from '../features/cabins/AddCabin';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from './../features/cabins/CabinTable';

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / sort</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
