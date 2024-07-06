import React from "react";
const FILTER_CONFIG = [
  {
    title: "Experience Level",
    options: [
      { label: "0-3 Years", value: "0-3" },
      { label: "4-7 Years", value: "4-7" },
      { label: "8-10 Years", value: "8-11" },
      { label: "12+ Years", value: "12" },
    ],
  },
  {
    title: "Availability",
    options: [
      { label: "Full-time", value: "fulltime" },
      { label: "Part-time", value: "parttime" },
      { label: "Not Available", value: "na" },
    ],
  },
];
function TalentFilter() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Filter</h3>
        <button className="btn btn-ghost text-primary">Clear</button>
      </div>
      <div className="mt-1">
        {FILTER_CONFIG.map((filterItem) => (
          <div key={filterItem.title} className="mt-5">
            <h4 className="font-bold text-base mb-1">{filterItem.title}</h4>
            <ul>
              {filterItem.options.map((option) => (
                <li key={option.value}>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start space-x-2 px-0">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary text-white"
                      />
                      <span className="label-text font-semibold text-gray-600">
                        {option.label}
                      </span>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TalentFilter;
