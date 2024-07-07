"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import Banner from "./components/general/banner";
import JobCard from "./components/jobs/jobCard";
import TalentFilter from "./components/jobs/TalentFilter";
import { supabase } from "@/lib/supabaseClient";

function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase.from("addjob").select("*");

      if (error) {
        console.error("Error fetching jobs:", error);
      } else {
        setJobs(data);
      }
    };
    fetchJobs();
  }, []);

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.required_skills.toLowerCase().includes(searchQuery.toLowerCase())

      // Add additional fields you want to search by
    );
  });
  return (
    <div>
      <Banner
        title="Explore jobs"
        subtitle="Find top rated talents for your next bit thing."
      />
      <div className="container my-8">
        <div className="grid grid-cols-[350px_1fr] gap-4">
          <div>
            <TalentFilter />
          </div>
          <div>
            <div className="mb-4">
              <label className="input input-bordered flex items-center gap-2">
                <MdOutlineSearch className="text-xl" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Search for a skill, position or name"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </label>
            </div>
            <div>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                <p>No jobs found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPage;
