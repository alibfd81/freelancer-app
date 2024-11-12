import { useState } from "react"
import { HiOutlinePlus } from "react-icons/hi"
import Modal from "../../ui/Modal";
import CreateProjectsForm from "./CreateProjectsForm";

function ProjectHeader() {
    const [open, setopen] = useState(false);
    return (
        <div className="flex justify-between">
            <span className="text-secondary-700">پروژه های شما</span>
            <div className="">
                <Modal onClose={() => setopen(false)} open={open} title="اضافه کردن پروژه جدید">
                    <CreateProjectsForm onClose={() => setopen(false)} />
                </Modal>
                <button className="flex items-center gap-x-2 btn btn--primary" onClick={() => setopen(!open)}>
                    <span>اضافه کردن پروژه</span>
                    <HiOutlinePlus />
                </button>
            </div>
        </div>
    )
}

export default ProjectHeader
