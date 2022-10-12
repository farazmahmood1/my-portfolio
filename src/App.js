import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Buttons from './components/Buttons';
function App() {

  (function () {
    [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function () {
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
      })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    })
  })();

  return (
    <div className='main-content'>
      <HomePage />
      <About />
      <Buttons />
    </div>
  );
}

export default App;
