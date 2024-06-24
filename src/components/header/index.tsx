import "./styles.css";
import Logo from "../../assets/logo.png";


const links = ["Home", "Categories", "Services", "Discounts"]

const Header = () =>{

    return (
    
         <div className="Header_Nav">

            <img src={Logo} className="logo" />

            <ul className="nav">
                {links.map((link) =>(
                    <p key={link}>
                        <a href="#"> {link}</a>
                    </p>
                ) 
            )}
            </ul>
         </div>  
    
    )
}

export default Header