import { Component } from 'react'

import Header from '../Header'
import {HomeCont, InEl, Head, HD, Btn1, Btn2, SearchIcon, SearchContainer, Search} from './styledComponents'

class Home extends Component{
    state = {
        searchIn : '',
    }

    onchangeSearchInput = (event) => {
        this.setState({searchIn: event.target.value})
    }

    render(){
        const {searchIn} = this.state
        return (
            <div>
                <Header/>
                <HomeCont className='home-container'>
                    <div className='intro-card'>
                        <Head>Find, Grow, Hustle</Head>
                        <HD>Learn, earn, and showcase your skills. Unlock opppurtunities with contests, projects,
                            and digital <br/>solutions. start your success journey today
                        </HD>
                        <SearchContainer>
                        <InEl 
                            onChange= {this.onchangeSearchInput}
                            value = {searchIn}
                            placeholder='Search for jobs, contests, or services' 
                            type="search"/>
                        <Search>
                                <SearchIcon/>
                        </Search>
                        </SearchContainer>
                    </div>
                    <div>
                        <Btn1>Sign up</Btn1>
                        <Btn2>Log in </Btn2>
                    </div>
                </HomeCont>
            </div>
        )
    }
}
export default Home