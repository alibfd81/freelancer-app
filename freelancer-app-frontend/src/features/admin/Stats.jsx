import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi"
import Stat from "../../ui/Stat"
import Loading from "../../ui/Loading"
import useProposals from "../proposals/useProposals";
import useUsers from "./useUser";
import useProjects from "../../hooks/useProjects";

function Stats() {
    const { isLoading: isLoading1, proposals } = useProposals();
    const { isLoading: isLoading2, projects } = useProjects();
    const { isLoading: isLoading3, users } = useUsers();

    if (isLoading1 || isLoading2 || isLoading3) return <Loading />;

    return (
        <div className="flex gap-8 mr-5">
            <Stat
                icon={<HiUser className="w-20 h-20 bg-primary-100 text-primary-700 rounded-3xl" />}
                title="کاربران "
                number={users.length}
            />
            <Stat
                icon={<HiOutlineViewGrid className="w-20 h-20 bg-green-100 text-green-700" />}
                title="درخواست ها"
                number={proposals.length}
            />
            <Stat
                icon={<HiCollection className="w-20 h-20 bg-orange-100 text-orange-700" />}
                title="پروژه ها"
                number={projects.length}
            />

        </div>
    )
}

export default Stats
