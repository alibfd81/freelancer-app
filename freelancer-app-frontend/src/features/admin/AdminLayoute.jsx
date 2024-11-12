import { NavLink } from "react-router-dom"
import AppLayoute from "../../ui/AppLayoute"
import { HiCollection, HiHome, HiOutlineViewGrid, HiUser } from "react-icons/hi"
import CustomNavlink from "../../ui/CustomNavlink"

function AdminLayoute() {
    return (
        <div>
            <AppLayoute >
                <ul className="flex flex-col gap-y-4 m-3">
                    <li>
                        <CustomNavlink path="dashboard">
                            <HiHome />
                            <span>داشبورد</span>
                        </CustomNavlink>
                    </li>
                    <li>
                        <CustomNavlink path="users">
                            <HiUser />
                            <span>کاربران</span>
                        </CustomNavlink>
                    </li>
                    <li>
                        <CustomNavlink path="projects">
                            <HiOutlineViewGrid />
                            <span>پروژه ها</span>
                        </CustomNavlink>
                    </li>
                    <li>
                        <CustomNavlink path="proposals">
                            <HiCollection />
                            <span>  درخواست ها</span>
                        </CustomNavlink>
                    </li>
                </ul>
            </AppLayoute>
        </div>
    )
}

export default AdminLayoute
