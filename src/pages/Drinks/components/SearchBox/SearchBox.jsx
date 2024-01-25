import { FaMagnifyingGlass } from "react-icons/fa6";
import searchBG from "../../../../assets/images/sidebar-background.png";

const SearchBox = () => {
    const handleSearch = (event) => {
        event.preventDefault();

        const data = event.target.data.value;
        console.log(data);
    };

    return (
        <div
            style={{ backgroundImage: `url('${searchBG}')` }}
            className="w-full bg-primary-green p-10 text-center"
        >
            <form
                className="bg-white flex items-center rounded-full py-1 pl-6 pr-1"
                onSubmit={handleSearch}
            >
                <input placeholder="Search Drinks..." className="w-full focus:outline-none" type="text" name="data" />
                <button
                    type="submit"
                    className="bg-secondary-black hover:bg-primary-green transition text-white text-xl p-4 rounded-full"
                >
                    <FaMagnifyingGlass />
                </button>
            </form>
        </div>
    );
};

export default SearchBox;
