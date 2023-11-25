import {
    loadCaptchaEnginge as loadCaptchaEngine,
    validateCaptcha,
    LoadCanvasTemplate,
} from "react-simple-captcha";
import useUtils from "../../hooks/useUtils/useUtils";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useCaptcha = () => {
    const { setButtonLoading, setButtonDisabled } = useUtils();

    const handleCaptcha = (event) => {
        const captcha = event.target.value;
        setButtonLoading(true);

        if (captcha.length === 6) {
            if (validateCaptcha(captcha)) {
                setButtonLoading(false);
                setButtonDisabled(false);
            } else {
                event.target.value = "";
                toast.error("Invalid Captcha");
                setButtonDisabled(true);
            }
        } else if (captcha.length === 0) {
            setButtonLoading(false);
        } else {
            setButtonDisabled(true);
            setButtonLoading(true);
        }
    };

    useEffect(() => {
        loadCaptchaEngine(6);
    }, []);

    return { handleCaptcha, LoadCanvasTemplate };
};

export default useCaptcha;
