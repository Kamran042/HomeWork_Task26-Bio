import AboutMe from "./components/AboutMe/AboutMe";
import Design from "./components/Designn/Design";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LineSlider from "./components/LineSlider/LineSlider";
import MyBlog from "./components/MyBlog/MyBlog";
import Services from "./components/MyServices/Serviсes";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Portfolio from "./components/Portfolio/Portfolio";
import Review from "./components/Reviiew/Review";
import RightNav from "./components/RightNav/RightNav";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <RightNav/>
      </header>
      <main>
        <Header />
        <Services />
        <AboutMe />
        <Design />
        <Education />
        <Portfolio />
        <Review />
        <LineSlider />
        <MyBlog />
        <Newsletter />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
