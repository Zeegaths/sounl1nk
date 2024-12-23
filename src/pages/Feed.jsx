import React from 'react'
import MainAppWrapper from '../components/MainAppWrapper'

const Feed = () => {

  return (
    <MainAppWrapper>
    <div className='dash-ctn w-[90vw] sm:w-[100%] md:w-[70vw]'>
        <div className="welcome-ctn flex justify-between items-center flex-wrap sm:flex-nowrap gap-6">
            <div className="welcome-text-ctn medium-gray-text flex flex-col basis-full">
                <h4>Feed</h4>
                <p>Accounts you follow.</p>
            </div>
            <div className="welcome-btn flx mb-10">
                <div className="addy-ctn flx py-3 hover:opacity-60">
                    <p className="dot"></p>
                    <p className="addy">Oxd38...CFC4</p>
                </div>
                <img src="./dropdown.svg" alt="" />
            </div>
        </div>

        <div className="chats-div-ctn flex-wrap md:flex-nowrap gap-6">
            <div className="input-text-ctn mr-10 flex-1 md:flex-auto">
                {/* <input name="chat" id="chat" className='chat-input' placeholder="Say Something" /> */}
                <div className="chat-ctn w-[70vw] sm:w-[35vw]">
                    <textarea name="chat" id="" className='chat-input' placeholder="Say Something"></textarea>
                    <div className="chat-icons-div flx">
                        <div className="lhs-icons flx">
                            <img src="./image.svg" alt="" />
                            <img src="./camera.svg" alt="" />
                            <img src="./paperclip.svg" alt="" />
                        </div>
                        <div className="rhs-icons">
                            <img src="./send-icon.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="user-div-ctn">
                    <div className="user-ctn w-[70vw] sm:w-[35vw]">
                        <div className="avatar-ctn-div flx flex-wrap sm:flex-nowrap">
                            <img src="./avatar-online.png" alt="" />
                            <p className='small-black-text'>Sarah.eth</p>
                            <span className='medium-gray-text'>Today 22:10</span>
                        </div>
                        <div className="comment-div">
                            <p className="medium-black-text text-l mb-2">just made and published my new beat here. preview it.</p>
                        </div>
                        <div className="player-div flx">
                            <img src="./play-icon.png" alt="" className="play" />
                            <input type="range" name="" id="" />
                            <p className="duration">00:54</p>
                        </div>
                        <div className="like-ctn flx gap-8">
                            <div className="like-div flx">
                                <img src="./love.svg" alt="" />
                                <p className='small-black-text'>Like</p>
                            </div>
                            <div className="like-div flx">
                                <img src="./comment.svg" alt="" />
                                <p className='small-black-text'>Reply</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-ctn w-[70vw] sm:w-[35vw]">
                        <div className="avatar-ctn-div flx flex-wrap sm:flex-nowrap">
                            <img src="./avatar-online.png" alt="" />
                            <p className='small-black-text'>Sarah.eth</p>
                            <span className='medium-gray-text'>Today 22:10</span>
                        </div>
                        <div className="comment-div">
                            <p className="medium-black-text text-l mb-2">just made and published my new beat here. preview it.</p>
                        </div>
                        <div className="player-div flx">
                            <img src="./play-icon.png" alt="" className="play" />
                            <input type="range" name="" id="" />
                            <p className="duration">00:54</p>
                        </div>
                        <div className="like-ctn flx gap-8">
                            <div className="like-div flx">
                                <img src="./love.svg" alt="" />
                                <p className='small-black-text'>Like</p>
                            </div>
                            <div className="like-div flx">
                                <img src="./comment.svg" alt="" />
                                <p className='small-black-text'>Reply</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-ctn w-[70vw] sm:w-[35vw]">
                        <div className="avatar-ctn-div flx flex-wrap sm:flex-nowrap">
                            <img src="./avatar-online.png" alt="" />
                            <p className='small-black-text'>Sarah.eth</p>
                            <span className='medium-gray-text'>Today 22:10</span>
                        </div>
                        <div className="comment-div">
                            <p className="medium-black-text text-l mb-2">just made and published my new beat here. preview it.</p>
                        </div>
                        {/* <div className="player-div flx">
                            <img src="./play-icon.png" alt="" className="play" />
                            <input type="range" name="" id="" />
                            <p className="duration">00:54</p>
                        </div> */}
                        <div className="like-ctn flx gap-8">
                            <div className="like-div flx">
                                <img src="./love.svg" alt="" />
                                <p className='small-black-text'>Like</p>
                            </div>
                            <div className="like-div flx">
                                <img src="./comment.svg" alt="" />
                                <p className='small-black-text'>Reply</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-ctn w-[70vw] sm:w-[35vw]">
                        <div className="avatar-ctn-div flx flex-wrap sm:flex-nowrap">
                            <img src="./avatar-online.png" alt="" />
                            <p className='small-black-text'>Sarah.eth</p>
                            <span className='medium-gray-text'>Today 22:10</span>
                        </div>
                        <div className="comment-div">
                            <p className="medium-black-text text-l mb-2">just made and published my new beat here. preview it.</p>
                        </div>
                        {/* <div className="player-div flx">
                            <img src="./play-icon.png" alt="" className="play" />
                            <input type="range" name="" id="" />
                            <p className="duration">00:54</p>
                        </div> */}
                        <div className="like-ctn flx gap-8">
                            <div className="like-div flx">
                                <img src="./love.svg" alt="" />
                                <p className='small-black-text'>Like</p>
                            </div>
                            <div className="like-div flx">
                                <img src="./comment.svg" alt="" />
                                <p className='small-black-text'>Reply</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="follow-div-ctn flex-1 md:flex-auto w-[70vw] sm:w-[35vw]">
                <p className='big-black-text'>Add to your feed</p>
                <div className="follow-feed-div">
                    <div className="follow-div flx w-[70%] w-md-[100%]">
                        <div className='flx mr-10'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div mx-3">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx sm:px-10 md:px-0">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                    <div className="follow-div flx w-[70%] w-md-[100%]">
                        <div className='flx mr-10'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div mx-3">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx sm:px-10 md:px-0">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                    <div className="follow-div flx w-[70%] w-md-[100%]">
                        <div className='flx mr-10'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div mx-3">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx sm:px-10 md:px-0">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                    <div className="follow-div flx w-[70%] w-md-[100%]">
                        <div className='flx mr-10'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div mx-3">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx sm:px-10 md:px-0">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                    <div className="follow-div flx w-[70%] w-md-[100%]">
                        <div className='flx mr-10'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div mx-3">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx sm:px-10 md:px-0">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                    <div className="follow-div flx w-[70%] w-md-[100%]">
                        <div className='flx mr-10'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div mx-3">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx sm:px-10 md:px-0">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </MainAppWrapper>
  )
}

export default Feed