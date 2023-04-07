import "./App.css";
import img from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="image" src={img} />

        <div className="text">
          <p className="heading">
            Improve your front-end skills by building projects
          </p>
          <br />
          <p className="body-text">
            Scan the QR-code to visit the Frontend Mentor and take your coding
            skils to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
