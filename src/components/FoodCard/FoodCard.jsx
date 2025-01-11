import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const handleAddToCart = () => {
        
        if(user && user.email){
            //send cart item to the database
            // console.log(food , user.email);

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                      // refetch cart to update cart items count
                      refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}});

                }
              });
        }
    }

    return (
        <div className="card bg-base-100 w-92 shadow-xl">
            <figure>
                <img
                    src= {image}
                    alt= {name} />
            </figure>
            <p className=" absolute right-0 mt-6 mr-4 px-4
            bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={ handleAddToCart}
                    className="btn  btn-outline mt-2 mb-4 bg-slate-100
                    border-0 border-b-4 border-yellow-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;