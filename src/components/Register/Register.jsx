import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import useUtils from "../../hooks/useUtils/useUtils";
import useCaptcha from "../../hooks/useCaptcha/useCaptcha";
import useAuth from "../../hooks/useAuth/useAuth";

const Register = () => {
    const { inputClasses, labelClasses, buttonDisabled } = useUtils();
    const { LoadCanvasTemplate, handleCaptcha } = useCaptcha();
    const { register } = useAuth();

    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        register(email, password)
            .then((res) => console.log(res.user));
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
                            required
                            name="name"
                            type="text"
                            className={inputClasses}
                            placeholder=" "
                        />
                        <label className={labelClasses}>Name</label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            required
                            name="email"
                            type="email"
                            className={inputClasses}
                            placeholder=" "
                        />
                        <label className={labelClasses}>Email</label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            required
                            name="password"
                            type="password"
                            className={inputClasses}
                            placeholder=" "
                        />
                        <label className={labelClasses}>Password</label>
                    </div>

                    <div className="w-full min-w-[200px]">
                        <LoadCanvasTemplate />
                    </div>

                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            required
                            onKeyUp={handleCaptcha}
                            name="captcha"
                            type="text"
                            className={inputClasses}
                            placeholder=" "
                        />
                        <label className={labelClasses}>Captcha</label>
                    </div>
                </div>

                <PrimaryButton
                    variant="green"
                    extraClass="w-full"
                    text="register"
                    disabled={buttonDisabled}
                />
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
