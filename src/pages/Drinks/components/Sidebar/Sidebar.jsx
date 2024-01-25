import CategoryQuery from "../CategoryQuery/CategoryQuery";
import PriceRange from "../PriceRange/PriceRange";
import SearchBox from "../SearchBox/SearchBox";

const Sidebar = () => {
    return (
        <aside className="w-1/4 space-y-14">
            <SearchBox />
            <CategoryQuery />
            <PriceRange />
        </aside>
    );
};

export default Sidebar;
