import ProposalsTable from "../features/proposals/ProposalsTable"
import useProposals from "../features/proposals/useProposals"
import Loading from "../ui/Loading"

function Proposals() {
    const { proposals, isLoading } = useProposals()
    if (isLoading) return <Loading />
    return (
        <div className="m-7 flex flex-col">
            <h1 className="text-secondary-600">لیست درخواست ها</h1>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>توضیحات ها</td>
                        <td>زمان تحویل</td>
                        <td>هزینه</td>
                        <td>وضعیت</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        proposals.map((proposal, index) => {
                            return <ProposalsTable key={proposal._id} proposal={proposal} index={index} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Proposals
