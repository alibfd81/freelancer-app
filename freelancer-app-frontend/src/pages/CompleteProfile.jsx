import { useMutation } from "@tanstack/react-query"
import TextField from "../ui/TextField"
import { completeProfile } from "../services/authService"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInput from "../ui/RadioInput";

function CompleteProfile() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate();
  const { mutateAsync } = useMutation({
    mutationFn: completeProfile
  })
  const onSubmit = async (data) => {
    // e.preventDefault()
    try {
      const { message, user } = await mutateAsync(data)
      toast.success(message)
      if (!user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") navigate("/owner")
      if (user.role === "FREELANCER") navigate("/freelancer")
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
  }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
      <TextField label=" نام و نام خانوادگی:" register={register} name="name" />
      <TextField label="ایمیل:" register={register} name="email" />
      <div className="flex mt-3 gap-x-5">
        <RadioInput label="کارفرما" name="role" register={register} value="OWNER" />
        <RadioInput label="فریلنسر" name="role" register={register} value="FREELANCER" />
      </div>
      <button className="border px-5 py-1 rounded-lg bg-blue-600 text-white mt-5">تایید</button>
    </form>
  )
}

export default CompleteProfile
