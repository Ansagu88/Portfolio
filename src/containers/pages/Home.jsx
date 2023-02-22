import Header from "components/Home/Header";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Carousel from "components/Home/Carousel";

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
      <Footer />
    </Layout>
  );
}

export default Home;
