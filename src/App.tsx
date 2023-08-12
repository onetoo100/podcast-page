import "./scss/app.scss";
import Benefits from "./components/Benefits";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Plans from "./components/Plans";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Container />
      <Benefits />
      <Statistics />
      <Plans />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
