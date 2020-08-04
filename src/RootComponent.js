import React from 'react';
import Login from './component/spa/contentcontainr/login/login';
import Header from './component/spa/header/header';
import Footer from './component/spa/footer/footer'

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
