import React, {useState, useEffect} from "react";
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import axios from "axios";
import "./App.css";



function App() {
  const [photo,setPhoto] = useState();
  const [title,setTitle] = useState();
  const [para,setPara] = useState();
  const [date,setDate] = useState();
  
  
  useEffect(() =>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=ZbY6qySj1ZFZmgBdSIuQZbtu7cfTSa92i2bV5o36`)
    .then(res =>{
      console.log(res.data);
      setPhoto(res.data.hdurl);
      setTitle(res.data.title);
      setPara(res.data.explanation);
      setDate(res.data.date);
      }
    )
    .catch(err => {
      console.log('The Error is',err);
    })
    return () => {
      console.log("cleaning is done");
    }
  },[])

  return (
    <div className="App">
      <Header />
      <Hero title={title} photo={photo} para={para} date={date}  />
      <Footer />
      {/* <p>
         Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      
    </div>
  );
}

export default App;
