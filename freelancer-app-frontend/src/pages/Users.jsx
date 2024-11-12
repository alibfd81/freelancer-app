import UserBody from "../features/admin/UserBody"
import useUsers from "../features/admin/useUser"
import Loading from "../ui/Loading"

function Users() {
    const { isLoading, users } = useUsers()

    if (isLoading) return <Loading />
    if (!users.length) return <p>کاربری یافت نشد</p>
    return (
        <div className="m-5">
            <h1 className="text-secondary-600">کاربران</h1>
            <div className="flex flex-col justify-center m-5 bg-secondary-0 p-5 rounded-xl">
                <table>
                    <thead>
                        <tr className="">
                            <td>#</td>
                            <td>نام</td>
                            <td>ایمیل</td>
                            <td>شماره موبایل</td>
                            <td>نقش</td>
                            <td>وضعیت</td>
                            <td>عملیات</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return <UserBody user={user} key={user._id} index={index} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
