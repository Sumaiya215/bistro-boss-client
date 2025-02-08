import axios from "axios";
import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const SSLCommerzForm = () => {
    // const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleSubmit = async e =>{
        e.preventDefault();
        const payment = {
            email:user.email,
            price: totalPrice,
            transactionId: '',
            date: new Date(),
            cartIds: cart.map(item => item._id),
            menuItemIds: cart.map(item => item.menuId),
            status: 'pending'
        }
        try{
            const res = await axios.post('http://localhost:5000/create-ssl-payment', payment)
            console.log('response', res);
            if(res.data?.gatewayUrl){
                window.location.replace(res.data.gatewayUrl)
            }
        } catch(err){
            console.log(err.message);
        }


        }

       


    return (
        <div>
            <h2 className="text-lg font-medium">Payment Details</h2>
            <form onSubmit={handleSubmit} className="form-control">
                <label className="label-text mb-2">Email</label>
                <input type="email" defaultValue={user?.email} className="input input-sm input-bordered"  />
                <button type="submit" className="btn btn-primary btn-sm mt-2">
                    Confirm Order
                </button>
            </form>
        </div>
    );
};

export default SSLCommerzForm;