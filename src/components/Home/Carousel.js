import Stock from "../../assets/img/Stock.png";
import Colors from "../../assets/img/Colors.png";
import Eco from "../../assets/img/Econmerce.png";

function Carousel() {
    return (
        <section class="section about-section " id="about-carousel">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={Stock} class="d-block w-100" height="950" alt="Stock's Image Project"></img>
                    <div class="carousel-caption d-none d-md-block">
                    <div class="card w-50">
                        <div class="card-header">
                                Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Button</a>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={Colors} class="d-block w-100" height="950" alt="IA's Image Project"></img>
                    <div class="carousel-caption d-none d-md-block">
                        <div class="card-colors">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={Eco} class="d-block w-100" height="950" alt="Eco's Image Project"></img>
                    <div class="carousel-caption d-none d-md-block">
                    <div class="card w-50">
                        <div class="card-header">
                                Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Button</a>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>    
    )
    
}
export default Carousel;
