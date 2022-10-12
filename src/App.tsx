import React, { useCallback, useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Comp1 } from './components/Comp1';
import { Comp2 } from './components/Comp2';
import { GlobalState } from './models/state';

function App() {
  const cat = 'https://www.zooplus.it/magazine/wp-content/uploads/2020/10/1-37-768x512.jpg';
  const dogs = 'https://manualefaidate.com/files/594/cagnolini_teneri.jpg';

  const [gState, setGState] = useState<GlobalState>({
    items: ['ciao', 'prova', 'notte', 'gatto'],
    pet: {img: cat}
  });

  const addItem = (label: string) => {
    gState.items.push(label);
    console.log(gState);
    setGState({...gState});
  }


  const togglePets = () => {
    const img = gState.pet.img === cat ? dogs : cat;
    gState.pet.img = img;
    setGState({...gState});
  }


  return (
    <div>
      <Comp1 items={gState.items} addItem={addItem}/>
      <Comp2 img={gState.pet.img}/>
      <button onClick={togglePets}>cambia</button>
    </div>
  )



  const [state, setState] = useState<number>(0);
  const [state2, setState2] = useState<number>(-10);
  

  // const square = () => {
  //   console.log('sqrt');
  //   const value = Math.sqrt(state);
  //   return value.toFixed(2);
  // }

  // const [square, setSquare] = useState<string>(Math.sqrt(state).toFixed(2));
  // useEffect(() => {
  //   console.log('sqrt');
  //   setSquare(Math.sqrt(state).toFixed(2))
  // }, [state]);

  // const square = useMemo(() => {
  //   console.log('sqrt');
  //   return Math.sqrt(state).toFixed(2)
  // }, [state]);

  let count = 0;

    const square = useCallback(() => {
    console.log('sqrt', count++);
    
    return Math.sqrt(state).toFixed(2)
  }, [state]);





  // return (
  //   <div>
  //     <h1>valore: {state}</h1>
  //     <h1>valore sqrt: {square()}</h1>
  //     <button onClick={() => setState(state + 1)}>+</button>
  //     <hr/>
  //     <h1>valore 2: {state2}</h1>
  //     <button onClick={() => setState2(state2 + 1)}>+</button>
  //   </div>
  // );
}

export default App;
