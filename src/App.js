
import Header from "./components/navbar.jsx";
import Landingpage from "./components/Landingpage/Landingpage.jsx";
import Maincontent from "./components/Maincontent/Maincontent.jsx";
import Dishes from "./components/Sampledishes/Sampledishes.jsx";
import Page2 from "./components/Page2/Page2.jsx";
import Timer from "./components/Clientcount/Clientcount.jsx";
import Page3 from "./components/Page3/Page3.jsx";
import { Card } from "./components/checkComponent/Card.jsx";
// import Props from "./components/Props/Props.jsx";
import Mainprops from "./components/Mainprops/Mainprops.jsx";
import checkImg from "./components/Images/bg_2.webp"
import Speciality from "./components/Speciality/Speciality.jsx";
import Slideshow from "./components/Slider/Slider.jsx";
// import logo from './logo.svg';
import Mainchief from "./components/Mainchief/Mainchief.jsx";
import Bookingbanner from "./components/Bookingbanner/Bookingbanner.jsx";
import Booking from "./components/Booking/Booking.jsx";
import './App.css';
function App() {
  const datas = "this is heading"
  return (
    <div className="App">


      <Landingpage />
      <Maincontent />
      <Header />
      <Dishes />
      <Page2 />
      <Timer />
      <Page3 name="Services" services="Catering Services" />


      <Mainprops />
      <Speciality />
      <Page3 name="Chef" services="Our Master chef" />
      <Mainchief />
      <Bookingbanner />
      <Booking />




      {/* <Card heading="heading" img={checkImg} para="fsjdafkljsdal;kfjskldafj;sklajdfklasjdfkljsdalkfsjda" btnName="click here" btnColor="red"/> */}






    </div>
  );
}

export default App;
