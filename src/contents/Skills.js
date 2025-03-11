import React, { Component } from "react";
import './Skills.css'; // Import CSS file for styling
import htmlLogo from '../assets/html.png'; // Adjusted logo import path
import cssLogo from '../assets/css.png'; // Adjusted logo import path
import jsLogo from '../assets/js.png'; // Adjusted logo import path
import reactLogo from '../assets/react.png'; // Adjusted logo import path
import nodeLogo from '../assets/node.png'; // Adjusted logo import path
import phpLogo from '../assets/php.png'; // Adjusted logo import path
import mysqlLogo from '../assets/mysql.png'; // Adjusted logo import path
import javaLogo from '../assets/java.png'; // Adjusted logo import path
import cppLogo from '../assets/cpp.png'; // Adjusted logo import path
import githubLogo from '../assets/github.png'; // Adjusted logo import path

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'frontend': [
                { name: 'HTML', logo: htmlLogo },
                { name: 'CSS', logo: cssLogo },
                { name: 'JavaScript', logo: jsLogo },
                { name: 'React JS', logo: reactLogo }
            ],
            'backend': [
                { name: 'Node JS', logo: nodeLogo },
                { name: 'PHP', logo: phpLogo },
                { name: 'MySQL', logo: mysqlLogo }
            ],
            'languages': [
                { name: 'Java', logo: javaLogo },
                { name: 'C++', logo: cppLogo }
            ],
            'tools': [
                { name: 'GitHub', logo: githubLogo }
            ]
        }
    }

    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Skills</h1>
                {Object.keys(this.state).map((category, index) => (
                    <div key={index} className="skills-category">
                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        <div className="popup">
                            {this.state[category].map((skill, index) => (
                                <div key={index} className="popup-item">
                                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Skills;