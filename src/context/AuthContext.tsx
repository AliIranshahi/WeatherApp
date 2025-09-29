import { useEffect, useReducer, useState } from "react";
import { AuthContextManager } from "./AuthContextManager";
import { useCookies } from 'react-cookie';
import { useTranslation } from "react-i18next";
export type TState = {
    color: "white" | "dark"
}
export type TActionType = {
    type: "Toggle_LIGHT" | "Toggle_DARK";
}

export function AuthContext({ children }: { children: React.ReactNode }) {
    const { i18n: { changeLanguage } } = useTranslation();
    const lang = localStorage.getItem("lang");


    useEffect(() => {
        if (lang) {
            changeLanguage(lang)
        }
    }, [lang, changeLanguage])

    const initialState: TState = {
        color: localStorage.getItem("color") as "white" | "dark" || "white"
    }


    const reducer = (state: TState, action: TActionType): TState => {
        switch (action.type) {
            case "Toggle_LIGHT": {
                return { ...state, color: state.color = "white" }
            }
            case "Toggle_DARK": return { ...state, color: state.color = "dark" }

            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.color == "dark") {
            document.body.classList.add("bg-[#151d32]!")
        } else {
            document.body.classList.remove("bg-[#151d32]!")

        }
    }, [state.color])

    useEffect(() => {
        localStorage.setItem("color", state.color)
    }, [state.color])

    const [userName, setUserName] = useState("");

    const [cookis, setCookies, removecookies] = useCookies(["login"])

    useEffect(() => {
        if (userName !== "") {
            setCookies("login", userName, {
                path: "/",
                maxAge: 60 * 60,
                sameSite: "strict",
                secure: true
            });

        }
    }, [userName, setCookies]);
    return (
        <AuthContextManager.Provider value={{ userName, setUserName, dispatch, removecookies, state }}>
            {children}
        </AuthContextManager.Provider>
    )
}
