import { useForm } from 'react-hook-form'

import Button from '../../ui/Button'
import FormRow from '../../ui/FormRow'

import { useCreateCabin } from './useCreateCabin'
import { useEditCabin } from './useEditCabin'

const CreateCabinForm = ({ cabin = {}, closeModel }) => {

    const { id: editId, ...editValues } = cabin;
    const isEditSession = Boolean(editId);


    const { register, handleSubmit, reset, getValues, formState } = useForm({
        defaultValues: isEditSession ? editValues : {},
    });
    const { errors } = formState;

    const { createCabin, isCreating } = useCreateCabin();
    const { editCabin, isEditing } = useEditCabin();

    const onSubmit = (data) => {
        const image = typeof data.image === "string" ? data.image : data.image[0];

        if (isEditSession) editCabin({ newCabinData: { ...data, image }, id: editId }, { onSuccess: () =>{ reset(); closeModel?.()} });
        else createCabin({ ...data, image: image }, {
            onSuccess: () =>{ 
                reset();
                closeModel?.();
            }
        });
    }

    const onError = (errors) => {
        console.log(errors);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className=" flex flex-col gap-4 p-4 w-full">

            <FormRow label="Cabin name" error={errors?.name?.message || null}>
                <input
                    disabled={isCreating || isEditing}
                    type="text"
                    id="name"
                    className='inputBase'
                    {...register("name", {
                        required: "This field is required"
                    })}
                />
            </FormRow>


            <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message || null}>
                <input
                    disabled={isCreating || isEditing}
                    type="number"
                    id="maxCapacity"
                    className='inputBase'
                    {...register("maxCapacity", {
                        required: "This field is required",
                        min: {
                            value: 1,
                            message: "Capacity should be at least 1"
                        }
                    })}
                />
            </FormRow>

            <FormRow label="Regular Price" error={errors?.regularPrice?.message || null}>
                <input
                    disabled={isCreating || isEditing}
                    type="number"
                    id="regularPrice"
                    className='inputBase'
                    {...register("regularPrice", {
                        required: "This field is required"
                    })}
                />
            </FormRow>

            <FormRow label="Discount" error={errors?.discount?.message || null}>
                <input
                    disabled={isCreating || isEditing}
                    type="number"
                    id="discount"
                    defaultValue={0}
                    className='inputBase'
                    {...register("discount", {
                        required: "This field is required",
                        validate: (value) => value <= getValues().regularPrice || "Discount should be less than regular price"
                    })}
                />
            </FormRow>

            <FormRow label="Description" error={errors?.description?.message || null}>
                <textarea
                    disabled={isCreating || isEditing}
                    type="number"
                    id="description"
                    defaultValue=""
                    className='inputBase'
                    {...register("description")}
                />
            </FormRow>

            <FormRow label="Cabin Image" error={errors?.image?.message || null}>
                <input
                    disabled={isCreating || isEditing}
                    id="image"
                    accept="image/*"
                    type='file'
                    className=' rounded-md  text-sm text-purple-700  file:text-sm border-purple-600  file:bg-purple-600 file:py-2 file:px-3 file:rounded-md file:text-white  file:transform file:-translate-x-1 cursor-pointer file:cursor-pointer hover:file:bg-purple-700'
                    {...register("image", {
                        required: isEditSession ? false : "Cabin image is required"
                    })}
                />
            </FormRow>

            <div className='flex items-center justify-end gap-3'>
                <Button varient="delete" type='reset' onClick={()=>closeModel?.()}>
                    Cancel
                </Button>
                <Button type='submit' >{isEditSession ? "Edit cabin" : "Create new cabin"}</Button>
            </div>
        </form>
    )
}

export default CreateCabinForm
