import { useForm } from "react-hook-form";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTranslation } from "react-i18next";
type TInputs = {
    username: string
}
function LoginSection() {
    const { setUserName , state } = useAuthContext();
    const { i18n: { t, language , dir } } = useTranslation();

    const { register, handleSubmit, formState: { errors }, } = useForm<TInputs>();
    const onsubmit = (data: TInputs) => {
        // console.log(data.username);
        setUserName(data.username);

    }
    return (
        <div className={`col-span-12 md:col-span-7  ${state.color == "white" ? "bg-white" : "bg-[#292f45]"}`} dir={dir()}>
            <form className="flex flex-col justify-between items-center text-center p-8  h-full" onSubmit={handleSubmit(onsubmit)}>
                <div className="w-full mt-12 flex  flex-col items-center">
                    <h3 className="f-f-vazir-bold text-[27px]">
                        {t("")}
                    </h3>
                    <input type="text" placeholder={`${t("PlaceHolder")}`} className={`${state.color == "white" ? "placeholder:text-gray-600 text-gray-900" : "placeholder:text-gray-300 text-gray-300"} border-[1px] border-gray-300 px-3  w-[90%] md:w-[70%] h-13 f-f-vazir-regular rounded-md  mt-10 outline-0 ${language == "fa" ? "text-right" : "text-left"}`} {...register("username", {
                        required: true, minLength: 5, pattern: {
                            value: /^[^ء-ي]+$/,
                            message: `${t("PlaceHolderError")}`
                        }
                    })} />
                    {
                        errors.username?.type == "required" && <p className={`mt-2  w-[90%] md:w-[70%]  px-3 py-2  bg-inherit text-red-400 f-f-vazir-light ${language == "fa" ? "text-right" : "text-left"}`}>{t("Required")}</p>
                    }
                    {
                        errors.username?.type == "minLength" && <p className={`mt-2  w-[90%] md:w-[70%]  px-3 py-2  bg-inherit text-red-400 f-f-vazir-light  ${language == "fa" ? "text-right" : "text-left"}`}>{t("MinLenth1")} {language == "fa" ? (5).toLocaleString("fa-IR") : (5).toLocaleString("en")}{t("MinLenth2")}</p>
                    }
                    {
                        errors.username?.type == "pattern" && <p className={`mt-2  w-[90%] md:w-[70%]  px-3 py-2  bg-inherit text-red-400 f-f-vazir-light ${language == "fa" ? "text-right" : "text-left"} `}>{t("PlaceHolderError")}</p>
                    }
                </div>
                <button className="w-[90%] md:w-[70%]  h-12 f-f-vazir-regular text-white rounded-md cursor-pointer bg-[#2196F3] mb-12 border-1 hover:border-[#2196F3] hover:bg-inherit hover:text-[#2196F3] transition-all duration-300">
                    {
                        t("Login")
                    }
                </button>

            </form>


        </div>
    )
}

export default LoginSection