import React from 'react'
import FormRow from '../../ui/FormRow'
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import { useUpdateUser } from './useUpdateUser';

const UpdatePasswordForm = () => {
    const { register, handleSubmit, formState, getValues, reset } = useForm();
    const {updateUser, isUpdating} = useUpdateUser();
    const { errors } = formState;


    function onSubmit({ password }) {
        updateUser({password}, {onSettled:reset()});
    }
    return (
        <>
            <h2 className='text-lg mt-3 '>Update password</h2>
            <form className='bg-gray-400 py-7 px-7 rounded-md flex flex-col gap-5'
            onSubmit={handleSubmit(onSubmit)}
            >
                <FormRow
                    label="New password (min 8 chars)"
                    error={errors?.password?.message}
                >
                    <input
                        className='inputBase'
                        type='password'
                        id='password'
                        disabled = {isUpdating}
                        {...register("password", {
                            required: "This field is required",
                            minLength: {
                                value: 8,
                                message: "Password needs a minimum of 8 characters"
                            }
                        })}
                    ></input>
                </FormRow>

                <FormRow
                    label="Confirm password"
                    error={errors?.confirmPassword?.message}
                >
                    <input
                        className='inputBase'
                        type='password'
                        id='confirmPassword'
                        disabled = {isUpdating}
                        {...register("confirmPassword", {
                            required: "This field is required",
                            validate:(value)=>getValues().password === value || "Password need to match"
                        })}
                    ></input>
                </FormRow>

                <div className='flex items-center justify-end gap-2'>
                    <Button varient='secondary' type='reset' onClick={reset}>Cancel</Button>
                    <Button
                    disabled={isUpdating}
                    type='submit'
                    >Updata password</Button>
                </div>
            </form>
        </>
    )
}

export default UpdatePasswordForm
