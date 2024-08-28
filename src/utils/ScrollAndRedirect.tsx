import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirect = () => {
    const navigate = useNavigate()

    useEffect(() => {

    }, []);
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        const rute = window.location.pathname;

        if (rute !== '/'){
            navigate(`/${sectionId}`);
        }else{
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    const redirectToExternalLink = (href: string) => {
        window.open(href, '_blank');
    };


    return {
        scrollToSection,
        redirectToExternalLink
    };
}

export default useRedirect;



