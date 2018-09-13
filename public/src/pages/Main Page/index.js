import React, { Component } from 'react';

import MainPage from './components/MainPage';
import Button from '../../components/Button';

class MainPage extends Component {

    render() {
        return (
            <div>  
                I am the main page!

                <MainPage />
                <Button 
                    linkUrl="/login"
                    buttonText="Log In"
                    buttonColor="white"
                />
                <Button 
                    linkUrl="/signup"
                    buttonText="Sign Up"
                    buttonColor="cyan"
                />
            </div>
        )
     }
}

export default MainPage;

   