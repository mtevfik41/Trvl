import React, {Fragment} from 'react';
import '../../App.css';
import Cards from '../utils/Cards';
import HeroSection from '../layout/HeroSection';
import Footer from '../layout/Footer';

const Home = () => {
  return (
      <Fragment>
        <HeroSection />
        <Cards />
        <Footer />
      </Fragment>
  );
}

export default Home;