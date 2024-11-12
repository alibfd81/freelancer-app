import { MdAssignmentAdd } from "react-icons/md"
import toLocalDateShort from "../../utils/toLocalDateShort"
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber"
import truncateText from "../../utils/truncateText"
import Modal from "../../ui/Modal"
import { useState } from "react"
import CreateProposals from "../proposals/CreateProposals"

function ProjectsTable({ project, index }) {
    const [open, setOpen] = useState(false)
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 30)}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocalDateShort(project.deadline)}</td>
            <td>
                <span className={`badge ${project.status === "OPEN" ? "badge--success" : "badge--danger"}`}> {
                    project.status === "OPEN" ? "باز" : "بسته"
                }</span>
            </td>
            <td>
                <button onClick={() => setOpen(true)}>
                    <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
                </button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title={`درخواست انجام پروژه ${project.title}`}>
                    <CreateProposals
                        projectId={project._id}
                        onClose={() => setOpen(false)} />
                </Modal>
            </td>
        </tr >
    )
}

export default ProjectsTable
