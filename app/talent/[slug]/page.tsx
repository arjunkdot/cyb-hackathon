import React from "react";
import {
  MdOutlineBookmarkBorder,
  MdOutlineStar,
  MdOutlineHandshake,
} from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import Rating from "@/app/components/general/Rating";
import RatingBars from "@/app/components/general/RatingBars";
import Comment from "@/app/components/general/Comment";

function TalentProfile() {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-gray-100 py-10">
      <div className="container bg-white border border-gray-300">
        <div className="border-b border-gray-300 p-8 flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold mb-1">Talent Name</h1>
              <div className="badge badge-success badge-lg text-xs font-bold text-white px-1">
                4.5 <MdOutlineStar className="ml-1" />
              </div>
            </div>
            <p className="text-gray-500">Position Name</p>
          </div>
          <div className="flex flex-wrap space-x-1">
            <a href="#" className="btn btn-primary text-white">
              <MdOutlineHandshake className="text-lg" />
              Hire Talent
            </a>
            <a href="#" className="btn btn-secondary text-white">
              <BiDollarCircle className="text-lg" />
              Donate
            </a>
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
                <div className="stat-value text-xl mt-1">15 Years</div>
              </div>
              <div className="stat">
                <div className="stat-title text-xs font-bold">Pay Range</div>
                <div className="stat-value text-xl mt-1">$1000 - $2000</div>
              </div>
            </div>
            {/* End of Stats */}
            <div className="mt-8">
              <h3 className="text-base font-bold">Hours per week</h3>
              <p className="text-sm text-gray-500">40 hours a week</p>
            </div>
            <div className="mt-4">
              <h3 className="text-base font-bold">Tags</h3>
              <ul className="mt-2">
                <li>
                  <div className="badge badge-info font-bold text-xs badge-outline">
                    VFX
                  </div>
                </li>
                <li>
                  <div className="badge badge-info font-bold text-xs badge-outline">
                    Motion Graphics
                  </div>
                </li>
                <li>
                  <div className="badge badge-info font-bold text-xs badge-outline">
                    Illustration
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Main */}
          <div>
            <div className="border-b border-gray-300 p-8">
              <h2 className="font-bold text-xl mb-4">Profile</h2>
              <p>
                Hi, I&apos;m Sean Daley. I&apos;m a visual artist with over 15+
                years of experience. I have experience working small and large
                organization alike. I have a passion for creating beautiful
                visuals. I am currently working on my portfolio and hope to
                create some awesome visual work.
              </p>
            </div>
            {/* Work History */}
            <div className="p-8">
              <h2 className="font-bold text-xl mb-4">Work History</h2>
              <div className="border border-gray-300 p-6">
                <h3 className="font-bold text-base">Marketing Website</h3>
                <p className="text-sm text-gray-500">by Cybrosys Technlogies</p>
              </div>
            </div>
            {/* Ratings */}
            <div className="p-8 pt-0">
              <h2 className="font-bold text-xl mb-4">Reviews & Ratings</h2>
              <div className="flex gap-8">
                <div>
                  <p className="text-4xl font-bold">
                    4.5<span className="text-base">/5.0</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-3">(10 Reviews)</p>
                  <RatingBars />
                </div>
                <div className="w-full">
                  <span className="text-sm font-bold mr-2">Your rating </span>
                  <Rating />
                  <textarea
                    className="textarea textarea-bordered w-full mt-3"
                    placeholder="Write a review"></textarea>
                  <button className="btn btn-primary text-white w-full mt-3">
                    Add Review
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentProfile;
