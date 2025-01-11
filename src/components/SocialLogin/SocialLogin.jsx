import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })

            
        })
    }

    return (
        <div>
        <div className="divider px-4"></div>
        <div className="text-center mb-6">
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle className="text-orange-500"></FaGoogle>
            </button>
            
        </div>
        </div>
    );
};

export default SocialLogin;