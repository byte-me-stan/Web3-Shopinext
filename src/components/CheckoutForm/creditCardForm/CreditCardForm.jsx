import React, {useState} from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import "./creditCard.css";


const CreditCardForm = () => {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
  return (
    <div className="creditCardContainer">
        <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focus}/>
        <form className="creditCardForm">
            <input 
                type="tel" 
                name="number" 
                value={number}
                className="number"
                placeholder="Card Number" 
                onChange={e => setNumber(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
            />
            <input 
                type="text" 
                name="name" 
                value={name}
                className="name"
                placeholder="Name" 
                onChange={e => setName(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
            />
            <div className="creditShortInput">
                <input 
                    type="text" 
                    name="expiry" 
                    value={expiry}
                    className="inputs"
                    placeholder="MM/YY Expiry" 
                    onChange={e => setExpiry(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input 
                    type="tel" 
                    name="cvc" 
                    value={cvc}
                    className="inputs"
                    placeholder="CVC" 
                    onChange={e => setCvc(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
            </div>
        </form>
    </div>
  )
}

export default CreditCardForm;