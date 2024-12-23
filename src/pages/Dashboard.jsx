import React, { useState, useEffect } from 'react'
import MainAppWrapper from '../components/MainAppWrapper'
import { Dialog, Transition } from "@headlessui/react";
import ProfileCheckModal from '../components/ProfileCheckModal';

const Dashboard = () => {
  const [profileCheckModal, setProfileCheckModal] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem("farcasterProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleSignInClick = () => {
    setProfileCheckModal(true);
  };

  return (
    <MainAppWrapper>
    <div className='dash-ctn w-[90vw] sm:w-[100%] md:w-[73vw]'>
        <div className="welcome-ctn flex justify-between items-center flex-wrap sm:flex-nowrap gap-4">
            <div className="welcome-text-ctn medium-gray-text flex flex-col">
                <h4>Welcome back, {profile?.displayName || 'Guest'}</h4>
                <p className=''>Here's an overview of your beats minted.</p>
            </div>

            <div className="welcome-btn flx" onClick={handleSignInClick}>
                {profile ? (
                    <div className="addy-ctn flx py-3" >
                        <p className="dot"></p>
                        <p className="addy">@{profile.username}</p>
                    </div>
                ) : (
                    <div className="addy-ctn flx py-3 hover:opacity-60" onClick={handleSignInClick}>
                        <p className="dot"></p>
                        <p className="addy">Connect Farcaster</p>
                    </div>
                )}
            </div>
        </div>

        <div className="cards-ctn flex flex-wrap sm:flex-nowrap gap-4 w-[70vw] sm:w-[73vw]">
            <div className="card-div overflow-hidden basis-full relative pt-[1.7vh] pb-[3vh] px-[2vw] sm:px-[1vw] first">
                <p className="card-text medium-gray-text">Total balance made</p>
                <p className="card-hero text-xs sm:text-lg leading-8 mb-3">0.0456 ETH</p>
                <p className='card-text flex text-xs absolute bottom-2'> <img src="./uparrow.svg" alt="up arrow" className='mr-2' /> 0.044ETH compared to last month</p>
            </div>
            <div className="card-div overflow-hidden basis-full relative pt-[1.7vh] pb-[3vh] px-[2vw] sm:px-[1vw]">
                <p className="card-text medium-gray-text">Total beats uploaded</p>
                <p className="card-hero mb-4">10</p>
                <p className='card-text text-xs flex absolute bottom-2'> <img src="./uparrow.svg" alt="up arrow" className='mr-2' /> 4 compared to last month</p>
            </div>
            <div className="card-div overflow-hidden basis-full relative pt-[1.7vh] pb-[3vh] px-[2vw] sm:px-[1vw]">
                <p className="card-text medium-gray-text">Total beats purchased</p>
                <p className="card-hero mb-4">10</p>
                <p className='card-text text-xs flex absolute bottom-2'> <img src="./uparrow.svg" alt="up arrow" className='mr-2' /> 4 compared to last month</p>
            </div>
        </div>

        <div className="table-ctn w-[85vw] sm:w-[73vw]">
            <table>
                <thead>
                    <tr>
                        <th className='pr-6 w-[10vw]'>
                            <div className='my-6'>Beats</div>
                        </th>
                        <th className='pr-6 w-[10vw]'>Asking price</th>
                        <th className='pr-6 w-[10vw]'>Floor price</th>
                        <th className='pr-6 w-[10vw]'>Number of sales</th>
                        <th className='pr-6 w-[10vw]'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='pic-td flx flex-wrap sm:flex-nowrap pr-6 w-[10vw]'>
                            <img src="./monkey.png" alt="beat cover" className='w-[10vw] sm:w-auto' />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>24</td>
                        <td className='pr-6 w-[10vw]'>09 Jun, 2024</td>
                    </tr>
                    {/* Rest of the table rows remain the same */}
                    <tr>
                        <td className='pr-6 w-[10vw]'>
                            <div>
                                <button className='btns'>Previous</button>
                                <button className='btns'>Next</button>
                            </div>
                        </td>
                        <td className='pr-6 w-[10vw]'></td>
                        <td className='pr-6 w-[10vw]'></td>
                        <td className='pr-6 w-[10vw]'></td>
                        <td className='pr-6 w-[10vw]'><p className="lastp">Page 1 of 10</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <ProfileCheckModal
        closeModal={() => setProfileCheckModal(false)}
        modalOpen={profileCheckModal}
    />
    </MainAppWrapper>
  )
}

export default Dashboard