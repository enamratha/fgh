import { CiMail, CiLinkedin } from "react-icons/ci";

// import image from '../../../public/Group 259.jpg'
import Header from "../Header";
import './index.css'

const OurTeam = () => (
    <>
        <Header/>
        <div className="profile-card-container">
        <h1>Meet Our Crew</h1>
        <div className="profile-card">
            <div className="profile-image">
            <img
                src="https://s3-alpha-sig.figma.com/img/08b0/bc3b/2a3aa12f8886f3093a7bc65b4b927ae7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V18X7-GzlGjyrzXAQg3sXk81ZEgtkDoXrcByqLlfHPWRYy7PojkqvBjcCPeWBy1Pn2DNNMot23lzQqk2oAa3xP36dEO8UPjBWL6qMfDIO90mCFREK5J0KqIcherCBcMDajvpL0I1g5yesBBjVTOu2cwfYqNhlancLP3iHbGaN8YFNOOniNk2Rl91yqR465e2IwbREQWbMUK05aPZqrlTSjp3eD5~5wq8SFquKQc0CbRExrQHZhRtYsKODP4ladTtBersDCv~2GhaZ~61Bc9P06JXI-WHoxDtZvBThJ-4ZIIA6jN4cxHTsOgwYhaOA4bcyJMc4BG1VpZckjzHoDv~7Q__"
                alt="Prasad M"
                className="founder-img"
            />
            </div>
            <div className="profile-details">
            <h2>Prasad.M | <span>Founder & CEO</span></h2>
            <p>
                Prasad, the visionary CEO of FGH, combines over 13 years of expertise in EHS, ESG,
                and Sustainability with a passion for leveraging technology to make a difference.
                He founded FGH with a mission to empower students, professionals, and individuals
                from all walks of life to earn and learn through collaborative efforts. His
                commitment to fostering opportunities and creating a connected digital platform has
                been the cornerstone of FGH's success.
            </p>
            <p>
                Prasad is a creative powerhouse who loves being a YouTuber and digital creator.
                When he's not building platforms, you'll find him binge-watching movies, dancing to
                catchy tunes, or penning heartfelt poetry!!
            </p>
            <div className="profile-bottom">
                <blockquote>
                    "At FGH, we strive to create opportunities that blend passion and purpose. Together,
                    let's redefine how we learn and earn in the digital age."
                </blockquote>
                <div className="founder-contact">
                    <h5>Contact</h5>
                    <div className="profile-contact">
                        <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                        <CiLinkedin className="icicon-our-teamon"/>
                        </a>
                        <a href="mailto:creator.prasad@gmail.com">
                        <CiMail className="icon-our-team"/>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="team-imgs">
            <img src='https://res.cloudinary.com/dzhzfdugz/image/upload/v1735646034/y9evdoqkbvfiyjtelv5h.jpg' alt="namratha"/>
            <img src='https://res.cloudinary.com/dzhzfdugz/image/upload/v1735646153/eidbwjjxcjcvann8zzhi.jpg' alt="susheel"/>
            <img src='https://res.cloudinary.com/dzhzfdugz/image/upload/v1735646160/q4ibisntgcllgavkgftr.jpg' alt="manichandana"/>
        </div>
    </>
)

export default OurTeam