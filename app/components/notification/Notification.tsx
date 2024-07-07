import React, { useEffect, useState } from "react";
import useNotificatons from "../../hooks/useNotifications";
import { NotificatonType } from "@/types/types";
import { formatRelative } from "date-fns";
import useCurrentUser from "./../../hooks/useUserInfo";
function Notification({ notifications }: { notifications: NotificatonType[] }) {
  return (
    <div className="min-w-[350px]">
      <div className="card-header flex items-center justify-between p-4 pb-0">
        <span className="text-sm font-bold pb-3 border-b border-gray-300 block w-full">
          Notifications{" "}
        </span>
        {/* <button className="btn btn-ghost btn-sm text-xs text-primary">
          Clear all
        </button> */}
      </div>
      <div className="card-body p-3">
        <ul>
          {notifications &&
            notifications.map((notification) => (
              <li
                key={notification.id}
                className="border-b border-slate-300 py-4 last:border-0 first:pt-0 font-semibold">
                <p>{notification.content}</p>
                <p className="text-xs text-slate-500 mt-2 capitalize">
                  {formatRelative(notification.created_at, new Date())}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Notification;
