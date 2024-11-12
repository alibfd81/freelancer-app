import { useSearchParams } from "react-router-dom";
function Filter({ filterField, options }) {
    const [serchParams, setSearchParams] = useSearchParams();
    const currentFilter = serchParams.get(filterField) || options.at(0).value;
    const handleClick = (value) => {
        serchParams.set(filterField, value)
        setSearchParams(serchParams)
    }
    return (
        <div className="flex gap-x-2 items-center">
            <span className="text-secondary-600">وضعیت</span>
            <div className="flex gap-x-8 rounded-lg p-2 bg-secondary-0">
                {
                    options.map((option) => {
                        const isActive = option.value === currentFilter
                        return <button key={option.value} onClick={() => handleClick(option.value)}
                            className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300
                            ${isActive
                                    ? "!bg-primary-900 text-white"
                                    : "bg-secondary-0 text-secondary-800"
                                } 
                             `}
                        >{option.label}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Filter
