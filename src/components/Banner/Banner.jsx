import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse mx-24">
                <img src="https://i.ibb.co/xzdtnxS/The-Great-Gatsby-Cover-1925-Retouched.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="lg:mr-[300px] lg:my-40">
                    <h1 className="text-5xl font-bold">Books are the friends forever</h1>
                    <Link to="/listedBooks"><button className="btn my-10 btn-primary">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;