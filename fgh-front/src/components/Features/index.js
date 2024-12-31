import Header from '../Header'
import FeatureCard from '../FeatureCard'

import { FeatureCont, FeaturesLi, FHead } from './styledComponents'
// import './index.css'

const features = [
    {
        title: "Earn While You Learn",
        description: "Showcase your skills and connect with freelance oppurtunities to start earning today.",
        action: "Start Earning Now",
        cat: 1,
    },
    {
        title: "Participate & Win",
        description: "SCompete in skill-based contests and quizzes for rewards, recognition, and growth.",
        action: "Join Contests",
        cat:2,
    },
    {
        title: "Software Solutions",
        description: "Leverage our expertise in web and app development, design, and tech services.",
        action: "Explore Solutions",
        cat: 2,
    },
    {
        title: "Boost & Build",
        description: "Elevate your brand's online presence with tailored marketing and branding services.",
        action: "Boost Your Brand",
        cat: 3,
    }, 
]

const Features = () => (
    <>
        <Header/>
        <FeatureCont>
            <FHead>Discover Our Core Features</FHead>
            <FeaturesLi className='features-list'>
                {features.map((feature) => (
                    <FeatureCard key={feature.title} feature={feature}/>
                ))}
            </FeaturesLi>
        </FeatureCont>
    </>
)

export default Features