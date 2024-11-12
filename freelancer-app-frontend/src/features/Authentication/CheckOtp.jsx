import { useMutation } from "@tanstack/react-query";
import { useState } from "react"
import OtpInput from 'react-otp-input';
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CheckOtp({ phoneNumber }) {
    const navigate = useNavigate()
    const [otp, setOtp] = useState();
    const { mutateAsync } = useMutation({
        mutationFn: checkOtp
    })
    const checkOtpHandler = async (e) => {
        e.preventDefault()
        try {
            const { message, user } = await mutateAsync({ otp, phoneNumber })
            toast.success(message)
            if (!user.isActive) navigate("/complete-profile")
                console.log(user)
            if (user.role === "OWNER") return navigate("/owner")
            if (user.role === "FREELANCER") return navigate("/freelancer")
            if (user.role === "ADMIN") return navigate("/admin")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <form className="flex flex-col justify-center items-center" onSubmit={checkOtpHandler}>
            <span>کد تایید را وارد کنید</span>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                containerStyle="flex flex-row-reverse gap-x-2 justify-center"
                inputStyle={{
                    width: "2.5rem",
                    padding: "0.5rem 0.2rem",
                    border: "1px solid blue",
                    borderRadius: "0.5rem",
                }}
            />
            <button>
                تایید
            </button>
        </form>
    )
}

export default CheckOtp
