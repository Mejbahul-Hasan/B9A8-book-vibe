import Banner from "../../components/Banner/Banner";
import BooksCard from "../../components/BooksCard/BooksCard";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div>
                <h2 className="text-center font-bold text-5xl my-10">Books</h2>
                <BooksCard />
            </div>
        </div>
    );
};

export default Home;