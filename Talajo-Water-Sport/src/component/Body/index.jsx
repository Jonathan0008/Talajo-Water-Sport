/* eslint-disable react/no-unescaped-entities */
// import Button from "../Button";
// import Fade from "react-reveal/Fade";

import About from "../About";
import Book from "../BookATable/Index";
import Chefs from "../Chefs";
import Contact from "../Contact";
import Events from "../Events";
import Footer from "../Footer";
import Gallery from "../Gallery";
import Header from "../Header";
import Hero from "../Hero";
import Menu from "../Menu";
import Specials from "../Specials";
import Testimonials from "../Testimonials";
import WhyUs from "../WhuUs";



const Body = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <main id="main">
      <About/>
      <WhyUs/>
      <Menu/>
      <Specials/>
      <Events/>
      <Book/>
      <Testimonials/>
      <Gallery/>
      <Chefs/>
      <Contact/>
    </main>
    <Footer/>
    </>
  );
};

export default Body;