import useLocalStorage from "../../Hooks/useLocalStorage";
import ReadBook from "../../components/ReadBook/ReadBook";

const ListedBooks = () => {
    const {localData} = useLocalStorage();
    return (
        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {localData.map(readBook=> <ReadBook key={readBook.id} readBook={readBook}/>)}
            </div>


            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
        </div>
    );
};

export default ListedBooks;