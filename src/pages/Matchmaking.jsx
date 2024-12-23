import React, { useState } from 'react';
import FilterComp from '../components/filter';
import MainAppWrapper from '../components/MainAppWrapper';

const Matchmaking = () => {

    const [options, showOptions] = useState(false)
  return (
    <MainAppWrapper>
    <div className='market-ctn'>
        <div className="welcome-ctn grid grid-cols-2">
            <div className="welcome-text-ctn medium-gray-text">
                <h4>Match-making</h4>
                <p>Here are some accounts related to you.</p>
            </div>
            <button className='market-ctn-btn'>
                Create a listing
            </button>
        </div>

        <div className="slide-ctn flx">
            <div className="slide flx filter-div" onClick={() => {showOptions(!options)}}>
                <img src="./sort-icon.svg" alt="" />
                <span>Filter</span>
            </div>
            {options && <FilterComp />}
            <div className="slide selected">
                <img src="./check-icon.svg" alt="" />
                <span>Afrobeats</span>
            </div>
            <div className="slide">
                <span>Hip-hop/rap</span>
            </div>
            <div className="slide">
                <span>Alternative</span>
            </div>
            <div className="slide">
                <span>Reggae</span>
            </div>
            <div className="slide">
                <span>R&B</span>
            </div>
            <div className="slide">
                <span>deep house</span>
            </div>
            <div className="slide">
                <span>progressive house</span>
            </div>
            <div className="slide">
                <span>drum & bass</span>
            </div>
        </div>

        <div className="items-ctn flx">
            <div className="card-ctn">
                <img src="./dj1.png" alt="" className='monkey-img' />
                <p className="feelings">Dj Spinall</p>
                <p className="small-gray-text">Afrobeats</p>
            </div>
            <div className="card-ctn">
                <img src="./dj2.png" alt="" className='monkey-img' />
                <p className="feelings">London</p>
                <p className="small-gray-text">Afrobeats</p>
            </div>
            <div className="card-ctn">
                <img src="./dj3.png" alt="" className='monkey-img' />
                <p className="feelings">Mustard</p>
                <p className="small-gray-text">Afrobeats</p>
            </div>
            <div className="card-ctn">
                <img src="./dj4.png" alt="" className='monkey-img' />
                <p className="feelings">Ozedikus</p>
                <p className="small-gray-text">Afrobeats</p>
            </div>
            <div className="card-ctn">
                <img src="./dj5.png" alt="" className='monkey-img' />
                <p className="feelings">Dj Spinall</p>
                <p className="small-gray-text">Afrobeats</p>
            </div>
            <div className="card-ctn">
                <img src="./dj6.png" alt="" className='monkey-img' />
                <p className="feelings">Dj Spinall</p>
                <p className="small-gray-text">Afrobeats</p>
            </div>
            <div className="card-ctn">
                <img src="./dj7.png" alt="" className='monkey-img' />
                <p className="feelings">Dj Spinall</p>
                <p className="small-gray-text">Afrobeats</p>
            </div>
            <div className="card-ctn">
                <img src="./dj8.png" alt="" className='monkey-img' />
                <p className="feelings">Dj Spinall</p>
                <p className="small-gray-text">Afrobeats</p>
            </div>
        </div>
    </div>
    </MainAppWrapper>
  )
}

export default Matchmaking