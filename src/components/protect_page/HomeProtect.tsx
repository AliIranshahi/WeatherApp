import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

function ProjectPage({ children }: { children: React.ReactNode }) {

    const [cookis] = useCookies();
    const login = cookis.login;

    if (!login) {
        return <Navigate to={'/login'} />
    }
    return children;


}

export default ProjectPage