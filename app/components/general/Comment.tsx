import React from "react";

function Comment() {
  return (
    <div className="border-b border-gray-300 py-7 last:border-0">
      <span className="text-sm font-bold">User name</span>
      <p className="text-xs text-gray-500">6 hours ago</p>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sequi
        dolore. Vel obcaecati modi ipsam, facere rem quisquam! Ab voluptatum
        porro dicta harum debitis id voluptatem molestiae architecto et modi.
      </p>
    </div>
  );
}

export default Comment;
