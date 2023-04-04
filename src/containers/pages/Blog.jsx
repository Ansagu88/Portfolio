import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { useEffect } from "react"
import { get_categories } from "redux/actions/categories/categories"
import { connect } from "react-redux"


function Blog({
    get_categories,
    categories

}) {

    useEffect(()=>{
        window.scrollTo(0,0)
        get_categories()
    },[])




    return (
        <Layout>
            <Navbar/>
            <div>
                Blog
                
            </div>
                <Footer/>
        </Layout>
        
    )
}
const mapStateToProps=state=>({
    categories: state.categories.categories
})

export default connect(mapStateToProps,{
    get_categories,
})(Blog)