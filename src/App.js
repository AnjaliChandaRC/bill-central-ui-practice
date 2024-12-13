import './App.css';
import Header from './components/common/Header';
import Hero from './components/Hero';
import CompaniesLogo from './components/CompaniesLogo';
import SimpleEnergy from './components/SimpleEnergy';
import SimpleSteps from './components/SimpleSteps';
import Utility from './components/Utility';
import WhyChoose from './components/WhyChoose';
import OurTestimonials from './components/OurTestimonials';
import Faq from './components/Faq';
import NewsLetter from './components/NewsLetter';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompaniesLogo />
      <SimpleEnergy />
      <SimpleSteps />
      <Utility />
      <WhyChoose />
      <OurTestimonials />
      <Faq />
      <NewsLetter />
      <Footer/>
    </>
  );
}

export default App;
