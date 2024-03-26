export const saveToLocalStorage = (books) => {
    const savedData = JSON.parse(localStorage.getItem("read")) || [];
    const existedData = savedData.find(item => item.bookId == books.bookId);

    if (!existedData) {
        savedData.push(books);
        localStorage.setItem("read", JSON.stringify(savedData));
        alert('added successfully to local storage');
    }
    else {
        alert('Data already exist');
    }
};

export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("read")) || [];
    return data;
};