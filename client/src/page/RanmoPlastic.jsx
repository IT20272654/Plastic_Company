import React,{ useState } from 'react';
import Swal from 'sweetalert2';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

import { Link } from "react-scroll";
import '../page/RanmoPlastic.css'



import about from '../assets/about.png'
import abouticon1 from '../assets/about-icon1.png'
import abouticon2 from '../assets/about-icon2.png'
import abouticon3 from '../assets/about-icon3.png'

import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpeg'
import product5 from '../assets/product5.jpeg'
import product6 from '../assets/product6.jpeg'




const RanmoPlastic = () => {



  const[userData, setUserData] = useState(
    {
      name: '', email: '', subject: '', message: ''
    }
  )
  let name, value
  console.log(userData)
  const data=(e)=>{
    name = e.target.name
    value = e.target.value
    setUserData({...userData, [name]:value})
  }

  const send = async(e) =>
    {
      Swal.fire({
        title: "Message sent!",
        text: "Thank you for contacting us!",
        icon: "success"
      });
      const{name,email,subject,message} = userData
      e.preventDefault();
      const option = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name,email,subject,message
        })
      }
      const res = await fetch('https://contact-us-9c7fc-default-rtdb.firebaseio.com/Messages.json', option)
      console.log(res)
      // if(res){
      //   alert("Message sent")
      // }
    }


  return (
    <div className="body">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap" rel="stylesheet"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
    <div className="App">
      <header className="nav">
      <h className='heading'>RanmoPlastic</h>
        <nav className="nav__container__actions">  
          <ul className='ul'>
            <li className='li'>
              <Link activeClass="active" smooth spy to="home">
                Home
              </Link>
            </li>
            <li className='li'>
              <Link activeClass="active" smooth spy to="about">
                About
              </Link>
            </li>
            <li className='li'>
              <Link activeClass="active" smooth spy to="product">
                Products
              </Link>
            </li>
            <li className='li'>
              <Link activeClass="active" smooth spy to="services">
                Services
              </Link>
            </li>
            <li className='li'>
              <Link activeClass="active" smooth spy to="review">
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
        <h className='contact'>
          <Link activeClass="active_contact" smooth spy to="contact">
                Get in Touch
          </Link>
        </h>
      </header>
      <section id="home">
           <div className="title" align='left'>
            Giving Shine<br/>
            to Your Product
           </div>
            <p6 className='description'>Welcome to Ranmo Plastic! We create high-quality plastic products for various industries. Our commitment to quality and sustainability ensures you get the best products while caring for the environment. Explore our range and see how we can meet your needs.  <br/><br/>   



            <div class="container">
              <a href="#" class="button button--piyo">
                <div class="button__wrapper">
                  <span class="button__text"><Link activeClass="active_contact" smooth spy to="product">
              View Products
              </Link></span>
                </div>
                <div class="characterBox">
                  <div class="character wakeup">
                    <div class="character__face"></div>
                  </div>
                  <div class="character wakeup">
                    <div class="character__face"></div>
                  </div>
                  <div class="character">
                    <div class="character__face"></div>
                  </div>
                </div>
              </a>
            </div>
          </p6>
      </section>

      <section id="about">
      <h1 className="about-title" align='left'>
      About Us
      </h1>
      <p6 className='description-about-us'><img className='about-img' src={about}/>
        Ranmo Plastics Incorporated in 2004 in Kelaniya, Sri Lanka, we are now 15 years into our service, placing client relationships and superior products at the heart of what we do. Today, we are an ISO 9001:2015 certified organization, and we are proud to say that we have implemented 5S and Kaizen quality circles. We look towards incorporating green manufacturing methods in the future and operate by our mantra of endorsing success through long-term client relationships and goodwill.
      <br/><br/>
      <h2></h2>
      <p></p>
      <div class="row">
  <div class="column1">
  <p className='column1-heading' align='center'><img className='abouticon1' src={abouticon1}/>Powerful Engineering</p>
    <p>Helping you from Engineering to product:</p><br/>
    <p>
    <ul className='column1-ul'>
      <li className='column1-li'>Product Development</li>
      <li className='column1-li'>Mould Flow analysis</li>
      <li className='column1-li'>Mould and product analysis & Suggestion</li>
      <li className='column1-li'>Mould design of construction & Components</li>
      <li className='column1-li'>Mould engineering change and Improvement</li>
      <li className='column1-li'>Project analysis & summarizing, provide advice to customers</li>
    </ul>
    </p>
  </div>
  <div class="column2">
  <p className='column1-heading' align='center'><img className='abouticon2' src={abouticon2}/>Tooling & Molding</p>
    <p>Ranmo has developed an innovative approach to plastic product and component development which enables us to predict performance and optimize the design before a commitment is made for tooling. The result is a significant reduction in development time and total delivered cost. This is accomplished by turning the prototyping effort into a product confirmation and fine tuning activity, rather than a long series of tooling changes, steel adjustments and moulding trials.</p>
  </div>
  <div class="column3">
  <p className='column1-heading' align='center'><img className='abouticon3' src={abouticon3}/>Project management</p>
    <p>Efficient Project Management with ERP System:</p><br/>
    <p>
    <ul className='column1-ul'>
      <li className='column1-li'>ERP system to monitor all jobs to ensure on time delivery</li>
      <li className='column1-li'>Faster turnaround & and exceptional service from project manager</li>
      <li className='column1-li'>Experience, flexibility, quality, The RANMO Team differences</li>
    </ul>
    </p>
  </div>
</div>

      
      </p6>

      
      </section>
      <section id="product">
      <h1 className="product-title" align='left'>
      Some of Our Works
      </h1>
      

<div class="background">
    <div class="background-texture">

    <section class="carousel">
      <div class="carousel__container">
        
        <div class="carousel-item">
        <img className='product-img' src={product1}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Spoons & Forks</h1>
            </div>
          </div>
        </div>

        <div class="carousel-item">
        <img className='product-img' src={product2}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Cups</h1>
            </div>
          </div>
        </div>

        <div class="carousel-item">
        <img className='product-img' src={product4}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Bottles</h1>
            </div>
          </div>
        </div>

        <div class="carousel-item">
        <img className='product-img' src={product5}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Bottles</h1>
            </div>
          </div>
        </div>

        <div class="carousel-item">
        <img className='product-img' src={product5}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Bottles</h1>
            </div>
          </div>
        </div>

        <div class="carousel-item">
        <img className='product-img' src={product6}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Straw</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
      </div>

      <div class="background">
    <div class="background-texture">

    <section class="carousel2">
      <div class="carousel__container">
        
        <div class="carousel-item">
        <img className='product-img' src={product1}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Spoons & Forks</h1>
            </div>
          </div>
        </div>

        <div class="carousel-item">
        <img className='product-img' src={product2}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Cups</h1>
            </div>
          </div>
        </div>

        <div class="carousel-item">
        <img className='product-img' src={product4}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Bottles</h1>
            </div>
          </div>
        </div>

        <div class="carousel-item">
        <img className='product-img' src={product5}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Bottles</h1>
            </div>
          </div>
        </div>

        <div class="carousel-item">
        <img className='product-img' src={product5}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Bottles</h1>
            </div>
          </div>
        </div>  

        <div class="carousel-item">
        <img className='product-img' src={product6}/>
          <div class="carousel-item__details">
            <div class="controls">
            <h1 class="carousel-item__details--title">Straw</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
      </div>







      </section>







      <section id="services">
      <h1 className="product-title" align='left'>
      See Our Top Notch Services
      </h1>
      <p6 className='description-service'>
      <p>The company has established and maintains an environment which encourages employee awareness and fulfillment of customer requirements, and commitment to meeting quality requirements and continual improvement at all levels throughout the organization. .</p>


<div className="service">
<section className="cards-service">
<article className="card-service card--1">

  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> CONCEPT DEVELOPMENT </span>
    <h6 className="card__title">Tap into our invaluable industry experience at concept development stage. Our understanding of industry specific applications and environments can help you achieve fit-for-purpose plastic engineering solutions for your project.</h6>
  </div>
</article>
  
<article className="card-service card--2">

  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> CNC MILLING </span>
    <h6 className="card__title">Our facility is fully enabled with 3, 4, & 5 axis CNC mills, allowing for unmatched precision and versatility. Your standard, custom, or re-engineered plastic parts are expertly machined according to your job's exact specifications.</h6>
  </div>
</article>
<article className="card-service card--3">

  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> CNC TURNING </span>
    <h6 className="card__title">Using our latest CNC lathes or conventional machines we can turn components with fine dimensional tolerances in variable batch sizes. Select from a range of rigid industrial polymer rods or tube for parts including bearings, bushes, washers, shafts, bungs and bobbins.</h6>
  </div>
</article>
  </section>
  </div>
<br/>

<div className="service">
<section className="cards-service">
<article className="card-service card--4">

  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> PROTOTYPING </span>
    <h6 className="card__title">Tap into our invaluable industry experience at concept development stage. Our understanding of industry specific applications and environments can help you achieve fit-for-purpose plastic engineering solutions for your project.</h6>
  </div>
</article>
  
<article className="card-service card--5">

  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> COMPUTER AIDED DESIGNING </span>
    <h6 className="card__title">Our facility is fully enabled with 3, 4, & 5 axis CNC mills, allowing for unmatched precision and versatility. Your standard, custom, or re-engineered plastic parts are expertly machined according to your job's exact specifications.</h6>
  </div>
</article>
<article className="card-service card--6">

  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> FINISHING AND INSPECTION </span>
    <h6 className="card__title">From the purchase of highest quality plastics from an internationally respected supplier base, to rigourous inspection throughout the manufacturing process, including finishing and assembly steps, All Axis meets ISO 9001:2015 and customer requirements throughout.</h6>
  </div>
</article>
  </section>
  </div>

      </p6>
      </section>
      <section id="review">
      <h1 className="about-title" align='left'>
      What Our Clients Say
      </h1>

     
     
      <div className='client-review' align='center'>
    <figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>Lovely experience working with RANMO team, Done few jobs and really Happy with the Quality of the product. The finishes are more than expected and the customer service is adorable, I wish all the best for the Ranmo Team and hope to have a fruitful Business relationship in future.</p>
    </blockquote>
    <h3>Nimal Palitha</h3>
    <h4>Atlas</h4>
  </figcaption>
</figure>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>Lovely experience working with RANMO team, Done few jobs and really Happy with the Quality of the product. The finishes are more than expected and the customer service is adorable, I wish all the best for the Ranmo Team and hope to have a fruitful Business relationship in future.</p>
    </blockquote>
    <h3>Kumari Silva</h3>
    <h4>Coca-Cola</h4>
  </figcaption>
</figure>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>Lovely experience working with RANMO team, Done few jobs and really Happy with the Quality of the product. The finishes are more than expected and the customer service is adorable, I wish all the best for the Ranmo Team and hope to have a fruitful Business relationship in future. </p>
    </blockquote>
    <h3>Natasha De Silva</h3>
    <h4>Prima</h4>
  </figcaption>
</figure><br/>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>Lovely experience working with RANMO team, Done few jobs and really Happy with the Quality of the product. The finishes are more than expected and the customer service is adorable, I wish all the best for the Ranmo Team and hope to have a fruitful Business relationship in future.</p>
    </blockquote>
    <h3>Wathsala Perera</h3>
    <h4>Coca-Cola</h4>
  </figcaption>
</figure>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>Lovely experience working with RANMO team, Done few jobs and really Happy with the Quality of the product. The finishes are more than expected and the customer service is adorable, I wish all the best for the Ranmo Team and hope to have a fruitful Business relationship in future.</p>
    </blockquote>
    <h3>Saman Kumara</h3>
    <h4>Keels</h4>
  </figcaption>
</figure>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>Lovely experience working with RANMO team, Done few jobs and really Happy with the Quality of the product. The finishes are more than expected and the customer service is adorable, I wish all the best for the Ranmo Team and hope to have a fruitful Business relationship in future.</p>
    </blockquote>
    <h3>Amal Rajakaruna</h3>
    <h4>Food City</h4>
  </figcaption>
</figure>
</div>

      </section>


      <section id="contact">
      <h1 className="product-title" align='left'>
      Contact Us
      </h1>
      <table className='contactUS-table' align='center'>
      <tr>
        <th className='left-header'>Get in touch<br/> <br/>
          <p6 className='left'>Feel free to get in touch with us. We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p6><br/> <br/> 
          <br/><br/>
          <p6 className='left-sub-heading'>Our Office & Factory</p6><br/> 
          <p6 className='left'>69, Waragoda Road, Kelaniya, Sri Lanka</p6><br/> 
          <p6 className='left'>+94 71 805 4615</p6><br/> 
          <p6 className='left'>info@ranmo.lk</p6><br/> 
        </th>
        <th className='right-header'>How Can We Help?<br/> <br/>
        
        
        <div className='form'>
          <form method='POST'>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" value={userData.name} placeholder="Your name.." autoComplete='off' onChange={data}/>

              <label for="email">Email</label>
            <input type="text" id="email" name="email" value={userData.email} placeholder="Your email.." autoComplete='off' onChange={data}/>

              <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={userData.subject} placeholder="Subject.." autoComplete='off' onChange={data}/>
            
            <label for="message">Message</label>
            <textarea rows="4" cols="50" name="message" value={userData.message} form="usrform" autoComplete='off' onChange={data}></textarea>
            
            <button className='submit-button' onClick={send}>Send</button>
          </form>
        </div>
        </th>
      </tr>
    </table>
      </section>
<nav className="nav__container__actions">  
          <ul className='ul'>
            <li className='li'>
              <Link activeClass="active" smooth spy to="home">
                Home
              </Link>
            </li>
            <li className='li'>
              <Link activeClass="active" smooth spy to="about">
                About
              </Link>
            </li>
            <li className='li'>
              <Link activeClass="active" smooth spy to="product">
                Products
              </Link>
            </li>
            <li className='li'>
              <Link activeClass="active" smooth spy to="services">
                Services
              </Link>
            </li>
            <li className='li'>
              <Link activeClass="active" smooth spy to="review">
                Reviews
              </Link>
            </li>
          </ul>
        </nav>

<br/><br/><br/><br/>

        <div class="pg-footer">
    <footer class="footer">
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div class="footer-content">
        <div class="footer-content-column">
          <div class="footer-logo">
            
            <h href="#home" className='heading-footer'>RanmoPlastic</h>
            
          </div>
          <div class="social-icons">
  <a href="www.facebook.com"  title="facebook"> 
    <i class="fa fa-facebook-square" aria-hidden="true"></i>
  </a>
  <a href="www.twitter.com" title="twitter"> 
    <i class="fa fa-twitter-square" aria-hidden="true"></i>
  </a>
  <a href="www.instagram.com" title="instagram">  
    <i class="fa fa-instagram" aria-hidden="true"></i>
  </a>
  <a href="www.youtube.com" title="youtube">
    <i class="fa fa-youtube-square" aria-hidden="true"></i>
  </a>
  <a href="www.linkedin.com" title="linkedin">
    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
  </a>
</div>
        </div>
      </div>
    </footer>
  </div>

    </div>
    </div>
  )
}

export default RanmoPlastic
