import { CiStar } from "react-icons/ci";

const Card = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="books" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <ul className="flex gap-5">
                    {tags?.map(tag => <li className="bg-green-100" key={tag}>{tag}</li>)}
                </ul>
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <div className="flex border-t-2 pt-5">
                    <p>{category}</p>
                    <div className="flex gap-3 items-center">
                        <p>{rating}</p>
                        <CiStar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;