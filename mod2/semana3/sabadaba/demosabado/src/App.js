import React, {Component} from 'react';
import './App.css';
import Perro from './components/Card'
import userD from './assets/images/userDef.png'
import { Footer } from './components/Footer'
import { Fondo } from './components/Fondo';
class App extends Component{
  state={
    user:{
      name:"Juan B",
      age:"22"
    },
    card:{
      name:"Mónica",
      age:23,
      img:userD
    },
    title:"Esto es un demo"
  }
  render(){
    const {user,title,card} = this.state
    return (
      <div className="App">
        <h1>{title}</h1>
        <div>
          <span>Nombre: {user.name}</span>
          <span>Edad: {user.age}</span>
        </div>

        <Perro
          img={card.img}
          name={card.name}
          age={card.age}
        />
        <Footer/>
       <Fondo>
          <div>
            <h1>Dylan</h1>
          </div>
       </Fondo>
       <Fondo>
          <div>
            <h1>esto es un componente con hijo</h1>
          </div>
          <div>
            <h1>esto es un componente con hijo2</h1>
          </div>
          <div>
            <h1>esto es un componente con hijo3</h1>
          </div>
          <div>
            <h1>esto es un componente con hijo4</h1>
          </div>
       </Fondo>
      </div>
    );
  }
}

export default App;
