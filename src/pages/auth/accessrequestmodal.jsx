import React from "react";
import ModalBasic from "../../components/ModalBasic";

function AccessRequestModal({ modalOpen, setModalOpen }) {
  return (
    <ModalBasic
      id="feedback-modal"
      modalOpen={modalOpen}
     //   setModalOpen={setModalOpen}
      title="Request Access"
    >
      {/* Modal content */}
      <div className="px-5 py-4">
        <div className="text-sm">
          <div className="font-medium text-slate-800 dark:text-slate-100 mb-3">
            Let us know your request access 🙌
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="orgName">
              Organization Name
            </label>
            <input
              id="orgName"
              className="form-input w-full px-2 py-1"
              type="text"
              disabled
              placeholder="kdxss"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="orgName">
              Role Access Requested
            </label>
            <div>
              <div className="flex flex-wrap items-center -m-3">
                <div className="m-3">
                  {/* Start */}
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="radio-buttons"
                      className="form-radio"
                    />
                    <span className="text-sm ml-2">Manager</span>
                  </label>
                  {/* End */}
                </div>

                <div className="m-3">
                  {/* Start */}
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="radio-buttons"
                      className="form-radio"
                      defaultChecked
                    />
                    <span className="text-sm ml-2">Staff</span>
                  </label>
                  {/* End */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="role">
              Clinic Name <span className="text-rose-500">*</span>
            </label>
            <select id="role" className="form-select w-full">
              <option>Applo</option>
              <option>Vasan</option>
              <option>Dollo</option>
            </select>
          </div>
        </div>
      </div>
      {/* Modal footer */}
      <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap justify-end space-x-2">
          <button
            className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(false);
            }}
          >
            Cancel
          </button>
          <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
            Request
          </button>
        </div>
      </div>
    </ModalBasic>
  );
}

export default AccessRequestModal;
