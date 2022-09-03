import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Resource/css/styles.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Alert from "./Components/Main/Alert/Alert";
import Nav from "./Components/Nav/Nav";
import First from "./Components/Main/First/First";
import Second from "./Components/Main/Second/Second";
import Third from "./Components/Main/Third/Third";
import Fourth from "./Components/Main/Fourth/Fourth";
import Fifth from "./Components/Main/Fifth/Fifth";
import Sixth from "./Components/Main/Sixth/Sixth";
import Footer from "./Components/Footer/Footer";
import Move from "./Components/Main/Move/Move";
// Project Console: https://console.firebase.google.com/project/apple-clone-e2be1/overview
// Hosting URL: https://apple-clone-e2be1.web.app
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Alert></Alert>
      <First></First>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth></Fifth>
      <Sixth></Sixth>
      <Move></Move>
      <Footer></Footer>
    </div>
  );
}

export default App;
