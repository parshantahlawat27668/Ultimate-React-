import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../utils/constants';



const Pagination = ({count}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count/PAGE_SIZE);

  const nextPage = ()=>{
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  const prevPage = ()=>{
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if(pageCount <= 1) return null;
  
  return (
    <div className='flex w-full items-center justify-between'>
      <p className='flex gap-1 text-sm '>
        Showing
        <span className=''>{(currentPage-1) * PAGE_SIZE + 1}</span>
        to
        <span className=''>{currentPage === pageCount ? count : currentPage * PAGE_SIZE}</span>
        of
        <span className=''>{count}</span>
        results
      </p>

      <div className='flex flex-row gap-1'>
        <button
        disabled={currentPage === 1}
        onClick={prevPage}
        className='flex items-center gap-0.5 cursor-pointer  hover:bg-purple-700 hover:text-white rounded-md py-1 pr-2 transform duration-400'>
          <HiChevronLeft size={23} />
          <span className=''>
          Previous
          </span>
        </button>

        <button 
        disabled={currentPage === pageCount}
        onClick={nextPage}
        className='flex items-center gap-0.5 cursor-pointer hover:bg-purple-700 hover:text-white rounded-md py-1 pl-2 transform duration-400
        
        ' >
          <span className=''>
            Next
          </span>
          <HiChevronRight size={23} />
        </button>
      </div>
    </div>
  )
}

export default Pagination
