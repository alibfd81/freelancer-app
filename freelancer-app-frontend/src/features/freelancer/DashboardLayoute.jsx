import DashBoardHeader from "../../ui/DashBoardHeader"
import Loading from "../../ui/Loading"
import useProposals from "../proposals/useProposals"
import Stats from "./Stats"
function DashboardLayoute() {
    const { isLoading, proposals } = useProposals()
    if (isLoading) return <Loading />
    return (
        <div>
            <DashBoardHeader />
            <Stats proposals={proposals} />
        </div>
    )
}

export default DashboardLayoute
