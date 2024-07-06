import React from "react";
import Banner from "../components/general/banner";
import Image from "next/image";
import { MdOutlineBookmarkBorder, MdOutlineStar } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

function JobsPage() {
  return (
    <div>
      <Banner
        title="Explore Talents"
        subtitle=" Find top rated talents for your next bit thing."
      />
      <div className="container my-8">
        <div className="grid grid-cols-[350px_1fr] gap-2">
          <div>Filter goes here</div>
          <div>
            {/* Job card goes here */}
            <div className="border border-slate-200 p-6 shadow-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl font-bold">Sean Daley</h2>
                    <div className="badge badge-success badge-lg text-xs font-bold text-white">
                      4.3 <MdOutlineStar className="ml-1" />
                    </div>
                  </div>
                  <div className="flex space-x-1 items-center mt-1">
                    <p className="text-slate-500 text-sm">Visual Artist</p>
                    <p className="text-slate-500 text-base">
                      <BsDot />
                    </p>
                    <p className="text-slate-500 text-sm">15 Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <a href="#" className="btn btn-primary text-white">
                    <CgProfile className="text-lg" />
                    View Profile
                  </a>
                  <a href="#" className="btn btn-light">
                    <MdOutlineBookmarkBorder className="text-lg" />
                    Bookmark
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-5 tracking-wide">
                Hello, I&apos;m Sean Daley. I am a visual artist with over 15
                years of experience in the industry. I have worked with clients
                ranging from small businesses to large corporations. I am always
                looking for new and exciting projects to work on.
              </p>
              <div className="flex gap-1 font-bold mt-5">
                <div className="badge badge-info text-xs badge-outline">
                  VFX
                </div>
                <div className="badge badge-warning text-xs badge-outline">
                  Motion grpahics
                </div>
                <div className="badge badge-secondary text-xs badge-outline">
                  Illustration
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
