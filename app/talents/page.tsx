"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Loading from "../components/general/Loading";
import TalentCard from "../components/jobs/TalentCard";
import { MdOutlineSearch } from "react-icons/md";
import Banner from "../components/general/banner";
import TalentFilter from "../components/jobs/TalentFilter";

const parseExperienceRange = (experience: {
  split: (arg0: string) => {
    (): any;
    new (): any;
    map: { (arg0: NumberConstructor): [any, any]; new (): any };
  };
}) => {
  const [min, max] = experience.split("-").map(Number);
  return { min, max: max || Infinity };
};

const jobMatchesExperienceFilter = (user: never, selectedFilters: any[]) => {
  if (selectedFilters.length === 0) return true;

  const experienceRequired = user.experience;
  return selectedFilters.some((filter: any) => {
    const { min, max } = parseExperienceRange(filter);
    return experienceRequired >= min && experienceRequired <= max;
  });
};

const TalentProfile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usersData, setUsersData] = useState([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<string[]>([]); // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        setIsLoading(true);

        const { data, error } = await supabase.from("talents").select("*");

        if (error) {
          throw error;
        }

        if (data) {
          setUsersData(data);
        }
      } catch (error) {
        console.error("Error fetching users data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsersData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (filter: string) => {
    // Toggle filters
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  // Filter users based on search query and selected filters
  // Adjusted filtering logic
  const filteredUsers = usersData.filter((user) => {
    const matchesSearchQuery =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.position.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesExperience = jobMatchesExperienceFilter(user, selectedFilters);

    return matchesSearchQuery && matchesExperience;
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner
        title="Explore Talents"
        subtitle="Find top rated talents for your next big thing."
      />
      <div className="container my-8">
        <div className="grid grid-cols-[350px_1fr] gap-4">
          <div>
            <TalentFilter
              selectedFilters={filters}
              setSelectedFilters={handleFilterChange}
            />
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
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TalentCard key={user.id} {...user} />
              ))
            ) : (
              <p>No users found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentProfile;
