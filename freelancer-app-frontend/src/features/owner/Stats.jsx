import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi"
import Stat from "../../ui/Stat"
import Loading from "../../ui/Loading"
import useOwnerProjects from "../projects/useOwnerProjects";

function Stats() {
    const { isLoading, projects } = useOwnerProjects();
    if (isLoading) return <Loading />
    const numOfProjects = projects.length
    const numOfAcceptedProjects = projects.map((p) => p.status === 2).length
    const numOfProposals = projects.reduce((acc, curr) => curr.proposals.length + acc, 0)
    return (
        <div className="flex gap-8 mr-5">
            <Stat
                icon={<HiOutlineViewGrid className="w-20 h-20 bg-primary-100 text-primary-700 rounded-3xl" />}
                title="پروژه "
                number={numOfProjects}
            />
            <Stat
                icon={<HiCurrencyDollar className="w-20 h-20 bg-green-100 text-green-700" />}
                title="پروژه های واگذار شده"
                number={numOfAcceptedProjects}
            />
            <Stat
                icon={<HiCollection className="w-20 h-20 bg-orange-100 text-orange-700" />}
                title="درخواست ها"
                number={numOfProposals}
            />

        </div>
    )
}

export default Stats
