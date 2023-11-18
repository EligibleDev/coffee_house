import { Outlet } from "react-router-dom";
import storageBg from "../../assets/storage-bg.jpg";
import paperBg from "../../assets/paper-bg.png";

const Auth = () => {
    return (
        <>
            <div style={{ backgroundImage: `url('${storageBg}')` }} className="w-full ">
                <div className="bg-secondary-black/70 w-full min-h-screen flex justify-center items-center">
                    <div
                        style={{ backgroundImage: `url('${paperBg}')` }}
                        className="w-11/12 min-h-[calc(100vh*11/12)] bg-repeat sm:bg-no-repeat bg-cover sm:bg-contain bg-center flex justify-center items-center"
                    >
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Auth;
