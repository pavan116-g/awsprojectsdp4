import React from "react";
import lg from '../vector/default-monochrome-white.svg';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import '../App.css';
const Gallery = () => {
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
                <li  class="active"><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About</a></li>
            </ul>
        </div>
        <div class="container-all">
            <br>
            </br>
            <br></br>
            <br></br>
            <br></br>
            <div class="container">
            <img src={img3} alt=""/>
            <span class="title1">0!=days()</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
            <div class="container">
            <img src={img4} alt=""/>
            <span class="title1">Be yourself in loving with code.</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
            <div class="container">
            <img src={img5} alt=""/>
            <span class="title1">Don’t delay give today!</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
            <div class="container">
            <img src={img6} alt=""/>
            <span class="title1">Code until you die</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
            <div class="container">
            <img src={img1} alt=""/>
            <span class="title1">eat sleep code repeat</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
            <div class="container">
            <img src={img2} alt=""/>
            <span class="title1">Let your decision not be analytical, but Logical</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
 
            </div>
    </header>
</body>

	</div>
);
};

export default Gallery;
