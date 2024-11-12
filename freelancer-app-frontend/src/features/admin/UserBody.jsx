import { useState } from "react";
import Modal from "../../ui/Modal";
import TextField from "../../ui/TextField";
import ChangeUserStatus from "./ChangeUserStatus";

function UserBody({ user, index }) {
    const [open, setOpen] = useState(false)
    const { status } = user;
    const statusStyle = [
        {
            label: "رد شده",
            className: "badge--danger"
        },
        {
            label: "در انتظار تایید",
            className: "badge--secondary"
        },
        {
            label: "تایید شده",
            className: "badge--success",
        }
    ]

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.role}</td>
            <td>
                <span className={`badge ${statusStyle[status].className}`}>
                    {
                        statusStyle[status].label
                    }
                </span>
            </td>
            <td>
                <button onClick={() => (setOpen(!open))}>تغییر وضعیت</button>
                <Modal open={open} onClose={() => setOpen(false)} title="تغییر وضعیت کاربر">
                    <ChangeUserStatus userId={user._id} />
                </Modal>
            </td>
        </tr>
    )
}

export default UserBody
