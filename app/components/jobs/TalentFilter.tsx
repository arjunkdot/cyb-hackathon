import React from "react";

const FILTER_CONFIG = [
  {
    title: "Experience Level",
    options: [
      { label: "0-3 Years", value: "0-3" },
      { label: "4-7 Years", value: "4-7" },
      { label: "8-11 Years", value: "8-11" },
      { label: "12+ Years", value: "12+" },
    ],
  },
];

function TalentFilter({ selectedFilters, setSelectedFilters }) {
  const handleCheckboxChange = (optionValue) => {
    setSelectedFilters((prevFilters) => {
      const isSelected = prevFilters.includes(optionValue);
      if (isSelected) {
        return prevFilters.filter((filter) => filter !== optionValue);
      } else {
        return [...prevFilters, optionValue];
      }
    });
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Filter</h3>
        <button className="btn btn-ghost text-primary" onClick={clearFilters}>
          Clear
        </button>
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
                        checked={selectedFilters.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
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
