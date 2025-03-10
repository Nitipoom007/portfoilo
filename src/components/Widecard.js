import React, { Component } from "react";

class Widecard extends Component {
    render() {
        return (
            <div className="widecard">
                <div className="widecard-img">
                    <img src={this.props.logo} alt={`${this.props.where} logo`} />
                </div>
                <div className="widecard-content">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.where}</h4>
                    <p>{this.props.form} - {this.props.to}</p>
                    <p>GPAX: {this.props.GPAX}</p>
                </div>
            </div>
        )
    }
}

export default Widecard;