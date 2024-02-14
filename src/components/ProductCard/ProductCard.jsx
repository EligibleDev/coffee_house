import PropTypes from "prop-types";
import "./card.css";

const ProductCard = ({ product }) => {
    return (
        <div className="card h-64">
            <img className="w-full" src={product.image} alt={product.name} />

            <div className="lower-part w-full">
                <div className="lower-part-face w-full h-full bg-white">{product.name}</div>
                <div className="lower-part-back w-full h-full bg-white">{product._id}</div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
};
export default ProductCard;
