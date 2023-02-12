
import React from 'react';
// import background from './background';

import Navbar from './Navbar';
import ImgGallery from './ImgGallary';


// var listOfImages =[];

class App extends React.Component{
    // importAll(r) {
    //     return r.keys().map(r);
    // }
    // componentWillMount() {
    //     listOfImages = this.importAll(require.context('./images/', false, /\.(png|jpe?g|webp|svg)$/));
    // }
    render(){
        return(

          <div className='flex flex-col h-screen'>
            <Navbar />
            <ImgGallery />
          </div>
        )
    }
}
export default App;