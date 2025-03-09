import React, {Component} from "react";
import Navitems from "./Navitems";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    render() {
        return(
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/" activec={this.activeitem}></Navitems>
                    <Navitems item="About" tolink="/about" activec={this.activeitem}></Navitems>
                    <Navitems item="Education" tolink="/education" activec={this.activeitem}></Navitems>
                    <Navitems item="Skills" tolink="/skills" activec={this.activeitem}></Navitems>
                    <Navitems item="Contact" tolink="/contact" activec={this.activeitem}></Navitems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;