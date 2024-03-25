import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('/public/Books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data));
    }, [])

    return {books};
};

export default Books;