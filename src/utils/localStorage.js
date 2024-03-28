import { toast } from "react-toastify";

export const saveToLocalStorage = (books) => {
    const savedData = JSON.parse(localStorage.getItem("read")) || [];
    const existedData = savedData.find(item => item.bookId == books.bookId);

    if (!existedData) {
        savedData.push(books);
        localStorage.setItem("read", JSON.stringify(savedData));
        toast.success('You have added to Read List successfully');
    }
    else {
        toast.warning('Books are already available in Read List');
    }
};

export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("read")) || [];
    return data;
};