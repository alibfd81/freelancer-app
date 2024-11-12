function TextField({ label, register, name, required, validationSchema, errors,type }) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 block text-secondary-700">{label} {required && <span className="text-error">*</span>}</label>
      <input type={type} className="textField__input" {...register(name, validationSchema)} />
      {errors && errors[name] && <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>}
    </div>
  )
}

export default TextField
