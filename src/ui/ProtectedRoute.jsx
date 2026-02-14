import React, { useEffect } from 'react'
import { useUser } from '../features/authentication/useUser';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();

    const {isFetching, user , isAuthenticated} = useUser();

    useEffect(()=>{

        if(!isAuthenticated && !isFetching){
          navigate("/login");
      }
    },[isAuthenticated, isFetching, navigate, user]);

    if(isFetching) return (
    <div className='w-screen h-screen flex  items-center justify-center'>
        <p>Loading...</p>
    </div>);

  if(isAuthenticated) return children;
  return null
}

export default ProtectedRoute
