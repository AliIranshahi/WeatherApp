import { useContext } from "react";
import { AuthContextManager } from "../context/AuthContextManager";

export function useAuthContext() {
  const context = useContext(AuthContextManager);

  if (context == undefined) {
    throw new Error("Cant find context");
  }

  return context;
}
