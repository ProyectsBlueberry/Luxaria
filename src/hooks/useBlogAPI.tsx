import { useEffect, useState } from "react";
import BLOG_API from "../api/blogApi";



export const useBlogAPI = (endpoint:string) =>{

    const [data, setData] = useState([]);
    useEffect(() => {
      loadData();
    }, [endpoint])

    

    const loadData = async() =>{
        try {
            const {data} = await BLOG_API.get(endpoint);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };
    
    return data;
};