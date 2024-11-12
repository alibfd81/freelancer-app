import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProjectApi } from "../../services/projectService";

export default function useProject() {
    const {id} = useParams()
    const { data, isLoading } = useQuery({
        queryFn: () => getProjectApi(id),
        queryKey: ["project", id],
        retry: false
    })
    const { project } = data || {}
    return { isLoading, project }
}