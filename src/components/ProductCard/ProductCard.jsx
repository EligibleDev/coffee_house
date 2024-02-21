import PropTypes from "prop-types";
import "./card.css";
import { Rating } from "keep-react";
import IconButton from "../IconButton/IconButton";
import { FaCartPlus, FaEye, FaFileInvoice } from "react-icons/fa6";
import useUtils from "../../hooks/useUtils/useUtils";

const ProductCard = ({ product }) => {
    const { addToCart, setShowPreviewModal } = useUtils();

    //rating configuration start
    const productRating = Math.floor(
        product?.reviews.reduce((previous, current) => previous + current.rating, 0) /
            product?.reviews?.length
    );

    const stars = [];
    for (let i = 0; i < productRating; i++) {
        stars.push(<Rating.Star className="mr-0 rating" filledType="fill" key={i} />);
    }

    const emptyStars = [];
    for (let i = 0; i < 5 - productRating; i++) {
        emptyStars.push(<Rating.Star className="mr-0 empty-rating" key={i} />);
    }
    //rating configuration end

    return (
        <div className="card rounded-full border border-dashed border-primary-green h-80 flex flex-col justify-between">
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
                    <Rating className="gap-1">
                        {stars}
                        {emptyStars}
                    </Rating>
                    <p>
                        ৳ <b className="font-jost">{product.price}</b>
                    </p>
                </div>
                <div className="lower-part-back w-full h-full flex gap-2 items-center justify-center bg-white rounded-t-full">
                    <IconButton
                        tooltip="Add to Cart"
                        onClick={() => addToCart(product._id)}
                        icon={FaCartPlus}
                    />

                    <IconButton
                        tooltip="Preview"
                        onClick={() => setShowPreviewModal(product._id)}
                        icon={FaEye}
                    />

                    <IconButton
                        tooltip="Details"
                        link={`/product/${product._id}`}
                        icon={FaFileInvoice}
                    />
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
};
export default ProductCard;
