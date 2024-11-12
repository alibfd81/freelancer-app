import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumber"
import truncateText from "../../utils/truncateText"
import Modal from "../../ui/Modal";
import { useState } from "react";

const statusStyle = [
    {
        label: "رد شده",
        className: "badge--danger",
    },
    {
        label: "در انتظار تایید",
        className: "badge--secondary",
    },
    {
        label: "تایید شده",
        className: "badge--success",
    },
];

function ProposalRow({ proposal, index }) {
    const [open, setOpen] = useState(false)
    const { user, status } = proposal
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>
                {truncateText(proposal.description, 60)}
            </td>
            <td>{toPersianNumbers(proposal.duration)} روز</td>
            <td>{toPersianNumbersWithComma(proposal.price)}</td>
            <td className={`badge ${statusStyle[status].className}`}>
                {
                    statusStyle[status].label
                }
            </td>
            <td>
                <Modal
                    title="تغییر وضعیت درخواست"
                    open={open}
                    onClose={() => setOpen(false)}>

                </Modal>
                <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
            </td>
        </tr>
    )
}

export default ProposalRow
