
import React from 'react';
import { Routes, Route, } from "react-router-dom";
// import background from './background';

// import Navbar from './Navbar';
// import ImgGallery from './ImgGallary';
import Midjourney from './Midjourney';
import Lexica from './Lexica';
import Home from './Home';
import Extra from './Extra';



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
            <Routes>
              {/* <Switch> */}
                <Route path='/' element={<Home />} />
                <Route path='/midjourney' element={<Midjourney />} />
                <Route path='/lexica' element={<Lexica />} />
                <Route path='/extra' element={<Extra />} />
              {/* </Switch> */}
            </Routes>
            {/* <Navbar />
            <ImgGallery /> */}
            
            
          </div>
        )
    }
}
export default App;