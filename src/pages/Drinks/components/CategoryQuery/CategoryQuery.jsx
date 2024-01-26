import { useEffect, useState } from "react";
import QueryTitle from "../QueryTitle/QueryTitle";
import { FaChevronRight } from "react-icons/fa";

const CategoryQuery = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        fetch(`/categories.json`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div>
            <QueryTitle>Product Categories</QueryTitle>

            <nav className="flex flex-col gap-3">
                {categories?.map((item) => (
                    <div
                        onClick={() => {
                            setCategory(item?.name);
                        }}
                        className="flex items-center gap-2 text-secondary-black hover:text-primary-green text-sm font-bold transition cursor-pointer"
                        key={item?._id}
                    >
                        <FaChevronRight className="text-primary-green" />
                        <p>{item?.name}</p>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default CategoryQuery;
