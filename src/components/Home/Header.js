import OscarSanchez from "../../assets/img/OscarSanchez.png";
import { Typewriter } from 'react-simple-typewriter'
import aws from "../../assets/img/aws-logo.png";
import Django from "../../assets/img/Django.png";
import Python from "../../assets/img/Python.png";
import Docker from "../../assets/img/Docker.png";
import Git from "../../assets/img/Git.png";
import GitHub from "../../assets/img/Github.png";
import Post from "../../assets/img/Post.png";
import html from "../../assets/img/HtmlCss.png";
import Agile from "../../assets/img/Agile.png";

function Header() {
    
    return (
    <section class="section about-section" id="about">
      <div class="container" id="container-about">
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
              <h4 class="theme-color" style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal' }} id='Typewriter'> 
                Life is simple{' '}
                <div style={{ color: '#236e89', fontWeight: 'bold' }}>
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
          <div class="container row pb-2 pt-5">
              <a>
              <img class="p-3" src={Python} alt="Python_Logo" width="100" height="100" />
              <img class="p-3" src={Django} alt="Django_Logo" width="100" height="100" />
              <img class="p-3 pe-0" src={Post} alt="Post_Logo" width="135" height="100" />
              <img class="p-3 ps-0" src={aws} alt="Aws_Logo" width="120" height="100" />
              <img class="p-3" src={Docker} alt="Docker_Logo" width="100" height="100" />
              <img class="p-3 pe-0" src={Git} alt="Git_Logo" width="100" height="95" />
              <img class="p-0" src={GitHub} alt="GitHub_Logo" width="120" height="90" />
              <img class="p-0" src={html} alt="html_Logo" width="130" height="80" />
              <img class="p-0" src={Agile} alt="Agile_Logo" width="150" height="85" />
              </a>
              
          </div>
        </div>
      </div>
    </section>
  );
}
export default Header;
