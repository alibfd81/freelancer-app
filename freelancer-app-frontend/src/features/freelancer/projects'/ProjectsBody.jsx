import useProjects from "../../../hooks/useProjects"
import Loading from "../../../ui/Loading"
import ProjectsTable from "../../admin/ProjectsTable"

function ProjectsBody() {
    const { isLoading, projects } = useProjects()
    if (isLoading) return <Loading />
    if(!projects)return <p>پروژه یافت نشد</p>
    return (
        <div className="flex flex-col">
            <table className="">
                <thead>
                    <tr>
                        <td>#</td>
                        <td> عنوان پروژه</td>
                        <td>بودجه</td>
                        <td>ددلاین</td>
                        <td>وضعیت</td>
                        <td>عملیات</td>
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

export default ProjectsBody
