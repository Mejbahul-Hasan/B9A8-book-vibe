import { toast } from "react-toastify";

export const saveToWishStorage = (books) => {
    const savedData = JSON.parse(localStorage.getItem("wish")) || [];
    const existedData = savedData.find(item => item.bookId == books.bookId);
    if (existedData) {
        return toast.warning('Books are already available in Wish List');

    }
    const savedData2 = JSON.parse(localStorage.getItem("read")) || [];
    const existedData2 = savedData2.find(item => item.bookId == books.bookId);
    if (existedData2) {
        return toast.warning('Books are already read');

    }
    savedData.push(books);
    localStorage.setItem("wish", JSON.stringify(savedData));
    toast.success('You have added to Wish List successfully');
};

export const getWishDataFromLocalStorage = () => {
    const wishData = JSON.parse(localStorage.getItem("wish")) || [];
    return wishData;
};