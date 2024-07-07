"use client";
import { supabase } from "@/lib/supabaseClient";
import Forbidden from "../components/general/Forbidden";
import { useCheckProfileExists } from "../hooks/useCheckProfileExists";
import React, { useEffect, useState } from "react";
import {
  MdAddCircleOutline,
  MdArrowDropDown,
  MdOutlineSearch,
} from "react-icons/md";

import Loading from "../components/general/Loading";

export default function Dashboard() {
  const [jobApplications, setJobApplications] = useState<any[]>([]);

  const { userData } = useCheckProfileExists("/dashboard/onboarding");

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        // Fetch job applications with corresponding job details
        const { data, error } = await supabase
          .from("job_applications")
          .select(
            `
            id,
            name,
            email,
            status,
            application_date,
            addjob (
              id,
              title,
              description,
              company,
              job_type,
              salary_range,
              experience_required,
              required_skills,
             posted_by
            )
          `
          )
          .eq("user_id", (await supabase.auth.getUser()).data.user?.id!);

        if (error) {
          throw error;
        }

        setJobApplications(data);
      } catch (error: any) {
        console.error("Error fetching job applications:", error.message);
      }
    };

    fetchJobApplications();
  }, []);

  if (!userData) {
    return <Loading />;
  }

  return (
    <div>
      <title>Dashboard - PixaJobs</title>
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
            <Link
              href="/dashboard/add-job"
              className="btn btn-primary text-white"
            >
              <MdAddCircleOutline className="text-lg" />
              Add Jobs
            </Link>
          </div>
        </div>

        {/* Tables */}
        <div className="overflow-x-auto overflow-y-auto  min-h-[calc(100vh-240px)] mt-8">
          <table className="table">
            <thead>
              <tr>
                <th>Job</th>
                <th>Company</th>
                <th>Posted by</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {jobApplications.length > 0 ? (
                jobApplications.map((application) => (
                  <tr key={application.id}>
                    <td>{application.addjob.title}</td>
                    <td>{application.addjob.company}</td>
                    <td>{application.addjob.posted_by}</td>
                    <td>
                      {new Date(
                        application.application_date
                      ).toLocaleDateString()}
                    </td>
                    <td>
                      <div
                        className={`badge badge-${getStatusBadgeColor(
                          application.status
                        )} text-xs font-bold text-black`}>
                        {application.status}
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
                ))
              ) : (
                <tr>
                  <td className="text-gray-500 text-center" colSpan={6}>
                    Nothing to show here.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
function getStatusBadgeColor(status: string) {
  switch (status) {
    case "Ongoing":
      return "info";
    case "Completed":
      return "success";
    case "Cancelled":
      return "error";
    default:
      return "default";
  }
}
