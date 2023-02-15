import React from 'react'

import './index.css'
import Navbar from './Navbar';

var listOfImages =[];

class Lexica extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('./images/Lexica', false, /\.(png|jpe?g|webp|jfif|svg)$/));
    }

    render() {
        return (
            <>
                <Navbar />
                <div className='site bg-fixed flex-1 overflow-y-auto p-5 bg-cover bg-no-repeat'>
                    <background />
                    
            
                    <div className='main'>
                        <div className='masonry'>
                            {
                            listOfImages.map(
                                    (image, index) =>    (
                                    <main>
                                        <article className='mItems'>
                                        <img key={index} src={image} alt="info"></img>
                                        </article>           
                                    </main>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </>
          )
    }
  
}

export default Lexica