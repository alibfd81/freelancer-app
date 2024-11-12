function RadioInput({ label, name, register, value }) {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type="radio" name={name} {...register(name)} value={value} />
        </div>
    )
}

export default RadioInput
