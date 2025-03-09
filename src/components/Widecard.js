import React,{Component} from "react";

class Widecard extends Component {
    render() {
        return(
            <div className="widecard">
                <div className="wide-con">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.Where}</h4>
                    <h4 className="secondtext">{this.props.form} - {this.props.to}</h4>
                    <h4 className="secondtext">GPAX = {this.props.GPAX}</h4>
                </div>
            </div>
        )
    }
}

export default Widecard;    