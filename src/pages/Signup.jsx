import React, { useState } from "react";
import { Link } from "react-router-dom";

import AuthImage from "../images/auth-image.jpg";
import AuthDecoration from "../images/auth-decoration.png";
import AccessRequestModal from "./auth/accessrequestmodal";
import { Auth } from "../services/auth";

function Signup() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    password: "",
    reEnterPassword: "",
    orgId: 0,
  });
  function updateUserData(key, value) {
    setUser((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (user.password !== user.reEnterPassword) {
      alert("Password and reset password are not same!!!");
    } else {
      await Auth.createUser(user)
        .then((res) => {
          setModalOpen(true);
        })
        .catch((err) => {
          console.log("loggg", err);
        });
    }
  }
  function resetState(e) {
    e.preventDefault();
    setUser({
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      password: "",
      reEnterPassword: "",
      orgId: 0,
    });
  }
  return (
    <>
      <main className="bg-white dark:bg-slate-900">
        <div className="relative md:flex">
          {/* Content */}
          <div className="md:w-1/2">
            <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">
              {/* Header */}
              <div className="flex-1">
                <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                  {/* Logo */}
                  <Link className="block" to="/">
                    <svg width="32" height="32" viewBox="0 0 32 32">
                      <defs>
                        <linearGradient
                          x1="28.538%"
                          y1="20.229%"
                          x2="100%"
                          y2="108.156%"
                          id="logo-a"
                        >
                          <stop
                            stopColor="#A5B4FC"
                            stopOpacity="0"
                            offset="0%"
                          />
                          <stop stopColor="#A5B4FC" offset="100%" />
                        </linearGradient>
                        <linearGradient
                          x1="88.638%"
                          y1="29.267%"
                          x2="22.42%"
                          y2="100%"
                          id="logo-b"
                        >
                          <stop
                            stopColor="#38BDF8"
                            stopOpacity="0"
                            offset="0%"
                          />
                          <stop stopColor="#38BDF8" offset="100%" />
                        </linearGradient>
                      </defs>
                      <rect fill="#6366F1" width="32" height="32" rx="16" />
                      <path
                        d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                        fill="#4F46E5"
                      />
                      <path
                        d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                        fill="url(#logo-a)"
                      />
                      <path
                        d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                        fill="url(#logo-b)"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="max-w-sm mx-auto w-full px-4 py-8">
                <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                  Create your Account ✨
                </h1>
                {/* Form */}
                <form>
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="firstname"
                      >
                        First Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="firstname"
                        className="form-input w-full"
                        type="text"
                        placeholder="John"
                        required
                        value={user.firstName}
                        onChange={(e) =>
                          updateUserData("firstName", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="middlename"
                      >
                        Middle Name
                      </label>
                      <input
                        id="middlename"
                        className="form-input w-full"
                        type="text"
                        placeholder="Nikesh"
                        value={user.middleName}
                        onChange={(e) =>
                          updateUserData("middleName", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="lastname"
                      >
                        Last Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="lastname"
                        className="form-input w-full"
                        type="text"
                        required
                        placeholder="nikil"
                        value={user.lastName}
                        onChange={(e) =>
                          updateUserData("lastName", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        className="form-input w-full"
                        type="email"
                        placeholder="john@doe.com"
                        required
                        value={user.email}
                        onChange={(e) =>
                          updateUserData("email", e.target.value)
                        }
                      />
                    </div>

                    {/*<div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="role"
                    >
                      Your Role <span className="text-rose-500">*</span>
                    </label>
                    <select id="role" className="form-select w-full">
                      <option>Designer</option>
                      <option>Developer</option>
                      <option>Accountant</option>
                    </select>
                    </div>*/}
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        className="form-input w-full"
                        type="password"
                        required
                        autoComplete="on"
                        value={user.password}
                        onChange={(e) =>
                          updateUserData("password", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="reEnterPassword"
                      >
                        Re-enter password
                      </label>
                      <input
                        id="reEnterPassword"
                        className="form-input w-full"
                        type="password"
                        required
                        value={user.reEnterPassword}
                        onChange={(e) =>
                          updateUserData("reEnterPassword", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="orgId"
                      >
                        Organization ID
                      </label>
                      <input
                        id="orgId"
                        className="form-input w-full"
                        type="text"
                        required
                        value={user.orgId}
                        placeholder={user.orgId}
                        onChange={(e) =>
                          updateUserData("orgId", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="mr-1">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-sm ml-2">
                          Email me about product news.
                        </span>
                      </label>
                    </div>
                    <button
                      className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap"
                      // to="/"
                      type="button"
                      onClick={resetState}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                {/* Footer */}
                <div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-sm">
                    Have an account?{" "}
                    <Link
                      className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                      to="/signin"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
            aria-hidden="true"
          >
            <img
              className="object-cover object-center w-full h-full"
              src={AuthImage}
              width="760"
              height="1024"
              alt="Authentication"
            />
            <img
              className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block"
              src={AuthDecoration}
              width="218"
              height="224"
              alt="Authentication decoration"
            />
          </div>
        </div>
      </main>
      <AccessRequestModal
        modalContent={modalContent}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

export default Signup;
