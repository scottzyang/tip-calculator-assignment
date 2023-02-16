import { useState } from "react";
import './InputForm.css';
import Display from './Display'

function InputForm() {
  const [bill, setBill] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(1)
  const [people, setPeople] = useState(1)
  return(
    <div className="container">
      <h1>Tip Calculator</h1>
      <div className="tip-amount-container">
        <form>
          <div>
            <label for="bill" className="bill-label">Bill Amount: </label>
            <input 
              id='bill'
              type="number"
              step='.01'
              value={bill}
              onChange={(e) => setBill(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label for="tip" className="tip-label">Tip Percentage: </label>
            <input 
              id='tip'
              type="number"
              value={tipPercentage}
              onChange={(e) => setTipPercentage(parseFloat(e.target.value))}
            />
          </div>
          <div>        
            <label for="people" className="people-label">Number of People: </label>
              <input 
                id='people'
                type="number"
                value={people}
                onChange={(e) => setPeople(parseFloat(e.target.value))}
              />
          </div>

        </form>
        <Display tipPercentage={tipPercentage} bill={bill} people={people} />
      </div>
    </div>
  )
}

export default InputForm
