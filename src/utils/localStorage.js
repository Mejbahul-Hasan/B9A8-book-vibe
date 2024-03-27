import { toast } from "react-toastify";

export const saveToLocalStorage = (books) => {
    const savedData = JSON.parse(localStorage.getItem("read")) || [];
    const existedData = savedData.find(item => item.bookId == books.bookId);

    if (!existedData) {
        savedData.push(books);
        localStorage.setItem("read", JSON.stringify(savedData));
        toast.success('Books added to Read List');
    }
    else {
        toast.warning('You have already read this book');
    }
};

export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("read")) || [];
    return data;
};