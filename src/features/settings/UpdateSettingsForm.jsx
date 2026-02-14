import React from 'react'
import FormRow from '../../ui/FormRow'
import { useSettings } from './useSettings'
import { useUpdateSetting } from './useUpdateSetting';

const UpdateSettingsForm = () => {
    const {settings:{minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice}={}, isFetching} = useSettings();

    const {isUpdating, updateSetting} = useUpdateSetting();

    const handleUpdate = (e, field) => {
        const {value} = e.target;
        console.log(value);
        if(!value) return ;
        updateSetting({[field]:value});
    }


    if(isFetching || isUpdating) (<p>Loading...</p>)


    return (
        <form className='flex flex-col gap-7 px-8 py-6 rounded-md  bg-gray-800 w-full'>
            <FormRow label="Minimum nights/booking">
                <input
                    className='inputBase'
                    type="number"
                    id='min-nights'
                    defaultValue={minBookingLength}
                    disabled={isUpdating}
                    onBlur={(e)=>handleUpdate(e, "minBookingLength")}
                />
            </FormRow>

            <FormRow label="Maximum nights/booking">
                <input
                    className='inputBase'
                    type="number"
                    id='max-nights'
                    defaultValue={maxBookingLength}
                    disabled={isUpdating}
                    onBlur={(e)=>handleUpdate(e, "maxBookingLength")}
                />
            </FormRow>

            <FormRow label="Maximum guests/booking">
                <input
                    className='inputBase'
                    type="number"
                    id='max-guests' 
                    defaultValue={maxGuestsPerBooking}
                    disabled={isUpdating}
                    onBlur={(e)=>handleUpdate(e, "maxGuestsPerBooking")}
                />
            </FormRow>

            <FormRow label="Breakfast price">
                <input
                    className='inputBase'
                    type="number"
                    id='breakfast-price'
                    defaultValue={breakfastPrice}
                    disabled={isUpdating}
                    onBlur={(e)=>handleUpdate(e, "breakfastPrice")}
                />
            </FormRow>


        </form>
    )
}

export default UpdateSettingsForm
