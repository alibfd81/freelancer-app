import { NavLink } from "react-router-dom"
import AppLayoute from "../../ui/AppLayoute"
import SideBar from "../../ui/SideBar"
import { BsFillCollectionFill } from "react-icons/bs"
import { IoMdHome } from "react-icons/io"
import CustomNavlink from "../../ui/CustomNavlink"

function OwnerLayoute() {
    return (
        <AppLayoute>
            <SideBar>
                <ul>
                    <li>
                        <CustomNavlink path="dashboard">
                            <IoMdHome />
                            <span>داشبورد</span>
                        </CustomNavlink>
                    </li>
                    <li>
                        <CustomNavlink path="projects">
                            <BsFillCollectionFill />
                            <span> پروژه ها</span>
                        </CustomNavlink>
                    </li>
                </ul>
            </SideBar>
        </AppLayoute>
    )
}

export default OwnerLayoute
