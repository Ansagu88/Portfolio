import { connect } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import Logo from '../../assets/img/Logo.png'

function Navbar() {
    return(
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand ms-4" href="#">
                    <img src={Logo} alt="Company-Logo" width="90" height="90"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                        <li class="nav-item">
                        <Link to='/' class="nav-link " aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/AboutMe' class="nav-link ">About Me</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/Projects' class="nav-link ">Projects</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/Blog' class="nav-link ">Blog</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/NewsLetters' class="nav-link ">NewsLetters</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/Contact' class="nav-link ">Contact</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success me-4" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{

}) (Navbar)
