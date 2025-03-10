import React, { Component } from "react";
import Social from "../components/Social";
import './Home.css'; // เพิ่มการ import ไฟล์ CSS

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/475743607_1881205749073462_1834883215585019369_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=B7sHGfXr2VYQ7kNvgF7182w&_nc_oc=AdjvCxzjL3Ib6Cbms3ZM67KgyK2z9r0Pd1q78PkjKDspkCl5H0qc0wS9j7tWWCrrIkiVmPvHaf5jkMaJMTBcW6ki&_nc_zt=23&_nc_ht=scontent.fbkk5-7.fna&_nc_gid=AqSMs3pxy_ULrDaLKSP2WBW&oh=00_AYHdvdYAwq8LsOa2QauVo8e528PJ6bhqvK-BaYt4SFji0Q&oe=67D4C3F2"
                    alt="profile" className="profilepic" />
                <p className="typingeffect">Hi, I'm Nitipoom</p>
                
                <Social />
            </div>
        )
    }
}

export default Home;