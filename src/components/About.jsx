import React from "react";
import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const About = () => {
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
                <li><a href="/contact">Contact</a></li>
                <li  class="active"><a href="/aboutus">About</a></li>
            </ul>
        </div>
        <div class="AboutPage">
            <h1 text-align="center">About Us</h1><br/>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Coding, sometimes called computer programming, is how we communicate with computers. Code tells a computer what actions to take, and writing code is like creating a set of instructions. By learning to write code, you can tell computers what to do or how to behave in a much faster way.Computer and information technology jobs are growing incredibly fast in the United States and across the globe. You don't need a Computer Science degree; there are more and more high-paying jobs emerging every day for newer learners like you.Ever wanted to make an app or a website? Code does that. It can also help you automate a spreadsheet or create new tools for your community. Learning to code makes it possible to imagine the things you want to make and actually build them.Have you ever met a coder who regretted learning to code? Probably not, because learning to code is fun and empowering! Coding also opens up a whole new community and network for you. In fact, we've heard the term "addictive" regularly.</p>
        </div>
    </header>
</body>

	</div>
);
};

export default About;
