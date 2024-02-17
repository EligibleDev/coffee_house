import PropTypes from "prop-types";
import "./card.css";
import { Rating } from "keep-react";

const ProductCard = ({ product }) => {
    const stars = [];
    for (let i = 0; i < product.rating; i++) {
        stars.push(
            <Rating.Star size={20} className="mr-0 rating" filledType="fill" key={i} />
        );
    }

    return (
        <div className="card rounded-full border border-primary-green h-80 flex flex-col justify-between">
            <div className="flex-1 flex items-center">
                <img
                    className="w-36 mx-auto"
                    src={product.thumbnail}
                    alt={product.name}
                />
            </div>

            <div className="lower-part w-full">
                <div className="lower-part-face w-full h-full flex flex-col items-center justify-center gap-1 bg-primary-green rounded-b-full">
                    <p className="font-medium">{product.name}</p>
                    <Rating>{stars}</Rating>
                    <p>
                        ৳ <b>{product.price}</b>
                    </p>
                </div>
                <div className="lower-part-back w-full h-full flex flex-col items-center justify-center bg-white rounded-t-full">
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
