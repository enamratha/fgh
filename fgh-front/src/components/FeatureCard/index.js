import {FetureCard,TextContainer, FcHead, FcDes, Dot, Dots, Btn3} from './styledComponents'

const  FeatureCard = (props) => {
    const {feature} = props 
    const {title, description, action,cat} = feature
    return (
        <FetureCard cat={cat}>
            <Dots cat={cat}>
            <Dot>.</Dot>
            <Dot>.</Dot>
            <Dot>.</Dot>
            </Dots>
            <TextContainer>
                <FcHead cat={cat}>{title}</FcHead>
                <FcDes cat={cat}>{description}</FcDes>
                <Btn3 cat={cat}>{action}</Btn3>
            </TextContainer>
        </FetureCard>
    )
}

export default FeatureCard