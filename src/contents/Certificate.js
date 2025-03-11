import React, { Component } from "react";
import './Certificate.css'; // Import CSS file for styling

class Certificate extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Certificates</h1>
                <div className="certificate-grid">
                    <div className="certificate-item">
                        <img src="imgs/image1.jpg" alt="Certificate 1" className="certificate-image" />
                        <h3>เข้าร่วมกิจกรรม<br/>"งานชุมนุมลูกเสือวิสามัญอาชีวศึกษา ครั้งที่ 20" <br/>วันที่ 2 - 8 มีนาคม 2562</h3>
                    </div>
                    <div className="certificate-item">
                        <img src="imgs/image2.jpg" alt="Certificate 2" className="certificate-image" />
                        <h3>เข้าร่วมกิจกรรม<br/>"กิจกรรมตอบคำถาม วันคริสต์มาสกลุ่มสาระวิชา ภาษาอังกฤษวิทยาลัยเทคนิคสระบุรี" <br/>วันที่ 24 ธันวาคม 2564</h3>
                    </div>
                    <div className="certificate-item">
                        <img src="imgs/image3.jpg" alt="Certificate 3" className="certificate-image" />
                        <h3>เข้าร่วมกิจกรรม "การแข่งขันการจัดค่ายพักแรม ระดับชั้น ม.1-ม.3" <br/>--ได้รับรางวัลระดับเหรียญเงิน-- <br/>วันที่ 11-13 กันยายน 2560</h3>
                    </div>
                    <div className="certificate-item">
                        <img src="imgs/image4.jpg" alt="Certificate 4" className="certificate-image" />
                        <h3>เข้าร่วมกิจกรรม<br/> "งานชุมนุมลูกเสือเฉลิมพระเกียรติ สมเด็จพระนางเจ้าสิริกิติ์พระบรมราชินีนาถ องค์อุปถัมภ์ของคณะลูกเสือแห่งชาติในโอกาษฉลองพระชนมพรรษา 7 รอบ 84 พรรษา"
                        <br/>วันที่ 23 - 27 มีนาคม 2560</h3>
                    </div>
                    <div className="certificate-item">
                        <img src="imgs/image5.jpg" alt="Certificate 5" className="certificate-image" />
                        <h3>เข้าร่วมกิจกรรมจิตอาสา<br/> "ในการปฏิบัตรหน้าที่ สารวัตนักเรียนประจําปีการศึกษา 2559" <br/>วันที่ 28 กุมภาพันธ์ 2560</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Certificate;