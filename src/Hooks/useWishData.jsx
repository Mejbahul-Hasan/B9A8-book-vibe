import { useEffect, useState } from "react";
import { getWishDataFromLocalStorage } from "../utils/localWishStorage";

const useWishData = () => {
    const [wishData, setWishData] = useState([]);
    useEffect(()=>{
        setWishData(getWishDataFromLocalStorage());
    },[])

    return {wishData};
};

export default useWishData;