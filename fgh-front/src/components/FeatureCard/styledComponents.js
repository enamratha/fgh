import styled from 'styled-components'

export const FetureCard = styled.li `
    display: flex;
    flex-direction: column;
    background-color : ${props => {
        switch(props.cat){
            case 1:
                return '#ffffff';
            case 2:
                return '#4379d5';
            case 3:
                return '#181e27';
            default:
            return '#d9d9d9'
        }
    }};
    box-shadow: ${props => props.cat === 1 || props.cat === 3? '7px 10px 7px lightgrey;' : "" };
    margin: 14px;
    padding: 15px;
    border-radius: 15px;
    width: 26vw;
    height: 32vh;
`
export const Dot = styled.p `
    font-size:2px;
    margin: 0;
    margin-right: 15px;
    
    `
export const Dots = styled.div `
    text-decoration: underline dotted 9px;
    display: flex;
    text-decoration-color: ${props => {
        switch(props.cat){
            case 1:
                return "#4c9cfd";
            case 2:
                return "#181e27";
            case 3:
                return '#d9d9d9';
            default:
                return 'black';
        }
    }};
`

export const TextContainer = styled.div `
    align-self:center;
    padding: 6%;
    padding-top: 8%;
`

export const Btn3 = styled.button `
    cursor: pointer;
    align-self: flex-start;
    border: 0;
    padding: 7px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 7px;
    background-color:${props => {
        switch(props.cat){
            case 1:
                return "#4c9cfd";
            case 2:
                return "#181e27";
            case 3:
                return '#ffffff';
            default:
                return 'white';
        }
    }};
    color: ${props => {
        switch(props.cat){
            case 1:
                return "#ffffff";
            case 2:
                return "#f2f2f2";
            case 3:
                return '#181e27';
            default:
                return 'white';
        }
    }};
    font-size: 12px;
    font-weight: 800;
    height: 35px;
`
export const FcHead = styled.h2 `
    font-weight: 500;
    font-size: 32px;
    margin: 0;
    color: ${props => {
        switch(props.cat){
            case 1:
                return "#181e27";
            case 2:
                return "#ffffff";
            case 3:
                return '#ffffff';
            default:
                return '#d9d9d9';
        }
    }};
`

export const FcDes = styled.p `
    color: ${props => {
        switch(props.cat){
            case 1:
                return "#748494";
            case 2:
                return "#ffffff";
            case 3:
                return '#ffffff';
            default:
                return '#d9d9d9';
        }
    }};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    width: 85%;
`