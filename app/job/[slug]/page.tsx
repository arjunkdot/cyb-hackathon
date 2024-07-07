"use client";

import { supabase } from "@/lib/supabaseClient";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdOutlineBookmarkBorder, MdOutlineArrowOutward } from "react-icons/md";
import { applyForJob } from "@/lib/jobApplicationService"; // Example service function to handle application submission
import Loading from "@/app/components/general/Loading";

function TalentProfile({ jobId }) {
  const router = useRouter();
  const { slug } = useParams(); // Get the slug from the URL
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [job, setJob] = useState({
    title: "",
    description: "",
    company: "",
    jobType: "",
    salaryRange: "",
    experienceRequired: "",
    requiredSkills: "",
    postedBy: "",
  });
  useEffect(() => {
    if (slug) {
      const fetchJob = async () => {
        try {
          setIsLoading(true);
          console.log(`Fetching job with slug: ${slug}`);
          const { data, error } = await supabase
            .from("addjob")
            .select("*")
            .eq("id", slug)
            .limit(1); // Use limit(1) instead of single()

          if (error) {
            console.error("Error fetching job:", error);
          }
          console.log("job", data.length);

          if (data && data.length > 0) {
            setJob({
              title: data[0].title,
              description: data[0].description,
              company: data[0].company,
              jobType: data[0].job_type,
              salaryRange: data[0].salary_range,
              experienceRequired: data[0].experience_required,
              requiredSkills: data[0].required_skills,
              postedBy: data[0].posted_by,
            });
          } else {
            setJob({
              title: "",
              description: "",
              company: "",
              jobType: "",
              salaryRange: "",
              experienceRequired: "",
              requiredSkills: "",
              postedBy: "",
            });
            console.log(job, "job");
          }
        } catch (error) {
          console.error("Unexpected error fetching job:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchJob();
    }
  }, [slug]);

  const insertApplication = async () => {
    try {
      // Insert data into job_applications table
      const { data, error } = await supabase.from("job_applications").insert([
        {
          job_id: slug,
          user_id: (await supabase.auth.getUser()).data.user?.id,
          name: (await supabase.auth.getUser()).data.user?.user_metadata.name,

          email: (await supabase.auth.getUser()).data.user?.email,
          status: "Pending", // Default status
        },
      ]);

      if (error) {
        throw error;
      }

      console.log("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error.message);
      alert("Failed to submit application. Please try again later.");
    }
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-gray-100 py-10">
      <div className="container bg-white border border-gray-300">
        <div className="border-b border-gray-300 p-8 flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
            </div>
            <p className="text-gray-500">{job.company}</p>
          </div>
          <div className="flex flex-wrap space-x-1">
            <button
              className="btn btn-primary text-white"
              onClick={insertApplication}>
              <MdOutlineArrowOutward className="text-lg" />
              Apply
            </button>

            <a href="#" className="btn btn-light">
              <MdOutlineBookmarkBorder className="text-lg" />
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-[450px_1fr] ">
          {/* Sidebar */}
          <div className="border-r border-gray-300 p-8">
            {/* Stats */}
            <div className="stats border border-gray-300 w-100">
              <div className="stat">
                <div className="stat-title text-xs font-bold">Experience</div>
                <div className="stat-value text-xl mt-1">
                  {job.experienceRequired} Years
                </div>
              </div>
              <div className="stat">
                <div className="stat-title text-xs font-bold">Pay Range</div>
                <div className="stat-value text-xl mt-1">{job.salaryRange}</div>
              </div>
            </div>
            {/* End of Stats */}
            <div className="mt-8">
              <h3 className="text-base font-bold">Location</h3>
              <p className="text-sm text-gray-500">{job.jobType}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-base font-bold">Tags</h3>
              <ul className="mt-2">
                {job.requiredSkills.split(",").map((tag) => (
                  <li key={tag.trim()}>
                    <div className="badge badge-info font-bold text-xs badge-outline">
                      {tag.trim()}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Main */}
          <div>
            <div className="p-8">
              <h2 className="font-bold text-xl mb-4">Job Description</h2>
              <p>{job.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentProfile;
