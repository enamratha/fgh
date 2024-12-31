import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home'
import Features from './components/Features';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs';
import OurTeam from './components/OurTeam';

import HeaderContext from './contexts/HeaderContext';


class App extends Component {
  state = {
    activeTab :'',
  }

  onChangeTab = id => {
    this.setState({activeTab: id})
  }

  render(){
    const {activeTab} = this.state  
       return(
      <HeaderContext.Provider value={{activeTab, changeTab: this.onChangeTab}}>
        <Switch className="font">
        <Route exact path="/" component={Home}/>
        <Route path="/features" component={Features}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/contact-us" component={ContactUs}/>
        <Route path="/our-team" component={OurTeam}/>
        <Redirect to="/"/>
      </Switch>
      </HeaderContext.Provider>
    )
  }
}


export default App;
