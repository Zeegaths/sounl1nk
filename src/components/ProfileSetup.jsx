import React, { useState } from 'react'
import LoadingButton from './LoadingButton';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom"; 
import { useForm } from "react-hook-form";
import MainAppWrapper from './MainAppWrapper';
import { AuthKitProvider, SignInButton } from '@farcaster/auth-kit';

const ProfileSetup = ({ modalOpen, closeModal }) => {
    const [currentStep, setCurrentStep] = useState("first")
    const [showRolePicker, setRolePicker] = useState(false)
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState(() => {
      // Retrieve the profile from localStorage if available
      const savedProfile = localStorage.getItem("farcasterProfile");
      return savedProfile ? JSON.parse(savedProfile) : { role: "", farcaster_user: "", farcaster_image: "", genres: [] };
    });

    const schema = yup.object({
        role: yup.string(),
        farcaster_id: yup.string(),
        genres: yup.mixed(),
      });
    
      const {
        handleSubmit,
        register,
        reset,
        trigger,
        formState: { errors, dirtyFields },
      } = useForm({ defaultValues: { role: "", farcaster_id: "", genres: [] }, resolver: yupResolver(schema), criteriaMode: "all" });

      async function onSubmit(data) {
        console.log("submitting", data);
        setLoading(true);
        try {
          console.log("jfjf")
        } catch (err) {
          console.log(err)
        }
        setLoading(false);
      }
       function updateProfile(data) {
        console.log("farcaster", data);

        localStorage.setItem("farcasterProfile", JSON.stringify(data));

        setRolePicker(true)
      }
      const navigate = useNavigate(); // Initialize the navigation hook

      const handleContinueToRoot = () => {
        navigate("/"); // Navigate to the root route
      };

  return (
    <>
        <div className=''>
          <div className='flex gap-10 items-center px-10 py-5 w-full border-b'>
            <span>
            <svg width="191" height="56" viewBox="0 0 191 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.71025 46V45.872C5.69692 42.5867 7.19025 39.6 7.19025 36.912C7.19025 36.1867 7.08358 35.4613 6.87025 34.736C6.69958 34.0107 6.35825 33.136 5.84625 32.112C5.37692 31.088 4.71558 29.7653 3.86225 28.144C2.49692 25.5413 1.81425 23.0667 1.81425 20.72C1.81425 19.1413 2.17692 17.456 2.90225 15.664C3.62758 13.8293 4.69425 12.1227 6.10225 10.544H18.0703V10.672C16.4916 12.4213 15.3609 14 14.6783 15.408C13.9956 16.7733 13.6543 18.1813 13.6543 19.632C13.6543 20.6987 13.8463 21.744 14.2303 22.768C14.6143 23.792 15.2329 25.1147 16.0863 26.736C17.2383 28.8267 18.0276 30.5333 18.4543 31.856C18.9236 33.136 19.1583 34.4587 19.1583 35.824C19.1583 37.6587 18.8596 39.3867 18.2623 41.008C17.6649 42.5867 16.6836 44.2507 15.3183 46H2.71025Z" fill="#304FEC"/>
            <path d="M30.12 30.6H33.96C33.96 32.392 35.24 33.64 37.32 33.64C39.592 33.64 40.68 32.52 40.68 31.24C40.68 27.56 30.28 29.48 30.28 22.472C30.28 19.4 33 16.68 37.32 16.68C41.32 16.68 44.04 19.4 44.04 23.08H40.36C40.36 21.288 39.24 20.2 37.32 20.2C35.4 20.2 34.28 21.32 34.28 22.44C34.28 25.928 44.68 24.072 44.68 31.4C44.68 34.28 41.768 37.16 37.32 37.16C32.84 37.16 30.12 34.44 30.12 30.6ZM56.345 20.36C53.145 20.36 50.425 23.08 50.425 26.92C50.425 30.76 53.145 33.48 56.345 33.48C59.545 33.48 62.265 30.76 62.265 26.92C62.265 23.08 59.545 20.36 56.345 20.36ZM56.345 16.68C61.625 16.68 66.105 21.16 66.105 26.92C66.105 32.68 61.625 37.16 56.345 37.16C51.065 37.16 46.585 32.68 46.585 26.92C46.585 21.16 51.065 16.68 56.345 16.68ZM68.9825 29.32V16.84H72.8225V29.32C72.8225 31.88 74.4225 33.48 76.9825 33.48C79.5425 33.48 81.1425 31.88 81.1425 29.32V16.84H84.9825V29.32C84.9825 33.8 81.6225 37.16 76.9825 37.16C72.3425 37.16 68.9825 33.8 68.9825 29.32ZM88.9863 37V16.84H92.3463L101.306 29.96V16.84H105.146V37H101.786L92.8263 23.88V37H88.9863ZM113.139 33.32H115.699C118.899 33.32 121.779 30.408 121.779 26.92C121.779 23.432 118.899 20.52 115.699 20.52H113.139V33.32ZM109.299 37V16.84H115.699C120.979 16.84 125.619 21.48 125.619 26.92C125.619 32.36 120.979 37 115.699 37H109.299ZM128.674 37V16.84H132.514V33.32H141.954V37H128.674ZM144.518 37V16.84H148.358V37H144.518ZM152.518 37V16.84H155.878L164.838 29.96V16.84H168.678V37H165.318L156.358 23.88V37H152.518ZM172.83 37V16.84H176.67V25.8L183.39 16.84H187.87L180.35 26.76L188.35 37H183.87L176.67 27.88V37H172.83Z" fill="#304FEC"/>
            </svg>
            </span>

            <div className='text-[#304FEC] flex gap-10'>
              <div className='flex gap-2 bg-[#E4E8FD] border p-2 rounded-2xl items-center'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 16.75V15.25C16 14.4544 15.6839 13.6913 15.1213 13.1287C14.5587 12.5661 13.7956 12.25 13 12.25H7C6.20435 12.25 5.44129 12.5661 4.87868 13.1287C4.31607 13.6913 4 14.4544 4 15.25V16.75" stroke="#304FEC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 9.25C11.6569 9.25 13 7.90685 13 6.25C13 4.59315 11.6569 3.25 10 3.25C8.34315 3.25 7 4.59315 7 6.25C7 7.90685 8.34315 9.25 10 9.25Z" stroke="#304FEC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>  
              <span>Profile</span>
              </div>
              <div className='flex gap-2 bg-[#E4E8FD] border p-2 rounded-2xl items-center'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.75 14.5C7.75 15.7426 6.74264 16.75 5.5 16.75C4.25736 16.75 3.25 15.7426 3.25 14.5C3.25 13.2574 4.25736 12.25 5.5 12.25C6.74264 12.25 7.75 13.2574 7.75 14.5ZM7.75 14.5V4.75L16.75 3.25V13M16.75 13C16.75 14.2426 15.7426 15.25 14.5 15.25C13.2574 15.25 12.25 14.2426 12.25 13C12.25 11.7574 13.2574 10.75 14.5 10.75C15.7426 10.75 16.75 11.7574 16.75 13Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <span>Genres</span>
              </div>
              <div className='flex gap-2 bg-[#E4E8FD] border p-2 rounded-2xl items-center'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.25 14.5V10C3.25 8.20979 3.96116 6.4929 5.22703 5.22703C6.4929 3.96116 8.20979 3.25 10 3.25C11.7902 3.25 13.5071 3.96116 14.773 5.22703C16.0388 6.4929 16.75 8.20979 16.75 10V14.5" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.75 15.25C16.75 15.6478 16.592 16.0294 16.3107 16.3107C16.0294 16.592 15.6478 16.75 15.25 16.75H14.5C14.1022 16.75 13.7206 16.592 13.4393 16.3107C13.158 16.0294 13 15.6478 13 15.25V13C13 12.6022 13.158 12.2206 13.4393 11.9393C13.7206 11.658 14.1022 11.5 14.5 11.5H16.75V15.25ZM3.25 15.25C3.25 15.6478 3.40804 16.0294 3.68934 16.3107C3.97064 16.592 4.35218 16.75 4.75 16.75H5.5C5.89782 16.75 6.27936 16.592 6.56066 16.3107C6.84196 16.0294 7 15.6478 7 15.25V13C7 12.6022 6.84196 12.2206 6.56066 11.9393C6.27936 11.658 5.89782 11.5 5.5 11.5H3.25V15.25Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Accounts</span>
              </div>
            </div>

          </div>

          <div className='mt-20 max-w-lg mx-auto'>

          {currentStep === "first" &&
            <div>
              <div>
                <div className='text-center'>
                  <h3 className='text-3xl font-bold'>Farcaster Signin</h3>
                  <p className='mt-4'>This will fetch your farcaster profile and this is how others will find you and your beats</p>
  
            <div className='mt-6'>
            <SignInButton
            className="flex"
                  onSuccess={({username, fid, bio, displayName, pfpUrl}) =>
                    updateProfile({username, fid, bio, displayName, pfpUrl})
                  }
                  />
            </div>
                </div>
              </div>
  
              {showRolePicker &&
              <div className='mt-10'>
                <div className='text-center'>
                  <h3 className='text-3xl font-bold'>Pick an Option</h3>
                  <p className='mt-4'>More information about you</p>
  
                <div className='mt-3'>
                <button className='market-ctn-btn bg-[#394661] border border-[#41557B]'
                onClick={handleContinueToRoot}>
                  Continue
                </button>
                </div>
                <div className='mt-8'>
                <button className='market-ctn-btn bg-[#394661] border border-[#41557B]'>
                  Create Profile
                </button>
                </div>
                    </div>
                  </div>
                  };
            </div>
                };

              </div>
        </div>
    </>
  )
}

export default ProfileSetup