import { toast } from "react-toastify";

export const saveToWishStorage = (books) => {
    const savedData = JSON.parse(localStorage.getItem("wish")) || [];
    const existedData = savedData.find(item => item.bookId == books.bookId);

    if (!existedData) {
        savedData.push(books);
        localStorage.setItem("wish", JSON.stringify(savedData));
        toast.success('Books added to Wish List');
    }
    else {
        toast.warning('You have already added this book to Wish List');
    }
};

export const getWishDataFromLocalStorage = () => {
    const wishData = JSON.parse(localStorage.getItem("wish")) || [];
    return wishData;
};