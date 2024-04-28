// Import Swiper styles

const HomeCard = ({ craft }) => {
    console.log(craft)
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-[385px] h-[250px]" src={craft.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{craft.subCategory}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeCard;