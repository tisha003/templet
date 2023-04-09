import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contect from './Components/Contact/Contect';
import Specker from './Components/Event_speckers/Specker';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import Heroimg from './Components/Heroimg/Heroimg';
import Hotel from './Components/Hotel/Hotel';
import Schedule from './Components/Schdule/Schedule';
import Sponsor from './Components/Sponsor/Sponsor';
import Tickets from './Components/Tickets/Tickets';
import Venus from './Components/Venus/Venus';

// import Hedaercomp from './Components/Header/Hedaercomp';

function App() {
  return (
    <>
      {/* <Hedaercomp/> */}
      <div>
        
        <Header />
        <Heroimg />
        <Specker />
        <Schedule />
        <Venus />
        <Hotel />
        <Gallery />
        <Sponsor />
        <Tickets />
        <Contect />
        <Footer />
      </div>
    </>
  );
}

export default App;
