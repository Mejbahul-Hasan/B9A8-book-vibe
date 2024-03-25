import Books from "../../Hooks/Books/Books";

const BooksCard = () => {

    const {books} = Books();

    return (
        <div>
            <h2>Books Card Section: {books.length}</h2>
        </div>
    );
};

export default BooksCard;