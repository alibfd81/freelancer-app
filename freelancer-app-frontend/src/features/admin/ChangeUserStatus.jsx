import { useState } from "react";
import useChangeUserStatus from "./useChangeUserStatus";
import { useQueryClient } from "@tanstack/react-query";

function ChangeUserStatus({ userId }) {
    const [status, setStatus] = useState(1); // وضعیت پیش‌فرض
    const { changeUserStatus, isUpdating } = useChangeUserStatus();
    const queryClient = useQueryClient();

    const changeStatus = (e) => {
        e.preventDefault();
        // ایجاد شیء data با وضعیت به عنوان رشته
        const data = {
            status: String(status), // اطمینان از اینکه وضعیت یک رشته است
        };

        //    اگر تایپ status از نوع string باشد باید if else که مینویسیم string باشد
        // let data = {};
        // if (status === 0) {
        //     data = {
        //         status: '0'
        //     };
        // } else if (status === 1) {
        //     data = {
        //         status: '1'
        //     };
        // } else {
        //     data = {
        //         status: '2'
        //     };
        // }
        // این خط کد را به شکلی حرفه ای تر در خط 13 نوشته ام
        changeUserStatus({ userId, data }, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["users"] });
            },
        });
    };

    return (
        <form onSubmit={changeStatus}>
            <select value={status} onChange={(e) => setStatus(Number(e.target.value))} className="textField__input">
                <option value="0">رد شده</option>
                <option value="1">در انتظار تایید</option>
                <option value="2">تایید شده</option>
            </select>
            <button type="submit" disabled={isUpdating} className="btn btn--primary mt-5 w-full block">تایید </button>
        </form>
    );
}

export default ChangeUserStatus;

