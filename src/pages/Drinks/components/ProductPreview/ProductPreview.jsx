import { Rating } from "keep-react";
import PropTypes from "prop-types";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const ProductPreview = ({ product }) => {
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
        <div className="flex justify-between gap-12">
            <div className="w-1/2">
                <img
                    className="w-full rounded-lg"
                    src={product?.image}
                    alt={product?.name}
                />
            </div>

            <div className="w-1/2 space-y-4">
                <span className="space-y-1">
                    <h1 className="text-4xl font-bold">{product?.name}</h1>

                    <p className="font-jost">{product?.shortDescription}</p>
                </span>

                <h2 className="text-2xl font-medium">
                    ৳ <span className="font-semibold font-jost">{product?.price}</span>
                </h2>

                <div className="flex items-center gap-4">
                    <Rating className="gap-1">
                        {stars}
                        {emptyStars}
                    </Rating>
                    <Link to={`/product/${product?._id}#reviews`} className="font-jost">
                        (<b>{product?.reviews?.length}</b> Customer Reviews)
                    </Link>
                </div>

                <p className="font-jost">{product?.description.slice(0, 150)}...</p>

                <PrimaryButton text="View Details" link={`/product/${product?._id}`} />
            </div>
        </div>
    );
};

ProductPreview.propTypes = {
    product: PropTypes.object,
};
export default ProductPreview;
