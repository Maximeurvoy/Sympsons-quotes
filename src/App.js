import React from 'react';
import './App.css';
import QuoteCard from './Components/QuoteCard/QuoteCard';
import Lamp from './Components/Lamp/Lamp'
import Working from './Components/Working/Working';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Lamp on />
      <Lamp />
      <Working/>
       <QuoteCard 
       characterDirection='Right' 
       character='Milhouse Van Houten' 
       image='https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002' 
       quote='Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?'/>
       <QuoteCard 
       characterDirection='Left' 
       character=	"Chief Wiggum" 
       image=	"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FChiefWiggum.png?1497567511716" 
       quote="Hey, I'm the chief here. Bake him away, toys."/>
       <QuoteCard  
       characterDirection='Right' 
       quote="I believe the children are the future... Unless we stop them now!" 
       character="Homer Simpson"
       image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939" />

      </header>
    </div>
  );
}

export default App;


