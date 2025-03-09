import React, {Component} from "react";

import Soical from "../components/Soical";
import ReactTypingEffect from "react-typing-effect";

class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <img src="https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/470221891_1849087948951909_1695415707582409675_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Cc3B7Jw2L9kQ7kNvgEr62jS&_nc_oc=Adj19trxQgmnZFeAXCmOc-wFhicY6MQ1TXu7afzpWqPv-kNQqG8IRlVQ0tVuF-VFJyE&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=AK8pcPmilWYwDIgtD5Xvd7s&oh=00_AYHQOzwdftiOFzhXNQOgIlToG8xJdu7Ees0sncHy4-TCWQ&oe=67D31764"
                alt="profile" className="profilepic"/>
                <p className="typingeffect">I'm Student</p>
                <Soical/>
            </div>
        )
    }
}

export default Home;