import React,{useState} from "react";
import UserPool from "../UserPool";
import '../App.css';

const Signup = () =>{
    const [email,setEmail] =useState("");
    const [password,setpassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email,password,[],null,(err,data)=> {
            if(err)
            {
                console.error(err);
            }
            console.log(data);
        });
    };

    return(
            <div>
                <center>
                <h1 style="color: white;">Registration</h1>
                    <br></br><br></br><br></br>
                <form onSubmit={onSubmit}>
                    <label htmlFor="email" style="color: white">Email</label>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}></input>
<br></br><br></br><br></br>
                    <label htmlFor="password" style="color: white">Password</label>
                    <input
                        value={password}
                        onChange={(event) => setpassword(event.target.value)}></input>
<br></br><br></br><br></br>
                    <button type="submit">Submit</button> 
                </form>
                </center>
            </div>
    );
};

export default Signup;