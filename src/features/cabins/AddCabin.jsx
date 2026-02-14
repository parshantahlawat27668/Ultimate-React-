import CreateCabinForm from './CreateCabinForm';
import Button from '../../ui/Button';
import Model from '../../ui/Model';

const Addcabin = () => {
    return <Model>
        <Model.Open opens="cabin-form">
            <Button>Add new cabin</Button>
        </Model.Open>

        <Model.Window name="cabin-form">
            <CreateCabinForm />
        </Model.Window>
    </Model>
}

export default Addcabin;



// way to add any content in the modle 

        //  <Model.Open opens="table">
        //     <Button>Show table</Button>
        // </Model.Open>

        // <Model.Window name="table">
        //     <CabinTable />
        // </Model.Window>
