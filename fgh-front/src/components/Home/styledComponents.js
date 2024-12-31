import styled from "styled-components"
import { FiSearch } from "react-icons/fi";

export const HomeCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    background-image: url('https://res.cloudinary.com/dzhzfdugz/image/upload/v1735276341/wvaqlfbhler1shfrsubq.jpg');
    background-size: cover;
    text-align: center;
`

export const InEl = styled.input `
    outline: none;
    width: 60vw;
    height: 40px;
    border: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 7px;
    padding-left: 17px;
`
export const Head = styled.h1 `
    font-size: 50px;
    font-weight: 500;
    // margin-bottom: 60px;
    color: #f2f2f2;
    margin: 10px;
`

export const HD = styled.p `
    color: #d9d9d9;
    margin: 10px;
    margin-top: 40px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;
`

export const Btn1 = styled.button `
    background-color: #d9d9d9;
    padding: 5px;
    border: 0;
    height: 43px;
    width: 100px;
    border-radius: 20px;
    margin: 10px;
    font-size: 16px;
    font-weight: 500;
`

export const Btn2 = styled(Btn1) `
    background-color: #4379d5;
`  

export const Search = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #4379d5;
    width: 40px;
    border-radius:10px;
    @media screen and (min-width:768px){
        margin-left: -20px;
        color: #ffffff;
    }
    cursor: pointer;
`

export const SearchIcon = styled(FiSearch)`
    font-size: 15px;
`
export const SearchContainer = styled.div `
    display: flex;
    justify-content: center;
    allign-items: center;
    margin: 50px;
`