import React,{useState} from "react";
import UserPool from "../UserPool";

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
                <h1>Registration</h1>
                <br></br><br></br><br></br>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}></input>

                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(event) => setpassword(event.target.value)}></input>

                   <button type="submit">Submit</button> 
            </form>
            </center>
        </div>
    );
};

export default Signup;