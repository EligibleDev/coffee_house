import PageCover from "../../components/PageCover/PageCover";
import Sidebar from "./components/Sidebar/Sidebar";

const Drinks = () => {
    return (
        <>
            <PageCover title="All Drinks" subTitle="Premium quality drinks" />
            <div className="container mx-auto flex justify-between gap-10 py-20">
                <Sidebar />
            </div>
        </>
    );
};

export default Drinks;
