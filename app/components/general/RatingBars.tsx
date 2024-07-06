import React from "react";

function RatingBars() {
  return (
    <div className="w-48">
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">5</span>
        <progress
          className="progress progress-primary w-full"
          value={75}
          max="100"></progress>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">4</span>
        <progress
          className="progress progress-primary w-full"
          value={28}
          max="100"></progress>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">3</span>
        <progress
          className="progress progress-primary w-full"
          value={2}
          max="100"></progress>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">2</span>
        <progress
          className="progress progress-primary w-full"
          value={0}
          max="100"></progress>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">1</span>
        <progress
          className="progress progress-primary w-full"
          value={0}
          max="100"></progress>
      </div>
    </div>
  );
}

export default RatingBars;
