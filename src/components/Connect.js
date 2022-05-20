import { useState } from 'react'

const Connect = () => {
  const [connect, setConnect] = useState(false)

  const handleConnect = () => {
    if (connect === false) {
      setConnect(true)
    } else {
      setConnect(false)
    }
  }

  const handleLogout = () => {
    setConnect(false)
  }

  return (
    <div class="top-btn-wrap">
      {connect === true ? (
        <div className='logout'>
          <button onClick={handleLogout}>Logout</button>
          <span>0xAEC</span>
        </div>
      ) : (
        <button onClick={handleConnect}>Connect</button>
      )}
    </div>
  )
}

export default Connect
