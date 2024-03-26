import useLocalStorage from "../../Hooks/useLocalStorage";
import ReadBook from "../../components/ReadBook/ReadBook";

const ListedBooks = () => {
    const {localData} = useLocalStorage();
    return (
        <div>
            <h3 className="text-center text-3xl font-bold bg-gray-200 py-10 rounded-2xl">Books</h3>

            <div role="tablist" className="tabs tabs-lifted mt-10">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            {localData.map(readBook=> <ReadBook key={readBook.id} readBook={readBook}/>)}
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                
            </div>


        </div>
        </div>
    );
};

export default ListedBooks;