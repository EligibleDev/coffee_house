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
                range
                min={0}
                step={500}
                max={maxDrinkPrice}
                defaultValue={[0, maxDrinkPrice]}
                onChange={(value) => setRange(value)}
            />
        </div>
    );
};

export default PriceRange;
