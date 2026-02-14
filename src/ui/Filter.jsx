import { useSearchParams } from 'react-router-dom';


function Option({ onClick, children, isActive }) {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer text-sm  py-1 px-4 rounded-md  hover:bg-purple-500 hover:text-white transform duration-300
    ${isActive ? "bg-purple-600 text-white" : ""}`}
        >
            {children}
        </button>
    )
}


const Filter = ({ field, options }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(field) || options.at(0).value;

    // const handleClick = (value) => {
    //     searchParams.set(field, value);
    //     searchParams.set("page", 1);
    //     setSearchParams(searchParams);
    // }

    const handleClick = (value) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(field, value);
        newParams.set("page", 1);

        setSearchParams(newParams);
    };
    return (
        <div className='border border-gray-400  shadow-2xl rounded-md flex gap-3'>
            {
                options.map((option) => {
                    return <Option
                        key={option.value}
                        onClick={() => handleClick(option.value)}
                        isActive={option.value === currentFilter}
                    >
                        {option.label}
                    </Option>
                })
            }
        </div>
    )
}

export default Filter
