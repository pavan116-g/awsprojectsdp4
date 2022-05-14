import React from "react";
import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const Contact = () => {
return (
	<div> 
<body>
    <header>
        <div class="main">
            <div class="logo">
                <img src={lg}/>
            </div>
            <ul>

            <li><a href="/home">Home</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li class="active"><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About</a></li>
            </ul>
        </div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        <section id="contact-section">
<br/>
        <div class="container">
             <h2>Contact Us</h2>
             <br/>
           <p>Email us and keep upto date with our latest news</p>
          <div class="contact-form">
            <div>
              <i class="fa fa-map-marker"></i><span class="form-info">  KL University</span><br/>
              <i class="fa fa-phone" > </i><span class="form-info">  +919999999999</span><br/>
              <i class="fa fa-envelope"></i><span class="form-info">  phoenix.@gmail.com</span>
            </div>
        <div>        
            <input type="text" placeholder="Your Name" required/>
            <input type="text" placeholder="Last Name"/><br/>
            <input type="Email" placeholder="Email" required/><br/>
            <input type="text" placeholder="Subject of this message"/><br/>
            <textarea name="message" placeholder="Message" rows="5" required/><textarea/><br/>
            <button class="submit" >Send Message</button> 
            </div>
          </div>
        </div>
        </section>
    </header>
</body>

	</div>
);
};

export default Contact;
