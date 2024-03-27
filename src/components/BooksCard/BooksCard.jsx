import Books from "../../Hooks/Books/Books";
import Card from "../Card/Card";

const BooksCard = () => {

    const {books} = Books();

    return (
        <div className="lg:grid grid-cols-3 gap-5">
            {
                books.map((book)=> (
                <Card key={book.bookId} book={book}/>))
            }
        </div>
    );
};

export default BooksCard;