import { useForm } from "react-hook-form"
import TextField from "../../ui/TextField"
import RHFSelect from "../../ui/RHFSelect"
import useCategories from "../../hooks/useCategories"
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import useCreateProject from "./useCreateProjects";
import useEditProject from "./useEditProjects";

function CreateProjectsForm({ onClose, editProjects = {} }) {
    const { _id: editId } = editProjects
    const isEditSession = Boolean(editId)


    const {
        title,
        description,
        budget,
        category,
        deadline,
        tags: prevTags,
    } = editProjects
    let editValue = {}
    if (isEditSession) {
        editValue = {
            title,
            description,
            budget,
            category: category._id,
        }
    }


    const [tags, setTags] = useState(prevTags || []);
    const [date, setDate] = useState(new Date(deadline || ""));
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: editValue })
    const { isCreating, createProject } = useCreateProject();
    const { categories } = useCategories()
    const { editProject } = useEditProject()


    const onSubmit = (data) => {
        const newProject = {
            ...data,
            deadline: new Date(date).toISOString(),
            tags,
        }
        if (isEditSession) {
            editProject({ id: editId, newProject },
                {
                    onSuccess: () => {
                        onClose();
                        reset()
                    }
                })
        } else {
            createProject(newProject, {
                onSuccess: () => {
                    onClose();
                    reset()
                }
            })
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <TextField
                errors={errors}
                label="عنوان"
                name="title"
                register={register}
                validationSchema={{
                    required: "عنوان ضروری است",
                    minLength: {
                        value: 10,
                        message: "حداقل 10 کاراکتر را وارد کنید",
                    }
                }}
                required />
            <TextField
                errors={errors}
                required
                label="توضیحات"
                name="description"
                register={register}
                validationSchema={{
                    required: "توضیحات ضروری است",
                    minLength: {
                        value: 10,
                        message: "حداقل 10 کاراکتر را وارد کنید"
                    }
                }}
            />
            <TextField
                errors={errors}
                required
                label="بودجه"
                name="budget"
                register={register}
                validationSchema={{
                    required: "بودجه ضروری است",
                }}
            />
            <RHFSelect label="دسته بندی" name="category" register={register} options={categories} />
            <div>
                <label className="mb-2 block text-secondary-700">تگ</label>
                <TagsInput value={tags} onChange={setTags} name="tags" />
            </div>
            <label htmlFor="" className="text-secondary-700">ددلاین</label>
            <DatePicker
                containerClassName="w-full"
                inputClass="textField__input"
                calendarPosition="bottom-center"
                value={date}
                onChange={(date) => setDate(date)}
                format="YYYY/MM/DD"
                calendar={persian}
                locale={persian_fa}
            />
            <button type="submit" className="btn btn--primary mt-5 w-full">
                تایید
            </button>
        </form>
    )
}

export default CreateProjectsForm

