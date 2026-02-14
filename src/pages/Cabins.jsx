import AddCabin from '../features/cabins/AddCabin.jsx';
import CabinTable from '../features/cabins/CabinTable.jsx';
import CabinTableOperations from '../features/cabins/CabinTableOperations.jsx';

const Cabins = () => {
  
  return (
    <div className='overflow-auto flex flex-col gap-3 w-full'>
      <div className='flex flex-row items-center justify-between w-full'>
      <h2 className='text-2xl  py-2'>All Cabins</h2>
      <CabinTableOperations/>
      </div>
      <CabinTable/>
      <AddCabin/>
    </div>
  )
}

export default Cabins
