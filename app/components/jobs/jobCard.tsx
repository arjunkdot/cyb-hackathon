"use client";
import React from "react";
import { MdOutlineBookmarkBorder, MdOutlineStar } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const JobCard = ({ job }) => {
  const {
    title,
    company,
    experience_required: exp,
    description,
    required_skills: tags,
  } = job;

  return (
    <div className="border border-slate-300 p-6 mb-3 duration-150 linear hover:shadow-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold">{title}</h2>
            {/* {rating && (
              <div className="badge badge-success badge-lg text-xs font-bold text-white px-1">
                {rating} <MdOutlineStar className="ml-1" />
              </div>
            )} */}
          </div>
          <div className="flex space-x-1 items-center mt-1">
            <p className="text-slate-500 text-sm">{company}</p>
            <p className="text-slate-500 text-base">
              <BsDot />
            </p>
            <p className="text-slate-500 text-sm">
              {exp} {exp > 1 ? "years" : "year"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Link href={`/job/${job.id}`} className="btn btn-primary text-white">
            <CgProfile className="text-lg" />
            View Job
          </Link>
          {/* <a href="#" className="btn btn-light">
            <MdOutlineBookmarkBorder className="text-lg" />
            Bookmark
          </a> */}
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-6 tracking-wide">
        {description}
      </p>
      <div className="flex gap-1 font-bold mt-5">
        {tags
          ? tags.split(",").map((tag) => (
              <div
                key={tag.trim()}
                className="badge badge-info text-xs badge-outline">
                {tag.trim()}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default JobCard;
