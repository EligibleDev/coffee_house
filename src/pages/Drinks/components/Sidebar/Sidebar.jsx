import CategoryQuery from "../CategoryQuery/CategoryQuery";
import SearchBox from "../SearchBox/SearchBox";

const Sidebar = () => {
    return (
        <aside className="w-1/4 space-y-14">
            <SearchBox />
            <CategoryQuery />
        </aside>
    );
};

export default Sidebar;
