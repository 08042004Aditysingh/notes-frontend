import React,{useState} from "react";
import Navbar from "../../components/Navbar.jsx";
import Password from "../../components/Password.jsx"
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper.js";
const Login = () => {
  const [password,setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleLogin=async(e)=>{
    e.preventDefault();

    if(validateEmail(email)){
      setError("Please enter a valid email address");
      return;
    }
    if(!password){
      setError("Please enter the password");
      return;
    }
    setError("");
  }
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit= {handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input type="text" placeholder="Email" className="input-box" value = {email}
            onChange={(e)=>setEmail(e.target.value)} />
            <Password value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {error && <p className="text-red-500 text-3xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/signup" className="font-medium text-primary underline">
                Create an account
              </Link>
            </p>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default Login;
