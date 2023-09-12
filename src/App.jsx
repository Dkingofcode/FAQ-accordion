import { useEffect, useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import pattern from "./assets/bg-pattern-desktop.svg";
import illustration from "./assets/illustration-woman-online-desktop.svg";
import box from './assets/illustration-box-desktop.svg';
import arrowdown from './assets/icon-arrow-down.svg';
import patternMobile from './assets/bg-pattern-mobile.svg';
import mobileillustration from './assets/illustration-woman-online-mobile.svg';
import './App.css';



function App() {
  const [patterns, setPattern] = useState(pattern);
  const [ image, setImage ] = useState(illustration);
  const updateImages = () => {
    if(window.innerWidth <= 1100){
      setImage(mobileillustration);
      setPattern(patternMobile);  
    }else{
       setImage(illustration);
       setPattern(pattern);
    }
  };
  
  useEffect(() => {
   updateImages();  // Call it once to set initial values 
   
   // Add event listener to detect width changes
   window.addEventListener('resize', updateImages);

   // Clean up when component unmounts
   return () => {
     window.removeEventListener('resize', updateImages);
   };

  }, []);


  return (
    <>
     <div className='Container'>
      <div className='Cardcontainer'>
       <div className='images'>
       <img src={patterns} alt="faq-image" className='pattern' />
       <div class="image_container">
       <img src={image} alt="illustration of woman online" className='illustration' />
        </div> 

        </div>

        <div className='questions'>
        <h1>FAQ</h1>
        
        <div>
        <h4>How many team members can i invite?</h4>
        <p>You can invite as many team members as you like.</p>
        <img src={arrowdown} alt="arrowdown icon"  />
        </div>
        
        <div>
        <h4>What is the maximum file upload size?</h4>
        <p>No more than 2GB. All files in your account must fit your alotted storage space.</p>
        <img src={arrowdown} alt="arrowdown icon"  />
        </div>

        <div>
        <h4>How do i reset my password?</h4>
        <p>You have to go to the reset password page by clicking the link reset password. then type in your new password</p>
        <img src={arrowdown} alt="arrowdown icon"  />
        </div> 

         <div>
        <h4>Can i cancel my subscription?</h4>
        <p>Yeas, you can cancel your subscription any time you want, all you have to do is go to the settting page and click on subscriptions, then click on cancel or end subscription.</p>
        <img src={arrowdown} alt="arrowdown icon"  />
        </div>  

        <div> 
        <h4>Do you provide additional support?</h4>
        <p>Yes, but it depends on the requirements involved, we can only support tech related issues.</p>
        <img src={arrowdown} alt="arrowdown icon"  />
        </div>
        
        </div>

      </div>
       <img src={box} alt="illustration of box" className='box' /> 
     </div>       
      
    </>
  )
}

export default App;
