import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
import Feed from './pages/Feed.jsx';
import MarketPlace from './pages/Marketplace.jsx';
import GlobalProvider from './context/Global/GlobalContext.jsx';
import Matcher from './pages/Matcher.jsx';
import ProfileSetup from './components/ProfileSetup.jsx';
import { AuthKitProvider } from '@farcaster/auth-kit';
import "@farcaster/auth-kit/styles.css";
import RapBattles from './pages/RapBattles.jsx';
import AddBattle from './pages/AddBattle.jsx';
import BeatUploadForm from './pages/BeatUploadForm.jsx';
import { optimism } from 'wagmi/chains';

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/profile-setup", element: <ProfileSetup /> },
  { path: "/feed", element: <Feed /> },
  { path: "/beats-market", element: <MarketPlace /> },
  { path: "/match-beats", element: <Matcher /> },
  { path: "/rap-battles", element: <RapBattles /> },
  { path: "/add-battle", element: <AddBattle /> },
  { path: "/beat-upload", element: <BeatUploadForm /> },
]);

const config = {
  relay: "https://relay.farcaster.xyz",
  rpcUrl: "https://mainnet.optimism.io",
  domain: "localhost:3001",
  siweUri: "localhost:3001/dashboard",
};

const App = () => {
  return (
    <AuthKitProvider config={config}>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </AuthKitProvider>
  );
};

export default App;
