
import React from 'react';

var listOfImages =[];

class App extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('./images/', false, /\.(png|jpe?g|webp|svg)$/));
    }
    render(){
        return(

          <div className='site'>
            <navbar>
              <div className='nav'>
                <div className='logo'>
                  <h1>AI Image Gallery</h1>
                </div>
                <div className='provider'><a href='https://nafisbd.com' target='_blank'><h3>By <h1>NafisBD_</h1></h3> </a></div>
              </div>
            </navbar>

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
        )
    }
}
export default App;