import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi"
import Stat from "../../ui/Stat"
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";

function Stats({ proposals }) {
    const numOfProposals = proposals.length;
    const acceptedProposals = proposals.filter((p) => p.status === 2);
    const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <div className="grid grid-cols-3 gap-8 m-4">
            <Stat
                title="درخواست ها"
                icon={<HiOutlineViewGrid className="h-20 w-20 bg-primary-100 text-primary-700 rounded-3xl" />}
                number={numOfProposals}
            />
            <Stat
                title="درخواست های تایید شده"
                icon={<HiCurrencyDollar className="h-20 w-20 bg-green-100 text-green-700 rounded-3xl" />}
                number={acceptedProposals.length}
            />
            <Stat
                title="کیف پول"
                icon={<HiCollection className="h-20 w-20 bg-orange-100 text-orange-700 rounded-3xl" />}
                number={toPersianNumbersWithComma(balance)}
            />

        </div>
    )
}

export default Stats
