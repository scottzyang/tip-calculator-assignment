import { useState } from "react";
import Display from './Display'

function InputForm() {
  const [bill, setBill] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(1)
  const [people, setPeople] = useState(1)
  return(
    <>
      <h1>Tip Calculator</h1>
      <form>
        <label for="bill">Bill Amount: </label>
        <input 
          id='bill'
          type="number"
          step='.01'
          value={bill}
          onChange={(e) => setBill(parseFloat(e.target.value))}
        />
        <br/>
        <label for="tip">Tip Percentage: </label>
        <input 
          id='tip'
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(parseFloat(e.target.value))}
        />
        <br/>
        <label for="people">Number of People: </label>
        <input 
          id='people'
          type="number"
          value={people}
          onChange={(e) => setPeople(parseFloat(e.target.value))}
        />
      </form>
      <Display tipPercentage={tipPercentage} bill={bill} people={people} />
    </>
  )
}

export default InputForm
