import PageCover from "../../components/PageCover/PageCover";
import Sidebar from "./components/Sidebar/Sidebar";
import SortBar from "./components/SortBar/SortBar";

const Drinks = () => {
    return (
        <>
            <PageCover title="All Drinks" subTitle="Premium quality drinks" />
            <div className="container mx-auto flex justify-between gap-10 py-20">
                <Sidebar />
                <div className="w-3/4">
                    <SortBar/>
                </div>
            </div>
        </>
    );
};

export default Drinks;
