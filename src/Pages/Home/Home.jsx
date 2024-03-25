import Banner from "../../components/Banner/Banner";
import BooksCard from "../../components/BooksCard/BooksCard";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div>
                <h2>Books: </h2>
                <BooksCard/>
            </div>
        </div>
    );
};

export default Home;