import { useState } from 'react'

const InvestCalc = () => {
  const [investment, setInvestment] = useState(0)
  const multipleWith = 5

  const handleButtonOne = (e) => {
    setInvestment(e.target.value * multipleWith)
  }

  const handleButtonTwo = (e) => {
    setInvestment(e.target.value * multipleWith)
  }

  const handleButtonThree = (e) => {
    setInvestment(e.target.value * multipleWith)
  }

  const handleButtonFour = (e) => {
    setInvestment(e.target.value * multipleWith)
  }

  const handleButtonFive = (e) => {
    setInvestment(e.target.value * multipleWith)
  }

  const handleButtonSix = (e) => {
    setInvestment(e.target.value * multipleWith)
  }

  const handleButtonSeven = (e) => {
    setInvestment(e.target.value * multipleWith)
  }

  return (
    <div className='invest-calculator'>
      <div className='calculator-buttons'>
        <button value='1' onClick={handleButtonOne}>
          <span></span>
        </button>
        <button value='2' onClick={handleButtonTwo}>
          <span></span>
        </button>
        <button value='3' onClick={handleButtonThree}>
          <span></span>
        </button>
        <button value='4' onClick={handleButtonFour}>
          <span></span>
        </button>
        <button value='5' onClick={handleButtonFive}>
          <span></span>
        </button>
        <button value='6' onClick={handleButtonSix}>
          <span></span>
        </button>
        <button value='7' onClick={handleButtonSeven}>
          <span></span>
        </button>
      </div>

      <div className='calculator-value'>
        <span>{investment ? investment : '0'} ETH</span>
      </div>

      <button className='primary-btn'>Invest</button>
    </div>
  )
}

export default InvestCalc
