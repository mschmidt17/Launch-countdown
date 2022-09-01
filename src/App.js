import './App.css';
import Countdown from './components/Countdown.js';
import Footer from './components/Footer.js';



export default function App() {
  return (
    <>
      <h1>We're launching soon</h1>

      <div className="countdown">
        <Countdown />
      </div>

      <div className="social">
        <Footer />
      </div>

      <div className="hills" />
    </>
  );
}

