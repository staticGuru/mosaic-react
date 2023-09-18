import React, { useState } from "react";
import { Link } from "react-router-dom";

import BusinessAuth from "../../images/create-account-organisation.jpg";
import AuthDecoration from "../../images/auth-decoration.png";
import AuthModal from "./authmodal";
import { Auth } from "../../services/auth";

function OrganizationAccount() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [organisation, setOrganisation] = useState({
    organizationName: "",
    organizationShortName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    numberOfClinics: 0,
  });
  function updateOrganizationData(key, value) {
    setOrganisation((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }
  async function handleSubmit(e) {
     e.preventDefault();
    const data = await Auth.createOrganization(organisation);
    if(data){
      handleSuccessModal({ organizationId: data?.org_id });
    }
  }

  function handleSuccessModal(data) {
    setModalContent({
      title: "Organization Registration Success",
      data: { ...data, ...organisation },
    });
    setModalOpen(true);
  }

  function resetState(){
    setOrganisation({
      organizationName: "",
      organizationShortName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      numberOfClinics: 0,
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
                <h1 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                  Create your Organization ✨
                </h1>
                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="orgName"
                      >
                        Organization Name{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="orgName"
                        className="form-input w-full"
                        type="text"
                        placeholder="Emirates"
                        required
                        value={organisation.organizationName}
                        onChange={(e) =>
                          updateOrganizationData(
                            "organizationName",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="orgShortName"
                      >
                        Organization Short Name
                      </label>
                      <input
                        id="orgShortName"
                        className="form-input w-full"
                        type="text"
                        placeholder="Supreme"
                        value={organisation.organizationShortName}
                        onChange={(e) =>
                          updateOrganizationData(
                            "organizationShortName",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="address"
                      >
                        Address<span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="address"
                        className="form-input w-full"
                        type="text"
                        required
                        placeholder="6/4A, main road, AY"
                        value={organisation.address}
                        onChange={(e) =>
                          updateOrganizationData("address", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="city"
                      >
                        City<span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="city"
                        className="form-input w-full"
                        type="text"
                        required
                        placeholder="NY"
                        value={organisation.city}
                        onChange={(e) =>
                          updateOrganizationData("city", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="state"
                      >
                        State<span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="state"
                        className="form-input w-full"
                        placeholder="Washington"
                        type="text"
                        required
                        value={organisation.state}
                        onChange={(e) =>
                          updateOrganizationData("state", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="zipCode"
                      >
                        Zip Code<span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="zipCode"
                        className="form-input w-full"
                        placeholder="432 034 033"
                        type="text"
                        required
                        value={organisation.zipCode}
                        onChange={(e) =>
                          updateOrganizationData("zipCode", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="numOfClinics"
                      >
                        Number of Clinics
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="numOfClinics"
                        className="form-input w-full"
                        placeholder="3"
                        type="number"
                        required
                        value={organisation.numberOfClinics}
                        onChange={(e) =>
                          updateOrganizationData(
                            "numberOfClinics",
                            e.target.value
                          )
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
                    type="button"
                    onClick={resetState}
                  >
                    Cancel
                  </button>
                    <button
                      className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap"
                      // to="/"
                      type="submit"
                    >
                      Create
                    </button>
                  </div>
                </form>
                {/* Footer */}
               {/* <div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-sm">
                    Have an account?{" "}
                    <Link
                      className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                      to="/signin"
                    >
                      Sign In
                    </Link>
                  </div>
                      </div>*/}
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
              src={BusinessAuth}
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
      <AuthModal
        modalContent={modalContent}
        modalOpen={modalOpen}
        setInfoModalOpen={setModalOpen}
      />
    </>
  );
}

export default OrganizationAccount;
