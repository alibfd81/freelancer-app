import ProposalRow from "./ProposalRow"

function ProposalTable({ proposals }) {
    console.log(proposals)
    if (!proposals.length) return <p>درخواستی وجود ندارد</p>
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>فریلنسر</th>
                    <th>توضیحات</th>
                    <th>زمان تحویل</th>
                    <th>هزینه</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
                </tr>
            </thead>
            <tbody>
                {
                    proposals.map((proposal, index) => {
                       return <ProposalRow index={index} proposal={proposal} key={proposal._id} />
                    })
                }
            </tbody>
        </table>
    )
}

export default ProposalTable
