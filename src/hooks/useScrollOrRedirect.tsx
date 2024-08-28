import { useNavigate } from "react-router-dom";



export const useScrollOrRedirect = () => {
    const navigate = useNavigate();
    const scrollOrNavigate = (sectionId: string) => {

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(sectionId);
        }
    }
    return {
        scrollOrNavigate,
    }
}