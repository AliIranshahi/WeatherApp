import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

function LoginProtect({ children }: { children: React.ReactNode }) {

    const [cookis] = useCookies();
    const login = cookis.login;

    if (login) {
        return <Navigate to={'/'} />
    }
    return children;


}

export default LoginProtect