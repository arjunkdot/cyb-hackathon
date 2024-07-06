import React from "react";
import {
  MdAddCircleOutline,
  MdArrowDropDown,
  MdOutlineSearch,
} from "react-icons/md";

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
                <a>Jobs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Jobs</h1>
          <div className="flex items-center gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <MdOutlineSearch className="text-lg" />
              <input
                type="text"
                className="grow text-sm"
                placeholder="Search"
              />
            </label>
            <button className="btn btn-primary text-white">
              <MdAddCircleOutline className="text-lg" />
              Add Jobs
            </button>
          </div>
        </div>

        {/* Tables */}
        <div className="overflow-x-auto overflow-y-auto  min-h-[calc(100vh-240px)] mt-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Job</th>
                <th>Posted by</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Quality Control Specialist</td>
                <td>Cy Ganderton</td>
                <td>06 Jul 2024</td>
                <td>
                  <div className="badge badge-info text-xs font-bold text-white">
                    Ongoing
                  </div>
                </td>
                <td>
                  <details className="dropdown">
                    <summary className="btn btn-ghost btn-sm text-bas m-1">
                      Actions <MdArrowDropDown />
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                      <li>
                        <a>Mark as completed</a>
                      </li>
                      <li>
                        <a className="text-red-600">Request Cancellation</a>
                      </li>
                    </ul>
                  </details>
                </td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <td>Desktop Support Technician</td>
                <td>Hart Hagerty</td>
                <td>21 Apr 2024</td>
                <td>
                  <div className="badge badge-success text-xs font-bold text-white">
                    Completed
                  </div>
                </td>
                <td>
                  <details className="dropdown">
                    <summary className="btn btn-ghost btn-sm text-bas m-1">
                      Actions <MdArrowDropDown />
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                      <li>
                        <a>Mark as completed</a>
                      </li>
                      <li>
                        <a className="text-red-600">Request Cancellation</a>
                      </li>
                    </ul>
                  </details>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Tax Accountant</td>
                <td>Brice Swyre</td>
                <td>31 Dec 2023</td>
                <td>
                  <div className="badge badge-error text-xs font-bold text-white">
                    Cancelled
                  </div>
                </td>
                <td>
                  <details className="dropdown">
                    <summary className="btn btn-ghost btn-sm text-bas m-1">
                      Actions <MdArrowDropDown />
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                      <li>
                        <a>Mark as completed</a>
                      </li>
                      <li>
                        <a className="text-red-600">Request Cancellation</a>
                      </li>
                    </ul>
                  </details>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
