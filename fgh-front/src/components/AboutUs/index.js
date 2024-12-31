import { AboutCont, TextCont, MVCont, AHead, ADes } from "./styledComponents";
import Header from '../Header'

const AboutUs = (props) => (
    <AboutCont>
        <Header/>
        <TextCont>
              <MVCont>
                <AHead>
                    Mission
                </AHead>
                <ADes>
                    To inspire and empower individuals worldwide by providing a platform that fosters learning, 
                    earning, and growth. We are committed to bridging skill gaps, enabling financial independence, 
                    and supporting innovation through accessible opportunities and resources.
                </ADes>
              </MVCont>
              <MVCont>
                <AHead>
                    Vison
                </AHead>
                <ADes>
                    To become the leading global hub for talent development and opportunity creation. We envision 
                    a future where individuals and businesses seamlessly connect, thrive, and contribute to a world  
                    driven by collaboration, creativity, and sustainable progress.
                </ADes>
              </MVCont>
        </TextCont>
    </AboutCont>
)

export default AboutUs