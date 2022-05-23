import { useState } from 'react'

const InvestCalc = () => {
  const [investment, setInvestment] = useState(0)

  const multipleWith = 5

  const removeClass = () => {
    const buttons = document.querySelectorAll('.invest-calculator-inner button')
    for (const button of buttons) {
      button.classList.remove('active')
    }
  }

  const handleButtonOne = (e) => {
    setInvestment(e.target.value * multipleWith)
    removeClass()
    e.target.className = 'active'
  }

  const handleButtonTwo = (e) => {
    setInvestment(e.target.value * multipleWith)
    removeClass()
    e.target.className = 'active'
  }

  const handleButtonThree = (e) => {
    setInvestment(e.target.value * multipleWith)
    removeClass()
    e.target.className = 'active'
  }

  const handleButtonFour = (e) => {
    setInvestment(e.target.value * multipleWith)
    removeClass()
    e.target.className = 'active'
  }

  const handleButtonFive = (e) => {
    setInvestment(e.target.value * multipleWith)
    removeClass()
    e.target.className = 'active'
  }

  const handleButtonSix = (e) => {
    setInvestment(e.target.value * multipleWith)
    removeClass()
    e.target.className = 'active'
  }

  const handleButtonSeven = (e) => {
    setInvestment(e.target.value * multipleWith)
    removeClass()
    e.target.className = 'active'
  }

  return (
    <div className='invest-calculator'>
      <div className='invest-calculator-inner'>
        <div className={`active-${investment} calculator-buttons`}>
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
          <span>
            {investment ? investment : '0'} <span className='currency'>ETH</span>
          </span>
        </div>
      </div>
      <button className='primary-btn'>Invest</button>
    </div>
  )
}

export default InvestCalc
