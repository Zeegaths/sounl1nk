import React, { useState, useEffect } from "react";
import MainAppWrapper from "../components/MainAppWrapper";
import ProfileCheckModal from "../components/ProfileCheckModal";
import { useNavigate } from "react-router-dom";

const RapBattles = () => {
  const [profileCheckModal, setProfileCheckModal] = useState(false);
  const [profile, setProfile] = useState(null);
  const [battles, setBattles] = useState([]);
  const [previousBattles, setPreviousBattles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfile = localStorage.getItem("farcasterProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

    const mockBattles = [
      { id: 1, title: "Freestyle Frenzy", poster: "./rap2.jpg", timeRemaining: "2h 15m", participants: 8 },
      { id: 2, title: "Lyricists Showdown", poster: "./rap1.jpg", timeRemaining: "1d 4h", participants: 12 },
      { id: 3, title: "Mic Masters", poster: "./rap2.jpg", timeRemaining: "3d 12h", participants: 10 },
    ];
    setBattles(mockBattles);

    const mockPreviousBattles = [
      { id: 1, title: "Battle Royale", winner: "MC Blaze" },
      { id: 2, title: "Rap Clash", winner: "Lyric King" },
      { id: 3, title: "Vibe Showdown", winner: "Flow Master" },
    ];
    setPreviousBattles(mockPreviousBattles);
  }, []);

  const handleSignInClick = () => {
    setProfileCheckModal(true);
  };

  const handleJoinBattle = (battleId) => {
    alert(`Joined battle with ID: ${battleId}`);
  };

  const handleCreateBattle = () => {
    navigate("/add-battle");
  };

  return (
    <MainAppWrapper>
      <div className="dash-ctn w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="main-content flex-1">
          {/* Welcome Section */}
          <div className="welcome-ctn flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="welcome-text-ctn medium-gray-text flex flex-col">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">Welcome back, {profile?.displayName || "Guest"}</h4>
              <p className="text-sm sm:text-base lg:text-lg">Check out the latest rap battles or create your own!</p>
            </div>
            <div className="welcome-btn flex justify-center sm:justify-end w-full sm:w-auto">
              {profile ? (
                <div className="addy-ctn flex py-2 px-4 border border-[#50c9f7] rounded-lg hover:opacity-80">
                  <p className="dot mr-2"></p>
                  <p className="addy">@{profile.username}</p>
                </div>
              ) : (
                <div
                  className="addy-ctn flex py-2 px-4 border border-[#50c9f7] rounded-lg hover:opacity-80"
                  onClick={handleSignInClick}
                >
                  <p className="dot mr-2"></p>
                  <p className="addy">Connect Farcaster</p>
                </div>
              )}
            </div>
          </div>

          {/* Active Battles Header */}
          <div className="battles-header mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="section-title neon-text text-lg sm:text-xl lg:text-2xl">Active Rap Battles</h3>
            <button className="create-btn px-4 py-2 rounded-md neon-button" onClick={handleCreateBattle}>
              Create New Battle
            </button>
          </div>

          {/* Active Battles Grid */}
          <div className="battles-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-6">
            {battles.map((battle) => (
              <div
                key={battle.id}
                className="battle-card bg-gradient-to-b from-[#2E3A52] to-[#394661] p-4 rounded-lg text-white shadow-lg flex flex-col"
              >
                <img
                  src={battle.poster}
                  alt={battle.title}
                  className="w-full h-40 lg:h-48 object-cover rounded-lg mb-4 border border-[#41557B]"
                />
                <h4 className="text-lg font-bold mb-2">{battle.title}</h4>
                <p className="text-sm mb-2">Time Remaining: <span className="neon-text">{battle.timeRemaining}</span></p>
                <p className="text-sm mb-4">Participants: {battle.participants}</p>
                <button
                  className="join-btn px-4 py-2 w-full rounded-md neon-button"
                  onClick={() => handleJoinBattle(battle.id)}
                >
                  Join Battle
                </button>
              </div>
            ))}
          </div>

          {/* Previous Battles Section */}
          <div className="previous-battles mt-12">
            <h3 className="section-title neon-text text-lg sm:text-xl lg:text-2xl mb-6">Previous Battles</h3>
            <div className="battle-history-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {previousBattles.map((battle) => (
                <div
                  key={battle.id}
                  className="battle-history-card bg-gradient-to-b from-[#2E3A52] to-[#394661] p-4 rounded-lg text-white shadow-lg"
                >
                  <div className="icon-section flex justify-center items-center mb-4">
                    <div className="icon-wrapper w-12 h-12 bg-[#50c9f7] rounded-full flex justify-center items-center shadow-md">
                      <img src="./rap1.jpg" alt="Winner Icon" className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="battle-details text-center">
                    <h4 className="text-lg font-bold mb-2">{battle.title}</h4>
                    <p className="text-sm text-[#50c9f7]">Winner: <span className="font-medium">{battle.winner}</span></p>
                  </div>
                  <button
                    className="details-btn px-4 py-2 mt-4 w-full rounded-md neon-button"
                    onClick={() => alert(`Details for ${battle.title}`)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="leaderboard lg:w-1/3 lg:mt-0 mt-12 bg-gradient-to-b from-[#1A1D2E] to-[#2E3A52] p-6 rounded-lg shadow-md">
          <h3 className="section-title neon-text text-lg sm:text-xl lg:text-2xl mb-4">Leaderboard</h3>
          <ul className="leaderboard-list flex flex-col space-y-3">
            <li className="leaderboard-item flex justify-between items-center bg-gradient-to-r from-[#2E3A52] to-[#394661] p-4 rounded-md">
              <span className="text-white font-bold">1. MC Blaze</span>
              <span className="text-[#50c9f7] font-medium">500 Votes</span>
            </li>
            <li className="leaderboard-item flex justify-between items-center bg-gradient-to-r from-[#2E3A52] to-[#394661] p-4 rounded-md">
              <span className="text-white font-bold">2. Lyric King</span>
              <span className="text-[#50c9f7] font-medium">450 Votes</span>
            </li>
            <li className="leaderboard-item flex justify-between items-center bg-gradient-to-r from-[#2E3A52] to-[#394661] p-4 rounded-md">
              <span className="text-white font-bold">3. Flow Master</span>
              <span className="text-[#50c9f7] font-medium">420 Votes</span>
            </li>
          </ul>
        </div>
      </div>

      <ProfileCheckModal closeModal={() => setProfileCheckModal(false)} modalOpen={profileCheckModal} />
    </MainAppWrapper>
  );
};

export default RapBattles;
