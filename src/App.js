import React , {useState, useEffect} from 'react';
import './App.css' ;
import Blastoise from './images/blastoise.png' ;
import Charizard from './images/charizard.png' ;
import Pokemon from './Pokemon';



const App = () => {

    // react hooks
    const [blastoiseHP, setBlastoisedHP ] = useState(110)
    const [charizardHP, setCharizardHP ] = useState(120)

    // Random Num generate
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

    
    // Functions attack
    const blastoiseAttack = ()=>
    {
        const num1 = getRandomNumber(15, 30);
        setCharizardHP(charizardHP- num1)
    }

    
    const charizardAttack = ()=>
    {
        const num1 = getRandomNumber(15, 30);
        setBlastoisedHP(blastoiseHP-num1)
    }

    //  Win Condition
    const container = document.querySelector('.container')

    if(charizardHP<=0)
    {
        container.innerHTML = "Blastoise Wins"
    }

    if(blastoiseHP<=0)
    {
        container.innerHTML = "Charizard Wins"
    }

  return (
    
    <div className='container'>
        
        <Pokemon name = "Blastoise" img={Blastoise} hp={blastoiseHP} attack={blastoiseAttack}/>
        <Pokemon name = "Charizard" img={Charizard} hp= {charizardHP} attack={charizardAttack} /> 

    </div>
  )
}

export default App
