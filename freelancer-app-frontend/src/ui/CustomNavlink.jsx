import { NavLink } from "react-router-dom"

function CustomNavlink({ children, path }) {
    const navlinkClass = 'flex items-center gap-x-2 px-2 py-2 hover:text-primary-900 hover:bg-primary-100/80 rounded-lg mt-2'
    return (
        <NavLink className={({ isActive }) =>
            isActive ? `${navlinkClass} bg-primary-100/80 text-primary-900`
                : `${navlinkClass} text-secondary-600`
        }
            to={path}

        >
            {children}
        </NavLink>
    )
}

export default CustomNavlink
