import homeIcon from "../../assets/images/buy-home.png";
import menuIcon from "../../assets/images/menu.png";
import ButtonMain from "../buttonNav/buttonNav";
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="NavContainer">
      <ButtonMain src={homeIcon} alt='Home button function'/>
      <h1>Todo por 2 sopes</h1>
      <ButtonMain src={menuIcon} alt='Menu button function'/>
    </div>
  );
}
