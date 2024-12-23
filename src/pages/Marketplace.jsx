import React, { useState } from 'react';
import MainAppWrapper from '../components/MainAppWrapper';
import { useNavigate } from "react-router-dom";

const MarketPlace = () => {
  const [cat, setCat] = useState("Afrobeats");
  const genres = ["Hip-hop/rap", "Alternative", "Reggae", "R&B", "Deep house", "Progressve house", "Drum & Bass", "Rock", "Electronic"];
  const albums = [
    {
      song_name: "Feelings",
      subname: "Inscription #45376",
      amount: "0.02 ETH",
      time: "2hrs ago",
    },
    {
      song_name: "Feelings",
      subname: "Inscription #45376",
      amount: "0.02 ETH",
      time: "2hrs ago",
    },
    {
      song_name: "Feelings",
      subname: "Inscription #45376",
      amount: "0.02 ETH",
      time: "2hrs ago",
    },
    {
      song_name: "Feelings",
      subname: "Inscription #45376",
      amount: "0.02 ETH",
      time: "2hrs ago",
    },
    {
      song_name: "Feelings",
      subname: "Inscription #45376",
      amount: "0.02 ETH",
      time: "2hrs ago",
    },
    {
      song_name: "Feelings",
      subname: "Inscription #45376",
      amount: "0.02 ETH",
      time: "2hrs ago",
    },
    
    // ... more albums
  ];

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/beat-upload");
  };

  return (
    <MainAppWrapper>
      <div className="market-ctn px-4 sm:px-6 lg:px-8">
        <div className="welcome-ctn flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="welcome-text-ctn text-center sm:text-left medium-gray-text">
            <h4 className="text-xl sm:text-2xl font-bold">Marketplace</h4>
            <p className="mt-2 text-sm sm:text-base">Listings on the marketplace</p>
          </div>
          <button className="market-ctn-btn bg-[#394661] text-white py-2 px-4 rounded-md border border-[#41557B] hover:bg-[#2e3a52]" onClick={handleNavigate}>
            Create a listing
          </button>
        </div>

        <div className="slide-ctn flex w-full flex-wrap gap-4 mb-6">
          <div className="slide flx items-center px-3 py-2 bg-[#EDEEF2] rounded-md">
            <img src="./sort-icon.svg" alt="Sort" className="mr-2" />
            <span>Filter</span>
          </div>
          {genres.map((genre) => (
            <div
              key={genre}
              className={`slide p-2 flex items-center px-3 py-2 rounded-md cursor-pointer ${
                cat === genre ? 'bg-[#394661] text-white' : 'bg-[#EDEEF2]'
              }`}
              onClick={() => setCat(genre)}
            >
              <span>{genre}</span>
            </div>
          ))}
        </div>

        <div className="items-ctn grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <div
              key={index}
              className="card-ctn bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mokey-div-ctn bg-[url('./monkey-alone.png')] bg-cover bg-center h-40 flex justify-center items-center relative">
                <img
                  src="./monkey-play.png"
                  alt="Play"
                  className="opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-4">
                <p className="feelings text-lg font-medium mb-1">{album.song_name}</p>
                <p className="small-gray-text text-sm text-gray-500 mb-3">{album.subname}</p>
                <hr className="small-rule border-gray-200 mb-3" />
                <div className="band-ctn flex justify-between items-center text-sm">
                  <p className="font-semibold text-gray-800">{album.amount}</p>
                  <div className="flex items-center gap-1 text-gray-500">
                    <img src="./clock.svg" alt="Time" className="w-4 h-4" />
                    <p>{album.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainAppWrapper>
  );
};

export default MarketPlace;