import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import AboutMe from "containers/pages/AboutMe";
import Projects from "containers/pages/Projects";
import Blog from "containers/pages/Blog";
import NewsLetters from "containers/pages/NewsLetters";
import Contact from "containers/pages/Contact";


function App() {
  return (
    <Provider store={store}>
      
      <Router>
        <Routes>
          {/* {Error Display} */}
          <Route path="*" element={<Error404 />} />

          {/* {Home} */}
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/NewsLetters" element={<NewsLetters />} />
          <Route path="/Contact" element={<Contact />} />




        </Routes>
      </Router>
    
    </Provider>    
  );
}

export default App;
