import { createContext } from "react";
import type { TActionType, TState } from "./AuthContext";

export type Context = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.ActionDispatch<[action: TActionType]>
  removecookies: (name: "login") => void,
  state: TState
};

export const AuthContextManager = createContext<Context | null>(null);
