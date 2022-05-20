import Connect from './components/Connect'
import InvestCalc from './components/InvestCalc'

const App = () => {
  return (
    <div className='section-banner'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Connect />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>
              <span>NFT</span>
              <span>R</span> <span>PRE</span>
              <span>SALE</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem optio ipsum, modi corrupti facilis fugiat sint dignissimos veritatis reiciendis aperiam doloremque eos quis magnam
              ipsam delectus quo. Illum doloremque sit eum nihil, est rem et.
            </p>
            <InvestCalc />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='text-box'>
              <h4>
                Accumulated WETH: <span>123456</span>
              </h4>
              <button className='primary-btn'>Claim</button>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='text-box'>
              <h4>
                Claimable RNM: <span>123456</span>
              </h4>
              <button className='primary-btn'>Claim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
