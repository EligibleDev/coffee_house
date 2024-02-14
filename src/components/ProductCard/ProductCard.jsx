import PropTypes from "prop-types";
import "./card.css";

const ProductCard = ({ product }) => {
    return (
        <figure
            className="card relative bg-[#efece5] w-full p-3 transition-all duration-75"
            key={product?._id}
        >
            <div className="">
                <img className="w-52 mx-auto" src={product?.thumbnail} alt="" />
            </div>

            <div className="lower-part h-2/6 w-full relative">
                <div className="lower-part-face text-primary-green"> {product?._id}</div>
                <div className="lower--part-back">cart</div>
            </div>
        </figure>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
};
export default ProductCard;
