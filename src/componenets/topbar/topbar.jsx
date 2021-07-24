import "./topbar.scss"
//import MailOutlineIcon from './@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';

export default function Topbar({ menuOpen, setMenuOpen }) {
    // function setMenuOpen(menuOpen){
    //     menuOpen=!menuOpen;
    // }
    return (
        <div className={"Topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><h1>Me.</h1></a>
                    <div className="itemContainer">
                    <CallIcon />
                    <span><a href="tel:+91-9589671011">+91 9589671011</a></span>
                    <MailOutlineIcon />
                    <span><a href= "mailto:chandrasayan15@gmail.com">chandrasayan15@gmail.com</a></span>
                    
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
