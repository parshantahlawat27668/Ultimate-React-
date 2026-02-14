import { formatCurrency } from '../../utils/helpers'
import { useDeleteCabin } from './useDeleteCabin';

import CreateCabinForm from './CreateCabinForm';
import Model from '../../ui/Model';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';

const CabinRow = ({ cabin }) => {
    const { id: cabinId, name, maxCapacity, regularPrice, discount, image } = cabin;

    const { deleteCabin } = useDeleteCabin();
    return (
        <Table.Row>
            <div className='w-full h-full flex items-center justify-center'>
                <img className='block  bg-cover bg-center transform scale-130 -translate-x-4' src={image} />
            </div>
            <div className=''>{name}</div>
            <div className=''>{maxCapacity}</div>
            <div>{formatCurrency(regularPrice)}</div>
            <div>{discount ? formatCurrency(discount) : <span>&mdash;</span>}</div>

            <div>
                <Model>
                    <Menus.Menu>
                        <Menus.Toggle id={cabinId} />
                        <Menus.List id={cabinId}>
                            <Model.Open opens={"edit-form"}>
                                <Menus.Button icon={<HiOutlinePencil size={18} />}>
                                    Edit
                                </Menus.Button>
                            </Model.Open>

                            <Model.Open opens={"conform-delete"}>
                            <Menus.Button icon={<HiOutlineTrash size={18} />}>
                                Delete
                            </Menus.Button>
                            </Model.Open>
                        </Menus.List>
                        <Model.Window name={"edit-form"}>
                            <CreateCabinForm cabin={cabin} />
                        </Model.Window>

                        <Model.Window name={"conform-delete"}>
                            <ConfirmDelete resourceName="Cabin" onConform={() => deleteCabin(cabinId)} />
                        </Model.Window>
                    </Menus.Menu>
                </Model>
            </div>
        </Table.Row>
    )
}

export default CabinRow
