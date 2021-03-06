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

        <div className="form">
           <center> <h1>Registration Page</h1></center>
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="firstName">First Name </label>
                <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
            </div>
            <div className="lastname">
                <label className="form__label" for="lastName">Last Name </label>
                <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
            </div>
            <div className="email">
                <label className="form__label" for="email">Email </label>
                <input  type="email" id="email" className="form__input" placeholder="Email"/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password"  id="password" placeholder="Password"/>
            </div>
            <div className="confirm-password">
                <label className="form__label" for="confirmPassword">Confirm Password </label>
                <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
            </div>
        </div>
        <div class="footer">
            <button type="submit" class="btn">Register</button>
        </div>
    </div>      
    );
};

export default Signup;