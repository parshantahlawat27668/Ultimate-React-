import React, { createContext, useContext } from 'react'

const TableContext = createContext();

const Table = ({ columns, children }) => {
    return (
        <TableContext.Provider value={{ columns }}>
            <div
                role='table'
                className='border border-gray-800 rounded-md overflow-hidden  bg-gray-800'
            >
                {children}
            </div>
        </TableContext.Provider>
    )
}

const Header = ({ children }) => {
    const { columns } = useContext(TableContext);
    return (
    
    <div
    role='row'
    className={`uppercase grid  gap-x-5 items-center  py-4 px-[2.4rem] font-medium tracking-wider`}
    style={{ gridTemplateColumns: columns }}
    >
        {children}
    </div>

)}

const Row = ({ children }) => {
    const { columns } = useContext(TableContext);
    return (

    <div
    role='row'
    className={`grid  gap-x-5 items-center py-4 
         px-[2.4rem] tracking-wider border-b border-gray-600  bg-gray-700`}
         style={{ gridTemplateColumns: columns }}
    >
        {children}
    </div>
    
)}

const Body = ({data, render}) => {
    return (
        <section className='mx-0 my-0.5'>
            {data?.map(render)}
        </section>
    )
}

const Footer = ({children})=>{
    return (<footer 
    className='flex  justify-center p-4'
    >
        {children}
    </footer>)
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;


export default Table
