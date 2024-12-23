import React, { useEffect, useState } from 'react';
import { getSession, SignInButton } from '@farcaster/auth-kit';

const FarcasterFrameWrapper = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the session if a method like getSession exists
    const fetchSession = async () => {
      try {
        const userSession = await getSession(); // Replace with appropriate method
        setSession(userSession);
      } catch (error) {
        console.error('Error fetching session:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  if (loading) {
    return <div>Loading Farcaster Frame...</div>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-xl font-bold">Sign in to Farcaster</h2>
        <SignInButton className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" />
      </div>
    );
  }

  return <>{children}</>;
};

export default FarcasterFrameWrapper;
