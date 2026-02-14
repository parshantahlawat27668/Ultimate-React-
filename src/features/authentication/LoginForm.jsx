import React, { useState } from 'react'
import FormRow from '../../ui/FormRow'
import Button from '../../ui/Button';
import { useLogin } from './useLogin';

const LoginForm = () => {
    const [email, setEmail] = useState("tester@gmail.com");
    const [password, setPassword] = useState("password");
    const {login, isLogingIn} = useLogin();


     function handleSubmit(e){
        e.preventDefault();
        if(!email || !password) return;

        login({email, password},{
            onSettled:()=>{
                setEmail("");
                setPassword("");
            }
        });
    }

    return (
        <form className='flex flex-col gap-3 rounded-lg bg-gray-800 text-white pt-5 pb-10 px-8'>
            <div className='flex flex-col w-80 gap-1'>
                <label htmlFor='email' className='text-md '>Email address</label>
                <input
                    className='inputBase'
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(() => e.target.value)}
                />
            </div>

            <div className='flex flex-col w-80 gap-1 mb-1'>
                <label htmlFor='email' className='text-md  '>Password</label>
                <input
                    className='inputBase'
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(() => e.target.value)}
                />
            </div>

            <Button onClick={(e)=>handleSubmit(e)}>
                {
                    isLogingIn ? "Loading..." : "Login"
                }
            </Button>
        </form>
    )
}

export default LoginForm
