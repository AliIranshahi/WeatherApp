import { useTranslation } from "react-i18next"
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Lang() {
    const { i18n: { dir, changeLanguage, language, t } } = useTranslation();
    const {state} = useAuthContext();
    const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        localStorage.setItem("lang", value);
        changeLanguage(value);

    }
    return (
        <div className={`relative mt-10 flex flex-col ${state.color == "white" ? "text-black" : "text-white"}`} dir={dir()}>
            <span className='text-right pr-1 f-f-vazir-light text-[14px] pointer-events-none'>
                {t("LanguageTitle")}
            </span>
            <select defaultValue={'fa'} className={`f-f-vazir-regular w-60 border-b-gray-500 border-b-1 outline-0 cursor-pointer`} dir='rtl' onChange={handleChangeLang} value={language}>
                <option value="en" className={` ${state.color =="white" ? "text-black" : "text-black"}`}>{t("LanguageOption2")}</option>
                <option value="fa" className={` ${state.color =="white" ? "text-black" : "text-black"}`}>{t("LanguageOption1")}</option>
            </select>
        </div>
    )
}
