import { useParams } from "react-router-dom";
import PageCover from "../../components/PageCover/PageCover";
import { useEffect, useState } from "react";

const DrinkDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch("/best-sellers.json")
            .then((res) => res.json())
            .then((data) => setProduct(data.find((drink) => id === drink._id)));
    }, [id]);

    return (
        <>
            <PageCover title={product?.name} />
            {id}
        </>
    );
};

export default DrinkDetails;
