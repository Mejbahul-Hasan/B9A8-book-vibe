
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="lg:mr-[300px] lg:my-40">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;