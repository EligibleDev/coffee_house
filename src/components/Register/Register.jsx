import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import useUtils from "../../hooks/useUtils/useUtils";

const Register = () => {
    const { inputClasses, labelClasses } = useUtils();

    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const user = { name, email, password };

        console.log(user);
    };

    return (
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-secondary-black">
            <h4 className="text-2xl font-bold tracking-normal">
                Create an <span className="text-primary-green">Account</span>
            </h4>
            <p className="font-jost text-base">Enter your details to register.</p>
            <form
                onSubmit={handleRegister}
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
                <div className="mb-4 flex flex-col gap-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            name="name"
                            type="text"
                            className={inputClasses}
                            placeholder=" "
                        />
                        <label className={labelClasses}>Name</label>
                    </div>
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

                <PrimaryButton variant="green" extraClass="w-full" text="register" />
                <p className="text-lg font-jost mt-2">
                    Already have an account?{" "}
                    <Link to="/auth" className=" text-primary-green font-semibold">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
