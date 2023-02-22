import OscarSanchez from "../../assets/img/OscarSanchez.png";
import { Typewriter } from 'react-simple-typewriter'

function Header() {
    
    return (
    <section class="section about-section" id="about">
      <div class="container">
        <div class="row align-items-center justify-content-around flex-row-reverse">
          <div class="col-lg-6">
            <div class="about-text">
              <h3 class="dark-color">Do some awsome stuff with me.</h3>
              <h4 class="theme-color">UI / UX Designer &amp; Web Developer</h4>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions.
              </p>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
              <div class="btn-bar">
                <a class="px-btn theme" href="#">
                  View Works
                </a>
                <a class="px-btn theme-t" href="#">
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 text-center">
            <div class="about-img ">
              <img class="rounded-circle"
                src={OscarSanchez}
                alt="CV-Image"
                width="260"
                height="260"

              ></img>
              <h4 class="theme-color" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}> 
                Life is simple{' '}
                <div style={{ color: '#198754', fontWeight: 'bold' }}>
                <Typewriter
                  words={[' BackEnd Developer', ' Python', ' Django', ' Code', ' Enjoy','Repeat!']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
                </div>  
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Header;
