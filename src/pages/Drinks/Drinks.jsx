import { useEffect, useState } from "react";
import PageCover from "../../components/PageCover/PageCover";
import Sidebar from "./components/Sidebar/Sidebar";
import SortBar from "./components/SortBar/SortBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Modal } from "keep-react";
import useUtils from "../../hooks/useUtils/useUtils";

const Drinks = () => {
    const [products, setProducts] = useState([]);
    const { showPreviewModal, setShowPreviewModal } = useUtils();
    const [productForPreview, setProductForPreview] = useState({});

    useEffect(() => {
        fetch("/best-sellers.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        const productForPreview = products.find(
            (product) => showPreviewModal === product?._id
        );

        setProductForPreview(productForPreview);
    }, [showPreviewModal, products]);

    return (
        <>
            <PageCover title="All Drinks" subTitle="Premium quality drinks" />
            <div className="container mx-auto flex justify-between gap-8 py-20">
                <Sidebar />
                <div className="w-3/4 space-y-8">
                    <SortBar />

                    <section className="grid grid-cols-4 gap-10">
                        {products?.map((product) => (
                            <ProductCard product={product} key={product?._id} />
                        ))}
                    </section>
                </div>
            </div>

            <Modal
                size="5xl"
                show={showPreviewModal}
                onClose={() => setShowPreviewModal(false)}
            >
                <Modal.Header/>

                <div className="flex justify-between gap-12">
                    <div className="w-1/2">
                        <img
                            className="w-full rounded-lg"
                            src={productForPreview?.image}
                            alt={productForPreview?.name}
                        />
                    </div>

                    <div className="w-1/2">
                        <h1 className="text-2xl font-bold">
                            ৳ {productForPreview?.price}
                        </h1>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Drinks;
