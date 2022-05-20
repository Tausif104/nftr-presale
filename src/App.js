import Connect from './components/Connect'
import InvestCalc from './components/InvestCalc'
import ColorImage from './img/colors-image.svg'

const App = () => {
  return (
    <div className='section-banner'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="connect-wrap">
              <img className='colors-image' src={ColorImage} alt='' />
              <Connect />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='big-title'>
              <span className='color1'>NFT</span>
              <span className='color2'>R</span> <span className='color3'>PRE</span>
              <span className='color4'>SALE</span>
            </h1>
            <p className='description'>
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
