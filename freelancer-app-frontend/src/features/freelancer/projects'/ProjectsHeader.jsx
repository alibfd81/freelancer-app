import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter"
import FilterDropDown from "../../../ui/FilterDropDown";

function ProjectsHeader({ projects }) {
    const { transformedCategories } = useCategories()
    const statusOptions = [
        {
            label: "همه",
            value: "ALL",
        },
        {
            label: "باز",
            value: "OPEN",
        },
        {
            label: "بسته",
            value: "CLOSED",
        },
    ];
    const sortDate = [
        {
            label: "قدیمی ترین",
            value: "earlist"
        },
        {
            label: "جدید ترین",
            value: "latest"
        }
    ]
    return (
        <div className="mb-6 flex justify-between items-center">
            <h1 className="text-secondary-600">لیست پروژه ها</h1>
            <div className="flex gap-x-10">
                <Filter filterField="status" options={statusOptions} />
                <div>
                    <FilterDropDown filterField="sort" options={sortDate} />
                </div>
                <div>
                    <FilterDropDown
                        filterField="category"
                        options={[
                            ...transformedCategories, {
                                label: "دسته بندی (همه)",
                                value: "ALL",
                            }
                        ]} />
                </div>
            </div>
        </div>
    )
}

export default ProjectsHeader
