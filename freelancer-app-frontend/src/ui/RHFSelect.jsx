function RHFSelect({ options, label, register, required, name }) {
    return (
        <div className="flex flex-col">
            <label className="mb-2 block text-secondary-700">{label}{required && <span className="text-error">*</span>}</label>
            <select className="textField__input" {...register(name)}>
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default RHFSelect
