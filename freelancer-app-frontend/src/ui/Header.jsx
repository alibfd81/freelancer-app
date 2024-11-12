import UserAvatar from "../features/Authentication/UserAvatar"
import HeaderMenu from "./HeaderMenu"

function Header() {
    return (
        <div className="flex float-end gap-x-10 m-3 ml-7">
            <UserAvatar />
            <HeaderMenu />
        </div>
    )
}

export default Header
