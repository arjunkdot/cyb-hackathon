"use client";
import React, { useState, useEffect } from "react";
import { MdCheck } from "react-icons/md";
import { supabase } from "@/lib/supabaseClient";

function Dashboard() {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    company: "",
    jobType: "",
    salaryRange: 0,
    experienceRequired: 0,
    requiredSkills: "",
    postedBy: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setJobData((prevJobData) => ({
      ...prevJobData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const user = supabase.auth.getUser();
      if (user) {
        // Create or update job opening in Supabase
        const { error } = await supabase
          .from("addjob")
          .upsert({
            title: jobData.title,
            description: jobData.description,
            company: jobData.company,
            job_type: jobData.jobType,
            salary_range: jobData.salaryRange,
            experience_required: jobData.experienceRequired,
            required_skills: jobData.requiredSkills,
            posted_by: (await user).data.user?.id,
          })
          .eq("user_id", (await user).data.user?.id);

        if (error) {
          throw error;
        }

        console.log("Job opening created/updated successfully! ");
        // Optionally, add a success message or redirect after creating/updating
      }
    } catch (error) {
      console.error("Error creating/updating job opening:", error);
    }
  };

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
                <a>Add Job Opening</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Add Job Opening</h1>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-primary text-white"
              onClick={handleSaveChanges}
            >
              <MdCheck className="text-lg" />
              add job{" "}
            </button>
          </div>
        </div>
        {/* Form */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job Title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="title"
              value={jobData.title}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job dis</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="description"
              value={jobData.description}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">company</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="company"
              value={jobData.company}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job type</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="jobType"
              value={jobData.jobType}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">salary_range</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="salaryRange"
              value={jobData.salaryRange}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job experience</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="experienceRequired"
              value={jobData.experienceRequired}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job required_skills</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="requiredSkills"
              value={jobData.requiredSkills}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
