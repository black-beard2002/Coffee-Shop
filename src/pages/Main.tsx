import HeaderNav from "../components/HeaderNav";
import homebg from "../assets/image/homebg.jpg";
import homeimg1 from "../assets/image/homeimg1.png";
import homeimg2 from "../assets/image/homeimg2.png";
import homeimg3 from "../assets/image/homeimg3.png";
import aboutimg from "../assets/image/aboutimg.png";
import abouticon1 from "../assets/image/abouticon1.png";
import abouticon2 from "../assets/image/abouticon2.png";
import abouticon3 from "../assets/image/abouticon3.png";
import menubg from "../assets/image/menubg.jpg";
import items from "../assets/data/menuitems.ts";
import bookbg from "../assets/image/bookbg.jpg";
import { ProductItem } from "../components/ProductItem.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reviews from "../assets/data/reviews.ts";
import { useNavigate } from "react-router-dom";
import {
  faArrowRight,
  faEnvelope,
  faPhone,
  faQuoteLeft,
  faQuoteRight,
  faRoute,
  faStar,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import {
  faConnectdevelop,
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Main() {
  interface Review {
    id: number;
    text: string;
    date: string;
    client: string;
    image: string;
    rating: number;
  }

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft = {
    initial: {
      x: -60,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    initial: {
      x: 60,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reviewsPerPage = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(reviews.length / reviewsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  }, [totalSlides]);
  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, nextSlide]);

  const getCurrentReviews = useCallback(() => {
    const startIndex = currentIndex * reviewsPerPage;
    return reviews.slice(startIndex, startIndex + reviewsPerPage);
  }, [currentIndex, reviewsPerPage]);

  interface ReviewCardProps {
    review: Review; // Define the expected prop type here
  }

  const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
    <div className="flex-1 p-3 ">
      <div
        className="flex relative group flex-col border-2 border-[#443] 
              rounded-[95%_4%_97%_5%/_4%_94%_3%_95%] items-center text-center h-full bg-white p-6"
      >
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="absolute top-5 duration-300 left-5 z-10 w-8 h-8 text-[#443] group-hover:-top-8 opacity-50"
        />
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="absolute bottom-5 duration-300 right-5 z-10 w-8 h-8 text-[#443] group-hover:-bottom-8 opacity-50"
        />
        <div className="w-20 h-20 mb-4 rounded-full overflow-hidden">
          <img
            src={review.image}
            alt={review.client}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex mb-4">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={
                index < review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>

        <p className="text-gray-700 mb-4 text-lg flex-grow">{review.text}</p>

        <div className="mt-auto">
          <h3 className="font-semibold text-lg">{review.client}</h3>

          <p className="text-gray-500 text-sm">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex w-full flex-col overflow-hidden">
      <div
        className="w-full min-h-screen flex flex-col bg-cover bg-center"
        id="home"
        style={{
          backgroundImage: `url(${homebg})`,
        }}
      >
        <HeaderNav />

        <div className="flex flex-col md:flex-row px-4 lg:px-20 w-full justify-between items-center mt-16 md:mt-32 space-y-8 md:space-y-0">
          <div className="flex flex-col w-full md:w-1/2 text-center md:text-left px-4 space-y-6">
            <h1 className="text-3xl mt-10 md:mt-0 md:text-4xl lg:text-5xl text-[#443] font-poppins font-bold leading-tight">
              FRESH COFFEE IN THE MORNING
            </h1>
            <a
              href="#menu"
              className="self-center md:self-start max-w-fit px-6 py-3 border-2 border-[#443] 
              rounded-[95%_4%_97%_5%/_4%_94%_3%_95%] text-[#443] 
              hover:rounded-[4%_95%_6%_95%/_95%_4%_92%_5%] hover:border-dashed 
              transition-all duration-300"
            >
              Popular Menu
            </a>
          </div>

          <img
            src={homeimg1}
            alt="Coffee"
            className="w-56 md:w-72 lg:w-80 h-auto animate-slow-bounce"
          />
        </div>

        <div className="flex justify-center items-center mt-8 md:mt-16 space-x-4">
          {[homeimg2, homeimg3].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Coffee variation ${index + 1}`}
              className="w-24 md:w-32 lg:w-40 h-auto transform hover:-translate-y-7 duration-300"
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInLeft}
        className="flex flex-col lg:flex-row items-center mt-10 space-y-8 md:space-y-0 md:space-x-12"
      >
        <div
          id="about"
          className="w-full px-4 md:px-16 lg:px-28 py-16 flex flex-col items-center"
        >
          <div className="relative w-full text-center mb-12">
            <h2
              className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl 
      font-bold uppercase tracking-wider 
      text-transparent 
      stroke-[#443] stroke-[1px] 
      text-stroke-2 opacity-20"
            >
              ABOUT US
            </h2>
            <h1
              className="relative z-10 text-2xl md:text-3xl 
      font-bold uppercase tracking-wider 
      text-[#443]"
            >
              Why Choose Us
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center mt-10 space-y-8 md:space-y-0 md:space-x-12">
            <img
              src={aboutimg}
              alt="About Coffee"
              className="w-full md:w-1/2 max-w-[500px] rounded-[95%_4%_97%_5%/4%_94%_3%_95%] animate-about-image"
            />

            <div className="flex flex-1 flex-col space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl text-[#443] font-bold capitalize">
                what makes our coffee special!
              </h2>

              <p className="text-sm md:text-lg text-[#443] leading-relaxed">
                At our coffee shop, every cup is crafted with care, using only
                the finest, sustainably sourced beans. We roast in small batches
                to ensure maximum freshness, bringing out rich, unique flavors
                in every brew. Whether you're enjoying a bold espresso or a
                smooth latte, our attention to quality and passion for great
                coffee make every sip something truly special.
              </p>

              <button
                className="self-center md:self-start max-w-fit px-4 py-2 border-2 border-[#443] 
        rounded-[95%_4%_97%_5%/_4%_94%_3%_95%] text-[#443] 
        hover:rounded-[4%_95%_6%_95%/_95%_4%_92%_5%] hover:border-dashed 
        transition-all duration-300"
              >
                Read More
              </button>

              <div className="flex flex-row justify-between items-center space-x-4">
                {[
                  { icon: abouticon1, text: "quality coffee" },
                  { icon: abouticon2, text: "easy location" },
                  { icon: abouticon3, text: "free delivery" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 border-2 border-[#443] 
            rounded-[95%_4%_97%_5%/_4%_94%_3%_95%] space-y-2 text-center w-1/3"
                  >
                    <img
                      src={item.icon}
                      alt={item.text}
                      className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <h3 className="text-xs md:text-sm text-[#4a4a3b] font-semibold capitalize">
                      {item.text}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div
        className="w-full min-h-screen flex flex-col bg-cover bg-center p-5"
        id="menu"
        style={{
          backgroundImage: `url(${menubg})`,
        }}
      >
        <div className="relative w-full text-center mb-12">
          <h2
            className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl 
      font-bold uppercase tracking-wider 
      text-transparent 
      stroke-[#443] stroke-[1px] 
      text-stroke-2 opacity-50"
          >
            OUR MENU
          </h2>
          <h1
            className="relative z-10 text-2xl md:text-3xl 
      font-bold uppercase tracking-wider 
      text-[#443]"
          >
            Popular Menu
          </h1>
        </div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full mt-20 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center"
        >
          {items.map((item) => item.popular && (
            <motion.div key={item.id} variants={fadeInUp}>
              <ProductItem product={item} />
            </motion.div>
          ))}
        </motion.div>
        <button
          onClick={() => {
            navigate("/menu");
          }}
          className="self-center inline-flex flex-row gap-2 items-center group md:self-start max-w-fit px-4 mx-auto py-2 border-2 border-[#443] 
        rounded-[95%_4%_97%_5%/_4%_94%_3%_95%] text-[#443] 
        hover:rounded-[4%_95%_6%_95%/_95%_4%_92%_5%] hover:border-dashed 
        transition-all duration-300"
        >
          Discover Menu
          <FontAwesomeIcon
            icon={faWineGlass}
            className="group-hover:rotate-45 duration-300"
          />
        </button>
      </div>

      <div id="reviews" className="w-full flex flex-col">
        <div className="flex flex-col w-full p-5 mb-5">
          <div className="relative w-full text-center mb-12">
            <h2
              className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl 
      font-bold uppercase tracking-wider 
      text-transparent 
      stroke-[#443] stroke-[1px] 
      text-stroke-2 opacity-50"
            >
              REVIEWS
            </h2>
            <h1
              className="relative z-10 text-2xl md:text-3xl 
      font-bold uppercase tracking-wider 
      text-[#443]"
            >
              What People Say
            </h1>
          </div>
        </div>
        {/* Carousel Section */}
        <div className="relative w-full max-w-6xl mx-auto mb-8">
          <div className="overflow-hidden rounded-lg">
            <div className="relative">
              <div className={`flex py-10 gap-6 ${isMobile ? "flex-col" : ""}`}>
                {getCurrentReviews().map((review: Review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-gray-800 w-4" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="book"
        className="w-full min-h-screen flex flex-col bg-cover bg-center p-5"
        style={{
          backgroundImage: `url(${bookbg})`,
        }}
      >
        <div className="relative w-full text-center mb-12">
          <h2
            className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl 
      font-bold uppercase tracking-wider 
      text-transparent 
      stroke-[#443] stroke-[1px] 
      text-stroke-2 opacity-50"
          >
            BOOKING
          </h2>
          <h1
            className="relative z-10 text-2xl md:text-3xl 
      font-bold uppercase tracking-wider 
      text-[#443]"
          >
            Reserve A Table
          </h1>
        </div>
        <motion.form
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="border-2 border-[#443] rounded-[95%_4%_97%_5%/_4%_94%_3%_95%] p-10 w-full md:w-3/5 lg:w-1/2 mt-16 mx-auto"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full text-sm p-3 mb-4 bg-transparent text-black border-[2px] border-[#443] rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 mb-4 bg-transparent text-black border-[2px] border-[#443] rounded-md"
          />
          <input
            type="number"
            placeholder="Phone Number"
            required
            className="w-full p-3 mb-4 bg-transparent text-black border-[2px] border-[#443] rounded-md"
          />
          <textarea
            placeholder="Message"
            className="w-full min-h-40 p-3 mb-4 bg-transparent text-black border-[2px] border-[#443] rounded-md"
          />
          <button
            className="self-center md:self-start max-w-fit px-6 py-3 border-2 border-[#443] 
              rounded-[95%_4%_97%_5%/_4%_94%_3%_95%] text-[#443] 
              hover:rounded-[4%_95%_6%_95%/_95%_4%_92%_5%] hover:border-dashed 
              transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      <div className="w-full mt-5" id="footer">
        <footer className="p-5 flex flex-wrap justify-between lg:justify-evenly">
          <div className="mb-5 w-full sm:w-1/2 lg:w-1/4">
            <h1 className="font-poppins text-lg lg:text-2xl font-semibold text-[#443] mb-5">
              Our Branches
            </h1>
            <div className="flex flex-col gap-4">
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faRoute} className="text-[#443]" />
                Sin El Fil
              </a>
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faRoute} className="text-[#443]" />
                Spot Choueifat
              </a>
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faRoute} className="text-[#443]" />
                City Center
              </a>
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faRoute} className="text-[#443]" />
                ABC Vardan
              </a>
            </div>
          </div>
          <div className="mb-5 w-full sm:w-1/2 lg:w-1/4">
            <h1 className="font-poppins text-lg lg:text-2xl font-semibold text-[#443] mb-5">
              Quick Links
            </h1>
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="text-[#443]" />
                Home
              </a>
              <a
                href="#about"
                className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="text-[#443]" />
                About
              </a>
              <a
                href="#menu"
                className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="text-[#443]" />
                Menu
              </a>
              <a
                href="#book"
                className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="text-[#443]" />
                Book
              </a>
            </div>
          </div>
          <div className="mb-5 w-full sm:w-1/2 lg:w-1/4">
            <h1 className="font-poppins text-lg lg:text-2xl font-semibold text-[#443] mb-5">
              Contact Info
            </h1>
            <div className="flex flex-col gap-4">
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faPhone} className="text-[#443]" />
                01 500 400
              </a>
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faPhone} className="text-[#443]" />
                05 120 300
              </a>
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#443]" />
                Brew.Haven@gmail.com
              </a>
            </div>
          </div>
          <div className="mb-5 w-full sm:w-1/2 lg:w-1/4">
            <h1 className="font-poppins text-lg lg:text-2xl font-semibold text-[#443] mb-5">
              Follow Us
            </h1>
            <div className="flex flex-col gap-4">
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} className="text-[#443]" />
                Brew Haven
              </a>
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faTwitter} className="text-[#443]" />
                Brew.Haven
              </a>
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} className="text-[#443]" />
                @Brew.Haven
              </a>
              <a className="inline-flex flex-row gap-2 text-sm text-[#443] items-center font-poppins hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faTiktok} className="text-[#443]" />
                BrewHaven
              </a>
            </div>
          </div>
        </footer>
        <div className="w-full bg-[#d6d6a8] text-[#443] py-4 text-center flex flex-col items-center space-y-2">
          <p className="text-sm">
            Designed and Created By{" "}
            <span className="font-semibold">Ahmad Salemeh</span>
          </p>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon
              icon={faConnectdevelop}
              className="text-[#443] w-5 h-5"
            />
            <p className="text-xs">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
