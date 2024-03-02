import { useParams } from "react-router-dom";
import PageCover from "../../components/PageCover/PageCover";
import { useEffect, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const DrinkDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [shortDescription, setShortDescription] = useState(true);
    const [quantity, setQuantity] = useState(1);

    //gotta continue the streak

    useEffect(() => {
        fetch("/best-sellers.json")
            .then((res) => res.json())
            .then((data) => setProduct(data.find((drink) => id === drink._id)));
    }, [id]);

    return (
        <>
            <PageCover title={product?.name} />
            <div className="container mx-auto flex flex-col lg:flex-row gap-12 justify-between px-8 xl:px-0 py-20">
                {/* <img
                    className="w-full lg:w-1/2 rounded-lg object-cover"
                    src={product?.image}
                    alt={product?.name}
                /> */}

                <div className="w-full lg:w-1/2 h-auto space-y-4">
                    <h1 className="text-3xl font-semibold">
                        {product?.shortDescription}
                    </h1>
                    <h1 className="text-3xl font-jost">
                        ৳ <span className="font-semibold">{product?.price}</span>
                    </h1>

                    <p className="font-jost">
                        {shortDescription ? (
                            <>
                                {product?.description?.slice(0, 300)}
                                <span
                                    onClick={() => setShortDescription(!shortDescription)}
                                    className="hover:text-primary-green cursor-pointer font-bold transition"
                                >
                                    {" "}
                                    Read more
                                </span>
                            </>
                        ) : (
                            <>
                                {product?.description}
                                <span
                                    onClick={() => setShortDescription(!shortDescription)}
                                    className="hover:text-primary-green cursor-pointer font-bold transition"
                                >
                                    {" "}
                                    Show less
                                </span>
                            </>
                        )}
                    </p>

                    <p className="font-jost">
                        <b>Category: </b>
                        {product?.category}
                    </p>

                    <form
                        // onSubmit={handlePlaceOrder}
                        className="flex justify-start items-center gap-3"
                    >
                        <input
                            onChange={(e) => setQuantity(e.target.value)}
                            name="quantity"
                            min={1}
                            max={15}
                            className="shadow-md py-4 text-center !pr-0 focus:outline-none rounded"
                            type="number"
                            value={quantity}
                        />

                        <PrimaryButton type="submit" text="Add to Cart" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default DrinkDetails;
