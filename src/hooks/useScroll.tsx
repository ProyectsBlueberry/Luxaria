import { useEffect } from 'react';


export const useScroll = (id:string) =>  {

    useEffect(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
}