import { useForm } from "react-hook-form"
import TextField from "../../ui/TextField"

function SendOtp({ onSubmit,register }) {
    return (
        <form className="flex flex-col items-center mt-5" onSubmit={onSubmit}>
            <TextField register={register} name="phoneNumber" label="شماره موبایل" />
            <button className="btn btn--primary mt-4">ارسال کد تایید</button>
        </form>
    )
}

export default SendOtp
