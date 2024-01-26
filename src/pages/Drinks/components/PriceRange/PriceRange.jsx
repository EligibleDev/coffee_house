import { Slider } from "keep-react";
import QueryTitle from "../QueryTitle/QueryTitle";
import "./range.css";
import { useState } from "react";
import useUtils from "../../../../hooks/useUtils/useUtils";

const PriceRange = () => {
    const { maxDrinkPrice } = useUtils();
    const [range, setRange] = useState(maxDrinkPrice);

    return (
        <div>
            <QueryTitle>Filter by price</QueryTitle>
            <Slider
                min={0}
                max={maxDrinkPrice}
                step={500}
                defaultValue={maxDrinkPrice}
                onChange={(value) => setRange(value)}
            />
        </div>
    );
};

export default PriceRange;
