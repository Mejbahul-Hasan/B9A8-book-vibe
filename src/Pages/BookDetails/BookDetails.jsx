import { useParams } from "react-router-dom";
import Books from "../../Hooks/Books/Books";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../../utils/localStorage";
import { saveToWishStorage } from "../../utils/localWishStorage";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
    const [singleBook, setSingleBook] = useState([]);
    const { bookId } = useParams();
    const { books } = Books();
    const { localData } = useLocalStorage();

    const handleRead = () => {
        saveToLocalStorage(singleBook);
    };

    const handleWishList = () => {
        saveToWishStorage(singleBook);
    };

    useEffect(() => {
        if (books) {
            const singleData = books.find((item) => item.bookId == bookId);
            setSingleBook(singleData);
        }

    }, [books, bookId])

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating, } = singleBook || {};

    return (
        <div className="hero rounded-xl bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">{bookName}</h1>

                    <p className="py-6"> By: {author}</p>
                    <p className="py-4 border-t-2 border-b-2 border-gray-300">{category}</p>
                    <p className="py-6"> <span className="font-semibold">Review:</span> {review}</p>
                    <div className="flex border-b-2 border-gray-300 pb-5">
                        <p className="font-semibold pr-10">Tag:</p>
                        <ul className="flex gap-5">
                            {tags?.map(tag => <li className="bg-green-100" key={tag}>#{tag}</li>)}
                        </ul>
                    </div>

                    <div className="">
                        <table className="table w-4/12">
                            <thead>
                                <tr>
                                    <th>Number of Pages:</th>
                                    <th>{totalPages}</th>
                                </tr>
                                <tr>
                                    <th>Publisher:</th>
                                    <th>{publisher}</th>
                                </tr>
                                <tr>
                                    <th>Year of Publishing:</th>
                                    <th>{yearOfPublishing}</th>
                                </tr>
                                <tr>
                                    <th>Rating:</th>
                                    <th>{rating}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <button onClick={handleRead} className="btn btn-primary">Read</button>
                    <button onClick={handleWishList} className="btn ml-8 btn-primary">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;