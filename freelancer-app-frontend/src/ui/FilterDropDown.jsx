import { useSearchParams } from "react-router-dom"

function FilterDropDown({ options, filterField }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleClick = (value) => {
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    }
    return (
        <select onChange={(e) => handleClick(e.target.value)} className="textField__input py-2 text-sm bg-secondary-0">
            {
                options.map((option) => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })
            }
        </select>
    )
}

export default FilterDropDown
