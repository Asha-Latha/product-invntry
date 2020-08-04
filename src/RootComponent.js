import React from 'react';
import Login from './component/contentcontainr/login/login';
import Header from './component/header/header';
import Footer from './component/footer/footer'

class RootComponent extends React.Component {
 
    render() { 
        return ( 
            <div><Header></Header>
            <Login></Login>
            <Footer></Footer></div>

         );
    }
}
 
export default RootComponent;
