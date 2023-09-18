import React from "react";
import ModalBlank from "../../components/ModalBlank";
import { Link } from "react-router-dom";

function AuthModal({ modalContent, modalOpen, setInfoModalOpen }) {
  console.log("modalopenssds", modalOpen);
  const { title = "", data = {} } = modalContent;

  return (
    <ModalBlank
      id="info-modal"
      modalOpen={modalOpen}
      // setModalOpen={setInfoModalOpen}
    >
      <div className="p-5 flex space-x-4">
        {/* Icon */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-emerald-100 dark:bg-emerald-400/30">
          <svg
            className="w-4 h-4 shrink-0 fill-current text-emerald-500"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
          </svg>
        </div>
        {/* Content */}
        <div>
          {/* Modal header */}
          <div className="mb-2">
            <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              {title}
            </div>
          </div>
          {/* Modal content */}
          <div className="text-sm mb-5">
            <div className="font-medium text-slate-800 dark:text-slate-100 mb-3">
              Your crafted data here...
            </div>
            <ul className="space-y-2 mb-5">
              {Object.entries(data).map(([key, value]) => (
                <li key={key} className="flex items-center">
                  <svg
                    className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div>
                    <span className="font-semibold">{key}</span>: {value}
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-xs text-slate-500">
              By clicking on Allow access, you authorize Mosaic to use your
              information in accordance with its{" "}
              <a
                className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                href="#0"
              >
                Privacy Policy
              </a>
              . You can stop it at any time on the integrations page of your
              Mosaic account.
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex flex-wrap justify-end space-x-2">
            <Link
              to="/"
              // onClick={(e) => {
              //   e.stopPropagation();
              //   setInfoModalOpen(false);
              // }}
              className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </ModalBlank>
  );
}

export default AuthModal;
