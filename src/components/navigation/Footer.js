import { connect } from "react-redux";
import Logo from "../../assets/img/LILTHI.png";
import Link from "../../assets/img/link_icon.png";
import Inst from "../../assets/img/Ins_icon.png";
import Twitter from "../../assets/img/Twi_icon.png";


function Footer() {
  return (
    <footer class="footer-area footer-one" id="all-footer" >
      <div class="footer-widget p-0">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-4 col-sm-12">
              <div class="f-about h-60 pe-0">
                <div class="footer-logo pt-1 pe-0 mt-0">
                  <a href="javascript:void(0)">
                    <img class="footer-image-logo m-2" src={Logo} alt="Logo" width="300" height="200" />
                  </a>                  
                </div>
                <p class="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="footer-social">
                <a href="javascript:void(0)">
                    <img class="footer-image-link m-2" src={Link} alt="Logo" width="40" height="40" />
                  </a>
                  <a href="javascript:void(0)">
                    <img class="footer-image-inst m-2" src={Inst} alt="Logo" width="40" height="40" />
                  </a>
                  <a href="javascript:void(0)">
                    <img class="footer-image-twi m-2" src={Twitter} alt="Logo" width="40" height="40" />
                  </a>
                </div>
              <div class="footer-app-store pt-0" >
                <h5 class="download-title">Download Our App Now!</h5>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://cdn.ayroui.com/1.0/images/footer/app-store.svg"
                        alt="app"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://cdn.ayroui.com/1.0/images/footer/play-store.svg"
                        alt="play"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-sm-4 pt-5 mt-1">
              <div class="footer-link">
                <h6 class="footer-title">Company</h6>
                <ul>
                  <li>
                    <a href="javascript:void(0)">About</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Contact</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Marketing</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Awards</a>
                  </li>
                </ul>
              </div>
              {/* <!-- footer link --> */}
            </div>
            <div class="col-xl-2 col-lg-3 col-sm-4 pt-5 mt-1">
              <div class="footer-link">
                <h6 class="footer-title">Services</h6>
                <ul>
                  <li>
                    <a href="javascript:void(0)">Products</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Business</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Developer</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Insights</a>
                  </li>
                </ul>
              </div>
              {/* <!-- footer link --> */}
            </div>
            <div class="col-xl-2 col-lg-3 col-sm-4 pt-5 mt-1">
              {/* <!-- Start Footer Contact --> */}
              <div class="footer-contact">
                <h6 class="footer-title">Help & Suuport</h6>
                <ul>
                  <li>
                    <i class="lni lni-map-marker"></i> Madison Street, NewYork,
                    USA
                  </li>
                  <li>
                    <i class="lni lni-phone-set"></i> +88 556 88545
                  </li>
                  <li>
                    <i class="lni lni-envelope"></i> support@ayroui.com
                  </li>
                </ul>
              </div>
              {/* <!-- End Footer Contact --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      
    </footer>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Footer);
