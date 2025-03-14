import React, {useId} from 'react'

function Inputbox({
    label, amount, onAmount, onCurrency, currencyopt = [], selectcurrency = "usd", amountDisable = false, currencyDisable = false, className = ""
}) {
    const amountinputid = useId()
    return (
        <>
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountinputid} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountinputid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                     onChange={(e) => onAmount && onAmount(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange={(e) => onCurrency && onCurrency(e.target.value)}
                    disabled= {currencyDisable}
                >
                    
                       
                            {currencyopt.map((currency) => (
                                <option key = {currency} value={currency}>
                                {currency}
                                </option>
                            ))}
                        
                
                </select>
            </div>
        </div>
        </>
    )
}

export default Inputbox;