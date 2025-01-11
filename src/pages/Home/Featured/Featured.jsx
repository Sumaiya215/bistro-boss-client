import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="mt-12 mb-12 featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check It out"
            heading="Featured Item">
            </SectionTitle>
            <div className="md: flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="mt-4">Aug 20, 2029</p>
                    <p className="uppercase ">Where can I get some?</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo consectetur veniam earum, possimus inventore. Non atque neque delectus, deleniti, ex autem beatae quia inventore laudantium mollitia quibusdam? Voluptas facere tempora praesentium laudantium nam eligendi laboriosam esse quae dicta consequatur assumenda, maiores debitis nemo quisquam hic provident. Fugiat, qui hic.</p>
                    <button className="btn  btn-outline mt-2 mb-4 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;