import Creation from "./components/Creation";
import CreationsDesktop from "./components/CreationsDesktop";
import Footer from "./components/Footer";
import Headr from "./components/Header";
import Interactive from "./components/Interactive";
import ShowCase from "./components/ShowCase";
function App() {
  return (
    <div className="App">
      <Headr />
      <ShowCase />
      <Interactive />
      <Creation />
      <CreationsDesktop />
      <Footer />
    </div>
  );
}

export default App;
