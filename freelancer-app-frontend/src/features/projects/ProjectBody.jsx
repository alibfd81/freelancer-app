import Loading from "../../ui/Loading"
import useOwnerProjects from "./useOwnerProjects"
import ProjectsTable from "./ProjectsTable"
import { useState } from "react"

function ProjectBody() {
    const [open, setOpen] = useState(false)
    const { isLoading, projects } = useOwnerProjects()
    if (isLoading) return <Loading />
    return (
        <div className="flex flex-col m-5 bg-secondary-0 p-5 rounded-xl">
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>عنوان پروژه</td>
                        <td>دسته بندی</td>
                        <td>بودجه</td>
                        <td>ددلاین</td>
                        <td>تگ ها</td>
                        <td>فریلنسر</td>
                        <td>وضعیت</td>
                        <td>عملیات</td>
                        <td>درخواست ها</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((project, index) => {
                            return <ProjectsTable key={project._id} project={project} index={index} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProjectBody
