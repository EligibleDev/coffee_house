import PropTypes from "prop-types";
import "./card.css";

const ProductCard = ({ product }) => {
    return (
        <div className="card rounded-full border border-primary-green h-80 flex flex-col justify-between">
            <div className="flex-1 flex items-center">
                <img
                    className="w-36 mx-auto "
                    src={product.thumbnail}
                    alt={product.name}
                />
            </div>

            <div className="lower-part w-full">
                <div className="lower-part-face w-full h-full bg-primary-green rounded-b-full">
                    {product.name}
                </div>
                <div className="lower-part-back w-full h-full bg-white rounded-t-full">
                    {product._id}
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
};
export default ProductCard;
