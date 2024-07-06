import React from "react";
import {
  MdOutlineBookmarkBorder,
  MdOutlineArrowOutward,
  MdOutlineHandshake,
} from "react-icons/md";

function TalentProfile() {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-gray-100 py-10">
      <div className="container bg-white border border-gray-300">
        <div className="border-b border-gray-300 p-8 flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold mb-1">Job Title</h1>
            </div>
            <p className="text-gray-500">Company Name</p>
          </div>
          <div className="flex flex-wrap space-x-1">
            <a href="#" className="btn btn-primary text-white">
              <MdOutlineArrowOutward className="text-lg" />
              Apply
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
                <div className="stat-value text-xl mt-1">3 Years</div>
              </div>
              <div className="stat">
                <div className="stat-title text-xs font-bold">Pay Range</div>
                <div className="stat-value text-xl mt-1">$1000 - $2000</div>
              </div>
            </div>
            {/* End of Stats */}
            <div className="mt-8">
              <h3 className="text-base font-bold">Location</h3>
              <p className="text-sm text-gray-500">Remote</p>
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
            <div className="p-8">
              <h2 className="font-bold text-xl mb-4">Job Description</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                ipsum quam qui ipsam itaque voluptas impedit eaque tempore
                commodi. Quia ab officiis sunt perferendis incidunt sint dicta,
                eos iure nobis cum est. Delectus a id dolor vel obcaecati quae
                eius aliquam. Laudantium quam ex voluptates laborum nihil cumque
                eaque repellat dolor! Culpa pariatur, ipsa, exercitationem aut
                dolorum, molestias quis recusandae in accusantium consequatur
                inventore distinctio aspernatur illum nam similique expedita
                temporibus incidunt quia cum voluptas vitae deleniti? Quos ad
                explicabo necessitatibus tenetur, molestias similique sapiente
                dicta praesentium ratione est sed. Error ab et iure eos. Neque
                fugiat quibusdam veritatis dignissimos at sint accusamus nulla
                laborum autem magnam officiis dolores et fuga laboriosam, ut ad
                qui repellendus aliquam? Exercitationem, earum ducimus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentProfile;
