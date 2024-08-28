import { useEffect, useState } from "react";
import { PREFIX_API } from "../api/blogApi";


export const useLoadData = (endpoint:string) =>{
    const [data, setData] = useState([]);
    useEffect(() => {
      loadData();
    }, [endpoint])

    const loadData = async() =>{
        try {
            const {data} = await PREFIX_API.get(endpoint);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };
    
    return data;
};