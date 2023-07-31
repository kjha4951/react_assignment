//import logo from './logo.svg';
//import { Kom } from './first';
import "./index.css";

function App() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={require("./image/ALogo.png")} alt="logo1" />
        </div>
        <ul className="firstul">
          <li>
            <a href="https://www.atlassian.com/software/jira">Products</a>
          </li>
          <li>
            <a href="https://www.atlassian.com/solutions/work-management">
              For Team's
            </a>
          </li>
          <li>
            <a href="https://www.atlassian.com/migration/assess/journey-to-cloud">
              Support
            </a>
          </li>
        </ul>
        <button class="try-free-btn">Try free</button>
        <ul class="secondul">
          <li>Buy Now </li>
          <li>
            <a href="https://start.atlassian.com/">Login</a>{" "}
          </li>
        </ul>
      </nav>
      {/* <hr></hr> */}

      <div className="container">
        <div className="content">
          <h1>Move work forward</h1>
          <p>Atlassian helps teams work smarter and faster, together.</p>
        </div>
       
          <button>Learn More</button>
        
        <div className="image1">
          <img src={require("./image/ov.png")} alt="backgroundimage" width='1000px' height='600vh' />
        </div>
      </div>
    </div>
  );
}

export default App;
