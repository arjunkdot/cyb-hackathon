import React from "react";
import Banner from "../components/general/Banner";
import TalentCard from "../components/jobs/TalentCard";
import { MdOutlineSearch } from "react-icons/md";
import TalentFilter from "../components/jobs/TalentFilter";

const TALENTS = [
  {
    id: "1",
    name: "Sean Daley",
    position: "VFX Artist",
    exp: 15,
    description:
      "Hi, I'm Sean Daley. I'm a visual artist with over 15+ years of experience. I have experience working small and large organization alike. I have a passion for creating beautiful visuals. I am currently working on my portfolio and hope to create some awesome visual work.",
    rating: 4.5,
    tags: ["VFX", "Motion graphics", "Illustration"],
  },
  {
    id: "2",
    name: "Danielle LaCroix",
    position: "Developer",
    exp: 7,
    rating: 3.6,
    description:
      "I have experience building full stack web applications using ME(A)RN stack.",
    tags: ["JavaScript", "MongoDB", "Next.js", "Angular", "React"],
  },
];
function JobsPage() {
  return (
    <div>
      <Banner
        title="Explore Talents"
        subtitle=" Find top rated talents for your next bit thing."
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
                />
              </label>
            </div>
            {TALENTS.map((talent) => (
              <TalentCard key={talent.id} {...talent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
