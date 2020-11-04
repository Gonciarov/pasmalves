import './App.css';
import React from 'react'
import Navigation from './navigation';
import Contact from './contact';
import About from './about';
import Header from './header';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const App = () => {

  
    return (
      <div>
        
        <Navigation />
        <Header />
        <About />
        <Contact />
        <AmplifySignOut />
      </div>
    )
}

export default withAuthenticator(App);

