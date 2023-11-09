import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        if (val === "euro"){
            val = "€";
        }
        else if (val === "dollar"){
            val = "$";
        }
        else if (val === "ruppee"){
            val = "₹";
        }
        else{
            val = "£";
        }
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            });
    }
    
    return (
        <div className='alert alert-secondary'>
                    <label for="currency">Currency: </label>
                    <select name="currency" id="currency" onChange={(event) => changeCurrency(event.target.value)}>
                        <option defaultValue="pound">£ Pound</option>
                        <option value="dollar">$ Dollar</option>
                        <option value="euro">€ Euro</option>
                        <option value="ruppee">₹ Ruppee</option>
                    </select>
        </div>
    );
};


export default Currency;
