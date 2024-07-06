import React from "react";
import { MdCheck } from "react-icons/md";

function Dashboard() {
  return (
    <div>
      <div className="bg-background py-2">
        <div className="container">
          <div className="breadcrumbs text-sm mb-0">
            <ul>
              <li>
                <a>Dashboard</a>
              </li>
              <li className="font-bold">
                <a>Edit Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <div className="flex items-center gap-2">
            <button className="btn btn-primary text-white">
              <MdCheck className="text-lg" />
              Save Changes
            </button>
          </div>
        </div>
        {/* Form */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Experience</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pay Range</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Hours</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
