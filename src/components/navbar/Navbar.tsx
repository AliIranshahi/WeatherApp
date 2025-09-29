import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import Logo from '../../assets/images/logo.png';
import { City, Countrys } from '../../constans/CitysInfo';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import type { ICity } from '../../types/Types';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useTranslation } from 'react-i18next';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Navbar() {

    const { i18n: { t, language, changeLanguage } } = useTranslation();
    const { dispatch, state, removecookies } = useAuthContext();
    const [[cityP, lat, lon], setChange] = useState<[string, number, number]>(["Madrid", 200, 100]);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [childMenu, setChildMenu] = useState<string | null>(null);
    const [childMenuStatus, setChildMenuStatus] = useState<boolean>(false);
    const [menuSetting, setMenuSetting] = useState<boolean>(false);
    const [selected, setSelected] = useState<ICity>({
        city: cityP,
        lat: lat,
        lon: lon,
    });

    const search = window.location.search;
    const navigate = useNavigate();

    // handle click and select
    const handleChoise = (items: ICity) => {
        setSelected(items);
        setShowMenu(false);
        setChildMenuStatus(false);
        const URLSearch = new URLSearchParams(search.toString()); // ← مهم

        // update select
        URLSearch.set("city", items.city);
        URLSearch.set("lat", items.lat.toString());
        URLSearch.set("lon", items.lon.toString());
        navigate(`/?${URLSearch.toString()}`);


    }

    // keep dommain save
    useEffect(() => {
        const URLSearch = new URLSearchParams(window.location.search);
        const city = URLSearch.get("city") ?? "Madrid";
        const lat = parseFloat(URLSearch.get("lat") ?? "200");
        const lon = parseFloat(URLSearch.get("lon") ?? "100");

        setSelected({ city, lat, lon });
        setChange([city, lat, lon]);
    }, []);

    //mobie
    const [isOpen, setIsOpen] = useState<boolean>(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false)
            } else {
                setIsOpen(true)
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <header className={`w-full  shadow-md h-20  flex items-center justify-center ${isOpen ? "fixed top-0 right-0  z-1" : "relative"}  ${state.color == "white" ? "bg-[#f3fafe]" : "bg-[#151d32]"}`} dir={language == "fa" ? "ltr" : "rtl"} onClick={() => {
                setShowMenu(false);
                setChildMenu(null);
                setChildMenuStatus(false);
                setMenuSetting(false);
            }}>
                <nav className={`  md:flex items-center justify-between z-2 px-10  ${isOpen ? "flex flex-col w-[100%] h-full   p-5" : "hidden w-[100%]"}`} onClick={() => {
                    setMenuSetting(false);
                }}>
                    <ul className={`flex md:flex-row items-center gap-9 ${isOpen ? "w-full flex-row-reverse" : ""}`} onClick={(e) => e.stopPropagation()}>
                        <li className='relative text-left' dir='rtl'>
                            <div className="bg-inherit text-gray-400 border-1 border-gray-400 px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-white transition duration-300" onClick={() => {
                                setMenuSetting((prev) => !prev)

                                setShowMenu(false)



                            }}>
                                <SettingsOutlinedIcon />
                            </div>
                            {
                                menuSetting && <ul className={`absolute z-5 flex flex-col gap-3 w-62 h-65 top-13 rounded-lg shadow-md  bg-white p-6 ${isOpen && language == "fa" ? "right-0" : "left-0"} ${!isOpen && language == "en" ? "right-0" : "left-0"}`}
                                    onClick={(e) => e.stopPropagation()} >
                                    <li className='border-b-1 pb-4  border-b-gray-300'>
                                        <h3 className='font-medium'>
                                            Mode
                                        </h3>
                                        <div className='flex mt-2   justify-center items-center text-center font-[400] text-gray-600'>
                                            <div className={`w-[50%] flex items-center justify-center h-8 cursor-pointer border-1  ${state.color == "dark" ? "border-cyan-400" : "border-gray-300"}`} onClick={() => dispatch({ type: "Toggle_DARK" })}>
                                                <span>
                                                    Dark
                                                </span>
                                                <BedtimeOutlinedIcon className='text-[16px]!' />

                                            </div>
                                            <div className={`w-[50%] h-8 flex items-center justify-center gap-2  border-1 cursor-pointer  ${state.color == "white" ? "border-cyan-400" : "border-gray-300"}`} onClick={() => dispatch({ type: "Toggle_LIGHT" })}>
                                                <span>
                                                    Light
                                                </span>
                                                <LightModeOutlinedIcon className='text-[16px]!' />

                                            </div>
                                        </div>
                                    </li>
                                    <li className='border-b-1 pb-4  border-b-gray-300'>
                                        <h3 className='font-medium'>
                                            Language
                                        </h3>
                                        <div className='flex mt-2 justify-center items-center text-center font-[400] text-gray-600'>
                                            <div className={`w-[50%] flex items-center justify-center h-8 cursor-pointer border-1 ${language == "en" ? "border-cyan-400" : "border-gray-300"}`} onClick={() => changeLanguage("en")}>
                                                <span>
                                                    En
                                                </span>


                                            </div>
                                            <div className={`w-[50%] h-8 flex items-center justify-center gap-2  border-1 cursor-pointer ${language == "fa" ? "border-cyan-400" : "border-gray-300"}`} onClick={() => changeLanguage("fa")}>
                                                <span>
                                                    Fa
                                                </span>


                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex justify-end cursor-pointer gap-2' onClick={() => {
                                            removecookies("login");
                                            setMenuSetting(false)
                                        }}>
                                            <span>
                                                Exit
                                            </span>
                                            <LogoutOutlinedIcon />

                                        </div>
                                    </li>
                                </ul>
                            }

                        </li>
                        <li className='w-full'>
                            <div className={`relative  h-12 flex items-center z-3 border-1 border-gray-300 ${isOpen ? "w-[100%]" : " w-84"}`}>
                                <div className={`flex justify-between items-center px-2 cursor-pointer w-full h-full`} onClick={() => {
                                    setShowMenu((prev) => !prev);
                                    setChildMenuStatus(false)
                                    setMenuSetting(false)
                                }}>
                                    <KeyboardArrowDownOutlinedIcon className={`  transform transition-transform ease-in-out duration-500 ${state.color == "white" ? "text-gray-500" : "text-gray-300"}  ${showMenu == true || childMenuStatus == true ? "rotate-up" : "rotate-down"}`} />
                                    <div className={` font-medium pointer-events-none ${state.color == "white" ? "text-gray-700" : "text-gray-300"}`}>
                                        {selected.city}
                                    </div>
                                    <span className={`absolute    z-3 f-f-vazir-light text-[14px] px-2 ${state.color == "white" ? "bg-[#f3fafe] text-gray-800" : "bg-[#151d32] text-gray-300"} ${language == "fa" ? "top-[-11px]  right-2" : "top-[-11px]  left-2"}`}>
                                        {
                                            !isOpen && t("SearchTools")
                                        }
                                    </span>
                                </div>


                                <div className='absolute top-15 z-3 bg-white w-full h-auto text-center flex flex-col  left-[0px] shadow-lg '>
                                    {
                                        !childMenuStatus && showMenu && Countrys.map((items, index) => (
                                            <React.Fragment key={index + 5}>
                                                <div className='hover:bg-gray-100 cursor-pointer h-10 flex items-center justify-center transition duration-300' onClick={() => {
                                                    setChildMenu(items);
                                                    setChildMenuStatus(true)
                                                }}>
                                                    {
                                                        items
                                                    }
                                                </div>
                                                <i className='inline-block border-b-1 border-gray-100'></i>
                                            </React.Fragment>
                                        ))
                                    }
                                    {
                                        childMenuStatus && City[childMenu as keyof typeof City].map((items: ICity, index) => (
                                            <div key={index + 1} className='hover:bg-gray-100 cursor-pointer h-10 flex items-center justify-center' onClick={() => handleChoise(items)}>
                                                {
                                                    items.city
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </li>

                    </ul>
                    <ul className='hidden md:flex gap-9 items-center'>
                        <li className={`f-f-vazir-regular text-[14px]   ${state.color == "white" ? "text-blue-900" : "text-white"}`}>
                            {t("icon")}
                        </li>
                        <li>
                            <img src="/assets/images/logo.png" alt="" className='w-15 rounded-full' />
                        </li>
                    </ul>
                </nav>
                {/* Mobile */}



                <div className={`closeTab fixed top-0 right-0 w-full h-full z-1 bg-transparent ${showMenu || menuSetting ? "pointer-events-auto" : "pointer-events-none"}`} onClick={() => {
                    setShowMenu(false);
                    setChildMenu(null);
                    setChildMenuStatus(false);
                    setMenuSetting(false);

                }}>

                </div>
            </header>
            {
                isOpen && <div className='w-full h-20 pointer-events-none'></div>
            }
        </>
    )
}

export default Navbar