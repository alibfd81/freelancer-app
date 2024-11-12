import { toPersianNumbers } from "../utils/toPersianNumber"

function Stat({ icon, title, number }) {
    return (
        <div className="bg-secondary-0 flex items-center justify-center rounded-2xl p-3">
            <div className="p-4">{icon}</div>
            <div>
                <span className="block font-bold text-lg text-secondary-500">{title}</span>
                <span className="font-bold text-3xl text-secondary-900">{toPersianNumbers(number)}</span>
            </div>
        </div>
    )
}

export default Stat
