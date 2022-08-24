import { Link } from "react-router-dom";
import './App.css';
function App() {
   return <>
      <ul>
         <li>
            <Link className="Link" to="Home">HOME</Link>
         </li>
         <li>
            <Link className="Link" to="About">ABOUT</Link>
         </li>
         <li>
            <Link className="Link" to="Profile">PROFILE</Link>
         </li>
      </ul>
   </ >
};
export default App;        