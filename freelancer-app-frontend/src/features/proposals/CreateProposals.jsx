import { useForm } from "react-hook-form"
import TextField from "../../ui/TextField"
import useCreateProposals from "./useCreateProposals"
import Loading from "../../ui/Loading"

function CreateProposals({ projectId, onClose, open }) {
    const { createProposal, isCreating } = useCreateProposals()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        createProposal(
            { ...data, projectId },
            {
                onSuccess: () => onClose(),
            }
        );
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="توضیحات"
                    name="description"
                    register={register}
                    required
                    validationSchema={{
                        required: "توضیحات ضروری است",
                        minLength: {
                            value: 10,
                            message: "حداقل 10 کاراکتر را وارد کنید",
                        },
                    }}
                    errors={errors}
                />
                <TextField
                    label="قیمت"
                    name="price"
                    type="number"
                    register={register}
                    required
                    validationSchema={{
                        required: "قیمت ضروری است",
                    }}
                    errors={errors}
                />
                <TextField
                    label="مدت زمان"
                    name="duration"
                    type="number"
                    register={register}
                    required
                    validationSchema={{
                        required: "مدت زمان ضروری است",
                    }}
                    errors={errors}
                />
                {
                    isCreating ? (
                        <Loading />
                    ) : <button className="btn btn--primary w-full mt-6">تایید</button>
                }
            </form>
        </div>
    )
}

export default CreateProposals
