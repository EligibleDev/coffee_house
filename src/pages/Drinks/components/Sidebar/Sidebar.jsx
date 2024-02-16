import CategoryQuery from "../CategoryQuery/CategoryQuery";
import PriceRange from "../PriceRange/PriceRange";
import SearchBox from "../SearchBox/SearchBox";

const Sidebar = () => {
    return (
        <aside id="product-sidebar" className="sticky top-8 transition-all w-1/4 h-fit space-y-14">
            <SearchBox />
            <CategoryQuery />
            <PriceRange />
        </aside>
    );
};

export default Sidebar;
