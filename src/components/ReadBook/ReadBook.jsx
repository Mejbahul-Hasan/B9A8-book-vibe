import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";


const ReadBook = ({ readBook }) => {

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = readBook || {};

    return (

        <div className="card card-side bg-base-100 shadow-xl my-5">
            <figure><img className=" w-40" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <ul className="flex gap-5 items-center">
                    <h5 className="font-bold">Tag</h5>
                    {tags?.map(tag => <li className="bg-green-100" key={tag}>#{tag}</li>)}
                    <CiLocationOn />
                    <p> Year of Publishing: {yearOfPublishing}</p>
                </ul>
                <ul className="flex gap-5 items-center">
                    <BsPeople />
                    <p>Publisher: {publisher}</p>
                    <MdOutlineContactPage />
                    <p>Page: {totalPages}</p>
                </ul>
                <div>
                    
                </div>


            </div>
        </div>
    );
};

export default ReadBook;