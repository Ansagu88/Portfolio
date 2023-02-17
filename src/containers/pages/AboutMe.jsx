import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"


function AboutMe() {
    return (
        <Layout>
            <Navbar/>
            <div>
                AboutMe
            </div>
                <Footer/>
        </Layout>
        
    )
}

export default AboutMe
