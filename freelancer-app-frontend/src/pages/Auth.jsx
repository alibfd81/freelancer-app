import { useState } from "react"
import SendOtp from "../features/Authentication/SendOtp";
import CheckOtp from "../features/Authentication/CheckOtp";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Auth() {
    const { register, handleSubmit, getValues } = useForm()
    const [step, setStep] = useState(1);
    const { isPending, mutateAsync, data: otpResponse } = useMutation({
        mutationFn: getOtp
    })
    const setOtpHandler = async (data) => {
        console.log(data)
        try {
            const { message } = await mutateAsync( data )
            setStep(2)
            toast.success(message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const renderStep = () => {
        switch (step) {
            case 1: return <SendOtp onSubmit={handleSubmit(setOtpHandler)} register={register} />
            case 2: return <CheckOtp phoneNumber={getValues("phoneNumber")} />
            default:return null
        }
    }
    return (
        <div>
            {renderStep()}
        </div>
    )
}

export default Auth
