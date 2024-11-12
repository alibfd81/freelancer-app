import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumber"
import truncateText from "../../utils/truncateText"

const statusStyle = [
    {
        className: "badge--danger",
        value: "رد شده"
    },
    {
        className: "badge--secondary",
        value: "در انتظار تایید"
    },
    {
        className: "badge--success",
        value: "تایید شده"
    }
]


function ProposalsTable({ proposal, index }) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{truncateText(proposal.description, 25)}</td>
            <td>{toPersianNumbers(proposal.duration)}روز</td>
            <td>{toPersianNumbersWithComma(proposal.price)}</td>
            <td>
                <span className={`badge ${statusStyle[proposal.status].className}`}>
                    {statusStyle[proposal.status].value}
                </span>
            </td>
        </tr>
    )
}

export default ProposalsTable
