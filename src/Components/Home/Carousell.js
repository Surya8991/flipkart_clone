import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousell.css'; // Import a CSS file to define styles

const Carousell = () => {
  return (
    <div className="carousel-container"> {/* Parent container */}
      <Carousel showArrows={true} width={1200} autoPlay={true} showThumbs={false}>
        <div>
          <img className='carousel-img' src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202101/flipkart_sale_banner.jpg" height={250} alt='images' />
          <p className="legend">Flipkart Sale is Live 😍</p>
        </div>
        <div>
          <img className='carousel-img' src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/09/flipkart-and-amazon-banners-1663155325.jpg" height={250} alt='images' />
          <p className="legend">Flipkart Great Indian Festival Sale 🤩🎉</p>
        </div>
        <div>
          <img className='carousel-img' src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202012/flipkart_sale_banner_1.jpg" height={250} alt='images' />
          <p className="legend">Grab Your Mobiles on This Year End Sale 🎇🎉✨🎊</p>
        </div>
        <div>
          <img className='carousel-img' src="https://www.nsbgwalior.com/Eng/Encyc/2020/7/14/2_04_36_11_Flipkart-RuPay-Offer-Banner_1_H@@IGHT_335_W@@IDTH_1014.jpg" height={250} alt='images' />
          <p className="legend">Grab Your Mobiles on This Year End Sale 🎇🎉✨🎊</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carousell;
