
// ProfileCheckModal.js
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';

const ProfileCheckModal = ({ modalOpen, closeModal, isAuthenticated, onSignOut }) => {
    const navigate = useNavigate();

    const handleProceed = () => {
        if (isAuthenticated) {
            onSignOut();
            closeModal();
        } else {
            navigate("/profile-setup");
        }
    };

    return (
        <>
            <Transition appear show={modalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    as="form"
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                                >
                                    <div className="mb-[18px] flex items-center justify-between">
                                        <Dialog.Title as="h3" className="text-2xl font-semibold">
                                            {isAuthenticated ? 'Sign Out' : 'Profile Check'}
                                        </Dialog.Title>
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="rounded-full border p-1 px-3 text-2xl font-normal duration-300 hover:bg-gray-200"
                                        >
                                            &#x2715;
                                        </button>
                                    </div>
                                    <hr className="mb-4" />

                                    <p className="mb-4">
                                        {isAuthenticated 
                                            ? 'Are you sure you want to sign out?'
                                            : 'Please click on Proceed to set up a profile. If you have a profile set up already, just click on dismiss.'}
                                    </p>

                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            className="mt-4 flex-grow rounded border-2 border-[#98A2B3] py-2 tracking-wide outline-none focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            {isAuthenticated ? 'Cancel' : 'Dismiss'}
                                        </button>
                                        <button
                                            onClick={handleProceed}
                                            type="button"
                                            className={`login-btn-gradient rounded tracking-wide text-white outline-none focus:outline-none ${
                                                isAuthenticated ? 'bg-red-500 border-red-600' : 'bg-[#394661] border border-[#41557B]'
                                            } py-2 mt-4 flex-grow`}
                                        >
                                            {isAuthenticated ? 'Sign Out' : 'Proceed'}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ProfileCheckModal