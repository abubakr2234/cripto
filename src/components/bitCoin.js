import React, { useState, useEffect, useCallback } from 'react';
import InputBase from './InputBase';

const Converted = ({ data, onConverted }) => {
    const { name, rate } = data;
    const INIT = { amount: 0, converted: 0 };
    const [exchange, setExchange]= useState(INIT);
    const [Saved, setSaved] = useState([]);

    useEffect(() => {
        setExchange({
            ...exchange,
            converted: Number(exchange.amount / rate).toFixed(4)
        })
    }, [name]);

    useEffect(() => {
        onConverted(transactions);
    }, [transactions]);

    const generateId = (prefix) => Math.random().toString(36).replace('0.', prefix || '');


    const handleChange = ({ target: { value, name } }) => {
        const val = Number(value.trim());
        const converted = (val / rate).toFixed(4); 
    
    

        setExchange({
            [name]: val,
            converted,
        });
        
    };

    const makeConvert = useCallback ((e) => {
        e.preventDefualt();
        if (!exchange.amount) {
            alert('Please enter amount');
        }

        const payload = {
            ...exchange,
            name,
            id: generateId('tran-id_'),
        }

        setTransactions([...transactions, payload]);

    }, [exchange, transactions]);

    console.log('trans', transactions);

    

    return (
        
       <form omSubmit={makeConvert} className="form">
           <div className="input-group mb-3">
                <InputBase  name="amount" textLabel="USD" onChange={handleChange} />
                <i className="fas fa-exchange-alt" />
                <InputBase value={exchange.converted} disabled textLabel={name} />
           </div>
           <input className="btn btn-primary" type="submit" value="Save" />
       </form>
    )
};

export default bitCoin;
