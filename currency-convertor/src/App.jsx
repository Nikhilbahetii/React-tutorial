import { useState } from 'react'
import { Inputbox } from './components'
import useCurrency from './hooks/currency'
// import './App.css'

function App() {
  const [amount, setamount] = useState(0)
  const [From, setFrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [convertAmt, setconvertAmt] = useState(0)

  const currencyinfo = useCurrency(From)

  const options = currencyinfo ? Object.keys(currencyinfo) : []
  const swap = () => {
    setFrom(To)
    setTo(From)
    setconvertAmt(amount)
    setamount(convertAmt)
  }
  const convert = () => {
    setconvertAmt(amount * currencyinfo[To])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Inputbox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={From}
                            onAmountChange={(amount) => setamount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Inputbox
                            label="To"
                            amount={convertAmt}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={To}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {From.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
