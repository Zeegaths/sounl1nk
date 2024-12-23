import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import MainAppWrapper from '../components/MainAppWrapper'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Dashboard /> */}
    {/* <Marketplace /> */}
    {/* <Matchmaking /> */}

    <div className='layout-ctn'>
      <MainAppWrapper>
        <div className="body-ctn">
          <Outlet />
        </div>
      </MainAppWrapper>
    </div>
    </>
  )
}

export default Home
