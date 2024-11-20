import About from "./about/about";
import Contact from "./contact/contact";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Hero from "./Hero/Hero";
import Services from "./services/service";
import Skills from "./skills/skills";

const Home = () => {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <title>Portfolio Website</title>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
