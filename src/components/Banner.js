import React  from 'react';
import '../styles/Banner.css';
import Slider from 'react-slick';
import banner1 from '../images/banner1.jpeg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'


const banners = [
  {
    id: 1,
    title: 'Discover a World of Stories',
    subtitle: 'Find your next great read at Bookshop Name.',
    buttonText: 'Buy Book',
    image: banner1,
  },
  {
    id: 2,
    title: 'Uncover Hidden Gems',
    subtitle: 'Explore a curated selection of books.',
    buttonText: 'Shop Now',
    image: banner2,
  },
  {
    id: 3,
    title: 'Your Favorite Authors, All in One Place',
    subtitle: 'Find books from all your favorite authors.',
    buttonText: 'Browse Collection',
    image: banner3,
  }
];

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Change slide every 2 seconds
    fade: true, 
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 3000, // Change speed if needed
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500, // Adjust speed for mobile
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} >
            <div className="banner-slide" style={{ backgroundImage: `url(${banner.image})` }}>
              <div className="banner-content" >
                <h1>{banner.title}</h1>
                <p>{banner.subtitle}</p>
                <button className={`banner-button back-${banner.id}`}>{banner.buttonText}</button>
              </div>

            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
