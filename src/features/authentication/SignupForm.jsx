import React from 'react'
import FormRow from '../../ui/FormRow'
import Button from '../../ui/Button'
import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';

const SignupForm = () => {
    const {register, formState, getValues, handleSubmit, reset} = useForm();
    const {errors} = formState;
    const {signup, isSigningUp} = useSignup();

    const onSubmit = ({fullName, email, password})=>{
       signup({fullName, email, password},
        {
            onSettled:()=>reset(),
            
        });
    }

    const onError = (error)=>{
        console.log(error);
    }
  return (
    <form className='bg-gray-800 flex flex-col gap-4 py-5 px-5 rounded-md' onSubmit={handleSubmit(onSubmit,onError)}>
        <FormRow label="Full name" error={errors?.fullName?.message || null}>
            <input
            disabled={isSigningUp}
            type="text"
            id = "fullName"
            className='inputBase'
            {...register("fullName", {required:"This field is required"})}
            />
        </FormRow>

        <FormRow label="Email address" error={errors?.email?.message || null}>
            <input
            type="email"
            id = "email"
            disabled={isSigningUp}
            className='inputBase'
            {...register("email", {required:"This field is required", pattern:{
                value: /\S+@\S+\.\S+/, 
                message:"Please provide a valid email address"
            }})}
            />
        </FormRow>

        <FormRow label="Password (min * characters)" error={errors?.password?.message || null}>
            <input
            type="password"
            id = "password"
            className='inputBase'
            disabled={isSigningUp}
            {...register("password", {required:"This field is required",
                minLength:{
                    value:8,
                    message:"Password needs a minimum of 8 characters"
                }
            })}
            />
        </FormRow>

        <FormRow label="Repeat password" error={errors?.passwordConfirm?.message || null}>
            <input
            type="password"
            id = "passwordConfirm"
            className='inputBase'
            disabled={isSigningUp}
            {...register("passwordConfirm", {required:"This field is required",
                validate:(value)=> value === getValues().password ||  "Password needs to match"
            })}
            />
        </FormRow>

        <div className='flex items-center justify-end gap-2'>
            <Button varient='secondary' onClick={reset}>Cancel</Button>
            <Button type='submit'>
                {isSigningUp ? "Loading..." 
                : "Create new user"
                }
            </Button>
        </div>
    </form>
  )
}

export default SignupForm
