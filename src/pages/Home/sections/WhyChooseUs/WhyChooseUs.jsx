import coffeeImage from "../../../../assets/coffee.png";
import { GiCoffeeBeans } from "react-icons/gi";
import IconBlock from "./IconBlock";

const WhyChooseUs = () => {
    return (
        <section className="container mx-auto py-10 lg:py-20 px-4 xl:px-0 flex flex-col xl:flex-row justify-between items-center gap-6 xl:gap-0">
            <div className="w-full xl:w-1/4 flex flex-col justify-between items-start gap-6 ">
                <IconBlock
                    icon={GiCoffeeBeans}
                    title="Pure Grades"
                    description="Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros."
                    direction="left"
                />

                <IconBlock
                    icon={GiCoffeeBeans}
                    title="Pure Grades"
                    description="Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros."
                    direction="left"
                />

                <IconBlock
                    icon={GiCoffeeBeans}
                    title="Pure Grades"
                    description="Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros."
                    direction="left"
                />
            </div>
            <img className="w-1/2 hidden xl:block" src={coffeeImage} alt="" />
            <div className="w-full xl:w-1/4 flex flex-col justify-between items-start gap-6">
                <IconBlock
                    icon={GiCoffeeBeans}
                    title="Pure Grades"
                    description="Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros."
                    direction="right"
                />
                <IconBlock
                    icon={GiCoffeeBeans}
                    title="Pure Grades"
                    description="Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros."
                    direction="right"
                />
                <IconBlock
                    icon={GiCoffeeBeans}
                    title="Pure Grades"
                    description="Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros."
                    direction="right"
                />

                {/* <div className="flex justify-end items-start gap-6">
                    <div className="text-right">
                        <h4 className="text-lg font-bold">High Quality</h4>

                        <p className="font-jost opacity-75 leading-[1.7em]">
                            Maecenas dapibus mattis eros, at fermentum sapien malesuada
                            sit amet. Quisque in sollicitudin eros.
                        </p>
                    </div>
                    <GiCoffeeBeans className="text-[15rem] text-primary-green h-fit" />
                </div>

                <div className="flex justify-end items-start gap-6">
                    <div className="text-right">
                        <h4 className="text-lg font-bold">High Quality</h4>

                        <p className="font-jost opacity-75 leading-[1.7em]">
                            Maecenas dapibus mattis eros, at fermentum sapien malesuada
                            sit amet. Quisque in sollicitudin eros.
                        </p>
                    </div>
                    <GiCoffeeBeans className="text-[15rem] text-primary-green h-fit" />
                </div> */}
            </div>
        </section>
    );
};

export default WhyChooseUs;
