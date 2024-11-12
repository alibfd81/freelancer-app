import AppLayoute from '../../ui/AppLayoute'
import { NavLink } from 'react-router-dom'
import { HiCollection, HiHome, HiOutlineViewGrid } from 'react-icons/hi'
import CustomNavlink from '../../ui/CustomNavlink'

function FreelancerLayoute() {
    return (
        <div>
            <AppLayoute>
                <ul className="flex flex-col gap-y-4 m-3">
                    <li>
                        <CustomNavlink path="dashboard">
                            <HiHome />
                            <span>داشبورد</span>
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

export default FreelancerLayoute
