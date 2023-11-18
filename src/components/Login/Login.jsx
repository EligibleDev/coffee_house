import { Link } from "react-router-dom";
import useUtils from "../../hooks/useUtils/useUtils";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Login = () => {
    const { inputClasses, labelClasses } = useUtils();

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const user = { email, password };
        console.log(user);
    };

    return (
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-secondary-black">
            <h4 className="text-2xl font-bold tracking-normal">
                <span className="text-primary-green">Sign</span> In
            </h4>
            <p className="font-jost text-base">Enter your details to login.</p>
            <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            name="email"
                            type="email"
                            className={inputClasses}
                            placeholder=" "
                        />
                        <label className={labelClasses}>Email</label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            name="password"
                            type="password"
                            className={inputClasses}
                            placeholder=" "
                        />
                        <label className={labelClasses}>Password</label>
                    </div>
                </div>

                <PrimaryButton type="submit" variant="green" extraClass="w-full" text="login" />
                <p className="text-lg font-jost mt-2">
                    New Here?{" "}
                    <Link
                        to="/auth/register"
                        className=" text-primary-green font-semibold"
                    >
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
