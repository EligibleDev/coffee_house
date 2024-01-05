import { useState } from "react";
import Title from "../../../../components/Title/Title";
import { Tabs } from "keep-react";
import storageBG from "../../../../assets/images/storage-bg.jpg";
import paperBG from "../../../../assets/images/paper-bg.png";

const BestSellers = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);

    // TODO: Fetch coffees based on the the index of category

    const handleChangeCategory = (index) => {
        setCategoryIndex(index);
    };

    return (
        <section style={{ backgroundImage: `url('${storageBG}')` }} className=" ">
            <div className="bg-secondary-black/70 w-full flex flex-col  items-center py-20">
                <Title
                    title="We Have the best for you!"
                    subTitle="Best Sellers"
                    className="text-white mb-16"
                />
                <div
                    style={{ backgroundImage: `url('${paperBG}')` }}
                    className="bg-contain bg-no-repeat h-[1120px] w-11/12 mx-auto bg-center py-40 text-center flex flex-col items-center"
                >
                    <Tabs
                        aria-label="Tabs"
                        style="underline"
                        className="border-b-0"
                        borderPosition="bottom"
                        onActiveTabChange={handleChangeCategory}
                        iconPosition="left"
                    >
                        <Tabs.Item active title="Coffee">
                            Coffee
                        </Tabs.Item>

                        <Tabs.Item title="Tea">Tea</Tabs.Item>

                        <Tabs.Item disabled={true} title="Chocolate">
                            Chocolate content
                        </Tabs.Item>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
