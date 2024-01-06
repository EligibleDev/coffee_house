import { useEffect, useState } from "react";
import Title from "../../../../components/Title/Title";
import { Tabs } from "keep-react";
import storageBG from "../../../../assets/images/storage-bg.jpg";
import paperBG from "../../../../assets/images/paper-bg.png";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";

const BestSellers = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [coffees, setCoffees] = useState([]);

    //tabpanel er kisui kaj nai. onTabChange function e index change kore oi index onujayi fetch korte hobe

    const handleChangeCategory = (index) => {
        setCategoryIndex(index);
    };

    useEffect(() => {
        fetch("/best-sellers.json")
            .then((res) => res.json())
            .then((data) => setCoffees(data));
    }, []);

    return (
        <section style={{ backgroundImage: `url('${storageBG}')` }} className="">
            <div className="bg-secondary-black/70 w-full flex flex-col items-center py-20">
                <Title
                    title="We Have the best for you!"
                    subTitle="Best Sellers"
                    className="text-white mb-16"
                />
                <div
                    style={{ backgroundImage: `url('${paperBG}')` }}
                    className="bg-auto xl:bg-contain bg-no-repeat h-[1120px] w-11/12 mx-auto bg-center py-40 text-center flex flex-col items-center"
                >
                    <Tabs
                        aria-label="Tabs"
                        style="underline"
                        className="border-b-0"
                        borderPosition="bottom"
                        onActiveTabChange={handleChangeCategory}
                        iconPosition="left"
                    >
                        <Tabs.Item active title="Coffee" />
                        <Tabs.Item title="Tea" />
                        <Tabs.Item disabled title="Chocolate" />
                    </Tabs>
                    <div className="w-7/12 overflow-auto space-y-4">
                        {coffees?.map((coffee) => (
                            <div
                                key={coffee?._id}
                                className="flex items-center justify-between gap-8 pr-4"
                            >
                                <Link className="" to={`/drink/${coffee?._id}`}>
                                    <img
                                        className="w-32"
                                        src={coffee?.thumbnail}
                                        alt={coffee?.name}
                                    />
                                </Link>

                                <div className="w-full">
                                    <div className="flex justify-between items-center gap-2">
                                        <Link
                                            to={`/drink/${coffee?._id}`}
                                            className="font-bold text-lg hover:text-primary-green transition"
                                        >
                                            {coffee?.name}
                                        </Link>
                                        <hr className="border-2 border-dashed border-secondary-black/50 flex-1" />
                                        <h5 className="text-primary-green font-bold text-lg">
                                            ${coffee?.price}
                                        </h5>
                                    </div>

                                    <p className="text-left font-jost text-sm text-secondary-black">
                                        {coffee?.shortDescription}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <PrimaryButton
                        text="See All Products"
                        variant="green"
                        link="/drinks"
                        extraClass="mt-14"
                    />
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
