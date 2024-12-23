import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/Global/GlobalContext";
import useMediaQuery from "@mui/material/useMediaQuery";

export const AppHeader = () => {
  const { state, dispatch } = React.useContext(GlobalContext);
  let { isOpen } = useMediaQuery("(max-width:768px)") ? false : state;
  let toggleOpen = (open) =>
    dispatch({
      type: "OPEN_SIDEBAR",
      payload: { isOpen: open },
    });

  function updatePath(path) {
    dispatch({
      type: "SETPATH",
      payload: {
        path: path,
      },
    });
  }

  return (
    <div
      className={`sidebar-holde bg-[#1A2335] h-full fixe ${
        !isOpen ? "open-na w-[15vw] md:w-[15vw]" : "w-[35vw] sm:w-[20vw]"
      }`}
    >
      <div className="scrollbar flex flex-col h-screen overflow-scroll pb-8 pt-4 px-3">
        <div className="self-center w-full max-w-[1408px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-full max-md:ml-0 mt-6 max-md:w-full no-underline">
              <div className="flex gap-2 items-center">
                {!isOpen ? (
                  <img
                    src="./s.png"
                    alt=""
                    onClick={() => toggleOpen(!isOpen)}
                    className="ml-3 cursor-pointer"
                  />
                ) : (
                  <svg
                    width="223"
                    height="56"
                    viewBox="0 0 223 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7103 46V45.872C21.6969 42.5867 23.1903 39.6 23.1903 36.912C23.1903 36.1867 23.0836 35.4613 22.8703 34.736C22.6996 34.0107 22.3583 33.136 21.8463 32.112C21.3769 31.088 20.7156 29.7653 19.8623 28.144C18.4969 25.5413 17.8143 23.0667 17.8143 20.72C17.8143 19.1413 18.1769 17.456 18.9023 15.664C19.6276 13.8293 20.6943 12.1227 22.1023 10.544H34.0703V10.672C32.4916 12.4213 31.3609 14 30.6783 15.408C29.9956 16.7733 29.6543 18.1813 29.6543 19.632C29.6543 20.6987 29.8463 21.744 30.2303 22.768C30.6143 23.792 31.2329 25.1147 32.0863 26.736C33.2383 28.8267 34.0276 30.5333 34.4543 31.856C34.9236 33.136 35.1583 34.4587 35.1583 35.824C35.1583 37.6587 34.8596 39.3867 34.2623 41.008C33.6649 42.5867 32.6836 44.2507 31.3183 46H18.7103Z"
                      fill="white"
                    />
                    <path
                      d="M46.12 30.6H49.96C49.96 32.392 51.24 33.64 53.32 33.64C55.592 33.64 56.68 32.52 56.68 31.24C56.68 27.56 46.28 29.48 46.28 22.472C46.28 19.4 49 16.68 53.32 16.68C57.32 16.68 60.04 19.4 60.04 23.08H56.36C56.36 21.288 55.24 20.2 53.32 20.2C51.4 20.2 50.28 21.32 50.28 22.44C50.28 25.928 60.68 24.072 60.68 31.4C60.68 34.28 57.768 37.16 53.32 37.16C48.84 37.16 46.12 34.44 46.12 30.6ZM72.345 20.36C69.145 20.36 66.425 23.08 66.425 26.92C66.425 30.76 69.145 33.48 72.345 33.48C75.545 33.48 78.265 30.76 78.265 26.92C78.265 23.08 75.545 20.36 72.345 20.36ZM72.345 16.68C77.625 16.68 82.105 21.16 82.105 26.92C82.105 32.68 77.625 37.16 72.345 37.16C67.065 37.16 62.585 32.68 62.585 26.92C62.585 21.16 67.065 16.68 72.345 16.68ZM84.9825 29.32V16.84H88.8225V29.32C88.8225 31.88 90.4225 33.48 92.9825 33.48C95.5425 33.48 97.1425 31.88 97.1425 29.32V16.84H100.983V29.32C100.983 33.8 97.6225 37.16 92.9825 37.16C88.3425 37.16 84.9825 33.8 84.9825 29.32ZM104.986 37V16.84H108.346L117.306 29.96V16.84H121.146V37H117.786L108.826 23.88V37H104.986ZM129.139 33.32H131.699C134.899 33.32 137.779 30.408 137.779 26.92C137.779 23.432 134.899 20.52 131.699 20.52H129.139V33.32ZM125.299 37V16.84H131.699C136.979 16.84 141.619 21.48 141.619 26.92C141.619 32.36 136.979 37 131.699 37H125.299ZM144.674 37V16.84H148.514V33.32H157.954V37H144.674ZM160.518 37V16.84H164.358V37H160.518ZM168.518 37V16.84H171.878L180.838 29.96V16.84H184.678V37H181.318L172.358 23.88V37H168.518ZM188.83 37V16.84H192.67V25.8L199.39 16.84H203.87L196.35 26.76L204.35 37H199.87L192.67 27.88V37H188.83Z"
                      fill="white"
                    />
                  </svg>
                )}

                <div className="w-fit spin">
                  <span
                    onClick={() => toggleOpen(!isOpen)}
                    className="font-black text-white bg-[#969FB1] text-xl"
                  >
                    {isOpen && (
                      <svg
                        className="block h-8 w-8 cursor-pointer spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </div>

              <div className="flex flex-col mt-10 text-base tracking-tight text-[#969FB1] max-md:mt-8">
                <NavLink
                  onClick={() => updatePath("dashboard")}
                  to="/dashboard"
                  className={`${
                    state?.path == "dashboard"
                      ? "bg-[#394661] border border-[#41557B] text-[#969FB1]"
                      : ""
                  } flex items-center justify-start gap-2 py-2 px-2 w-full font-extrabold whitespace-nowrap rounded-lg no-underline text-white hover:text-[#969FB1]`}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => toggleOpen(true)}
                  >
                    <path
                      d="M16.75 11.5H11.5V16.75H16.75V11.5Z"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 11.5H3.25V16.75H8.5V11.5Z"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.75 3.25H11.5V8.5H16.75V3.25Z"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 3.25H3.25V8.5H8.5V3.25Z"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className={`my-auto ${!isOpen ? "hidden" : "block"}`}>
                    Dashboard
                  </div>
                </NavLink>

                <NavLink
                  onClick={() => updatePath("feed")}
                  to="/feed"
                  className={`${
                    state?.path == "feed"
                      ? "bg-[#394661] border border-[#41557B] text-[#969FB1]"
                      : ""
                  } flex items-center mt-4 justify-start gap-2 py-2 px-2 w-full font-extrabold whitespace-nowrap rounded-lg no-underline text-white hover:text-[#969FB1]`}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => toggleOpen(true)}
                  >
                    <path
                      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.8775 7H10"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.16016 17.455L12.5952 11.5"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.9624 5.54492L7.4049 11.4999"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className={`my-auto ${!isOpen ? "hidden" : "block"}`}>
                    Feed
                  </div>
                </NavLink>

                <NavLink
                  onClick={() => updatePath("beats-market")}
                  to="/beats-market"
                  className={`${
                    state?.path == "beats-market"
                      ? "bg-[#394661] border border-[#41557B] text-[#969FB1]"
                      : ""
                  } flex items-center mt-4 justify-start gap-2 py-2 px-2 w-full font-extrabold whitespace-nowrap rounded-lg no-underline text-white hover:text-[#969FB1]`}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => toggleOpen(true)}
                  >
                    <path
                      d="M16 17.5C16.4142 17.5 16.75 17.1642 16.75 16.75C16.75 16.3358 16.4142 16 16 16C15.5858 16 15.25 16.3358 15.25 16.75C15.25 17.1642 15.5858 17.5 16 17.5Z"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.75 17.5C8.16421 17.5 8.5 17.1642 8.5 16.75C8.5 16.3358 8.16421 16 7.75 16C7.33579 16 7 16.3358 7 16.75C7 17.1642 7.33579 17.5 7.75 17.5Z"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.75 1.75H4.75L6.76 11.7925C6.82858 12.1378 7.01643 12.448 7.29066 12.6687C7.56489 12.8895 7.90802 13.0067 8.26 13H15.55C15.902 13.0067 16.2451 12.8895 16.5193 12.6687C16.7936 12.448 16.9814 12.1378 17.05 11.7925L18.25 5.5H5.5"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className={`my-auto ${!isOpen ? "hidden" : "block"}`}>
                    Marketplace
                  </div>
                </NavLink>

                <NavLink
                  onClick={() => updatePath("match-beats")}
                  to="/match-beats"
                  className={`${
                    state?.path == "match-beats"
                      ? "bg-[#394661] border border-[#41557B] text-[#969FB1]"
                      : ""
                  } flex items-center mt-4 justify-start gap-2 py-2 px-2 w-full font-extrabold whitespace-nowrap rounded-lg no-underline text-white hover:text-[#969FB1]`}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => toggleOpen(true)}
                  >
                    <path
                      d="M2.5 13.75L10 17.5L17.5 13.75"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 10L10 13.75L17.5 10"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 2.5L2.5 6.25L10 10L17.5 6.25L10 2.5Z"
                      stroke="#969FB1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className={`my-auto ${!isOpen ? "hidden" : "block"}`}>
                    Matcher
                  </div>
                </NavLink>

                <NavLink
                  onClick={() => updatePath("rap-battles")}
                  to="/rap-battles"
                  className={`${
                    state?.path == "rap-battles"
                      ? "bg-[#394661] border border-[#41557B] text-[#969FB1]"
                      : ""
                  } flex items-center mt-4 justify-start gap-2 py-2 px-2 w-full font-extrabold whitespace-nowrap rounded-lg no-underline text-white hover:text-[#969FB1]`}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => toggleOpen(true)}
                  >
                    <path
                      d="M12 2C10.3431 2 9 3.34315 9 5V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V5C15 3.34315 13.6569 2 12 2ZM6 11V12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12V11H16V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V11H6ZM11 19H13V22H11V19Z"
                      fill="#969FB1"
                    />
                  </svg>
                  <div className={`my-auto ${!isOpen ? "hidden" : "block"}`}>
                    Rap battles
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
