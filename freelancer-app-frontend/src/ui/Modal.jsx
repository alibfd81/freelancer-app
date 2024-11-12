import { useEffect, useRef } from "react"
import { HiOutlineX } from "react-icons/hi"

function Modal({ open, children, title, onClose }) {
    const ref = useRef()
    useEffect(() => {
        function handleClose(e) {
            if (ref.current && !ref.current.contains(e.target)) return onClose()
        }
        document.addEventListener("click", handleClose,true)
        return () => {
            document.removeEventListener("click", handleClose,true)
        }
    }, [onClose])
   
    if (open)
        return (
            <div className="backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
                <div className="space-y-8 bg-secondary-0 w-1/2 rounded-lg p-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100vh-2rem)]  overflow-y-auto" ref={ref}>
                    <div className="flex justify-between mt-3 mb-3">
                        <span className="text-secondary-700">{title}</span>
                        <button onClick={onClose} className="text-secondary-900">
                            <HiOutlineX />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        )
}

export default Modal
