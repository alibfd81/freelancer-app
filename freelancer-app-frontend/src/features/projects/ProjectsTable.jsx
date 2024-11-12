import { HiEye, HiOutlineTrash } from "react-icons/hi"
import { TbPencilMinus } from "react-icons/tb"
import Modal from "../../ui/Modal"
import { useState } from "react"
import truncateText from "../../utils/truncateText"
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber"
import toLocalDateShort from "../../utils/toLocalDateShort"
import { Link } from "react-router-dom"
import CreateProjectsForm from "./CreateProjectsForm"
import ConfirmDelete from "../../ui/ConfirmDelete"
import useRemoveProject from "./useRemoveProjects"
import ToggleProjectsStatus from "./ToggleProjectsStatus"

function ProjectsTable({ project, index }) {
    const [open, setOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const { removeProject } = useRemoveProject()
    return (
        <tr key={project._id}>
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 10)}</td>
            <td>{project.category?.title}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocalDateShort(project.deadline)}</td>
            <td>{project.tags.join("-")}</td>
            <td>{project.freelancer?.name || "-"}</td>
            <td>
                <ToggleProjectsStatus project={project} />
            </td>
            <td>
                <div className="flex items-center gap-x-4">
                    <>
                        <button onClick={() => setOpen(!open)}>
                            <TbPencilMinus className="w-5 h-5 text-primary-900" />
                        </button>
                        <Modal title={`ویرایش ${project.title}`} open={open} onClose={() => setOpen(false)}>
                            <CreateProjectsForm editProjects={project} onClose={() => setOpen(false)} />
                        </Modal>
                    </>
                    <>
                        <button onClick={() => setIsDeleteOpen(!isDeleteOpen)}>
                            <HiOutlineTrash className="w-5 h-5 text-error" />
                        </button>
                        <Modal title={`حذفF ${project.title}`} open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
                            <ConfirmDelete
                                tittle={project.title}
                                onClose={() => setIsDeleteOpen(false)}
                                confirmDelete={() =>
                                    removeProject(project._id, {
                                        onSuccess: () => setIsDeleteOpen(false),
                                    })
                                }

                            />
                        </Modal>
                    </>
                </div>
            </td>
            <td>
                <Link to={project._id} className="flex justify-center">
                    <HiEye className="w-5 h-5 text-primary-800" />
                </Link>
            </td>
        </tr>
    )
}

export default ProjectsTable
