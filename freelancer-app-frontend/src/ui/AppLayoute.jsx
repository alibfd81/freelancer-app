import { Outlet } from "react-router-dom"
import Header from "./Header"

function AppLayoute({ children }) {
    return (
        <div className="grid h-screen grid-cols-[15rem_1fr] grid-rows-[auto_1fr]">
            <div className="bg-secondary-0"><Header /></div>
            <div className="row-span-2 row-start-1 bg-secondary-0">
                {/* <SideBar /> */}
                {children}
            </div>
            <div className="bg-secondary-100"><Outlet /></div>
        </div>
    )
}

export default AppLayoute
