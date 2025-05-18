import { useState } from "react"
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import{ GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {
  const [show,setShow] = useState(false);
    return (
        <nav>
            <div className="logo">Nitin</div>
        <div className={show? "navLinks showmenu" :"navLinks"}>
            <div className="links">
                {
                    data[0].navbarLinks.map(ele=>{
                        return(
                            <Link to={ele.link}
                            key={ele.id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            
                            >{ele.title}</Link>
                        )
                    })
                }
            </div>
            <button className="menuBtn"> Our Menu</button>
        </div>
        <div className="hamburger" onClick={()=>setShow(!show)}> <GiHamburgerMenu/></div>
        </nav>
        
  )
}
export default Navbar