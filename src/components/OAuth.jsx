
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import {app} from '../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const OAuth = () => {

  
  const navigate = useNavigate();

  const handleGoogleClick = async ()=>{
    try{
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      
      const result = await signInWithPopup(auth, provider);

      localStorage.setItem("data",JSON.stringify({name:result.user.displayName, email:result.user.email,photo:result.user.photoURL}))

      
      const data = {name:result.user.displayName, email:result.user.email,photo:result.user.photoURL};
      toast.success("User Logged in to Dashboard")
      navigate('/dashboard')
    }
    catch(err){
      console.log("Check  your connection", err)
    }
  }

  return (
    <button type='button' onClick={handleGoogleClick} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">
        Login
    </button>
  )
}

export default OAuth;