import React from "react";

function Notification() {
  return (
    <div className="min-w-[350px]">
      <div className="card-header flex items-center justify-between p-4 pb-0">
        <span className="text-sm font-bold">Notifications</span>
        <button className="btn btn-ghost btn-sm text-xs text-primary">
          Clear all
        </button>
      </div>
      <div className="card-body p-3">
        <ul>
          <li className="border-b border-slate-300 py-4 last:border-0 first:pt-0 font-semibold">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p className="text-xs text-slate-500 mt-2">6 hours ago</p>
          </li>
          <li className="border-b border-slate-300 py-4 last:border-0 last:pb-0">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p className="text-xs text-slate-500 mt-2">6 hours ago</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Notification;
