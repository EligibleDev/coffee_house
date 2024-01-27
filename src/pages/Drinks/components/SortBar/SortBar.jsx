import { Dropdown } from "keep-react";
import { useState } from "react";
import useUtils from "../../../../hooks/useUtils/useUtils";

const SortBar = () => {
    const { sortingMethods } = useUtils();
    const [sortingMethod, setSortingMethod] = useState(sortingMethods[0].method);

    return (
        <div className="w-full bg-[#efece5] flex justify-between items-center py-4 px-7 font-jost text-secondary-black text-sm font-normal">
            <p className="">Showing 1-6 of 19 results</p>

            <Dropdown label={sortingMethod} size="sm" dismissOnClick>
                {sortingMethods.map((item) => (
                    <Dropdown.Item
                        onClick={() => setSortingMethod(item.method)}
                        key={item.method}
                    >
                        {item.method}
                    </Dropdown.Item>
                ))}
            </Dropdown>
        </div>
    );
};

export default SortBar;
