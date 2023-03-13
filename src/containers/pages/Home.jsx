import Header from "components/Home/Header";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Carousel from "components/Home/Carousel";
import Contact from "components/Home/Contact";
import Blog from "components/Home/Blog";

function Home() {
  return (
    <Layout>
      <Navbar />
        <div class="col">
        <Header />
        </div>
        
        <div class="col">
        <Carousel />
        </div>

        <div class="col">
        <Blog />
        </div>

        <div class='col'>
        <Contact />
        </div>
        
      <Footer />
    </Layout>
  );
}

export default Home;
