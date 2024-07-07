"use client";
import React, { useState, useEffect } from "react";
import { MdCheck } from "react-icons/md";
import { supabase } from "@/lib/supabaseClient";
import { toast, ToastContainer } from "react-toastify";

function Dashboard() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    bio: "",
    experience: 0,
    payRange: 0,
    hours: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = supabase.auth.getUser();
        if (user) {
          // Fetch user profile data from Supabase
          const { data, error } = await supabase
            .from("talents")
            .select("*")
            .eq("user_id", (await user).data.user?.id!)
            .single();

          if (error) {
            throw error;
          }

          if (data) {
            setUserData({
              name: data.name || "",
              email: (await supabase.auth.getUser()).data.user?.email || "",
              bio: data.bio || "",
              experience: data.experience || 0,
              payRange: data.pay || 0,
              hours: data.hours_per_week || 0,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const user = supabase.auth.getUser();
      if (user) {
        // Update user profile data in Supabase
        const { error } = await supabase
          .from("talents")
          .update({
            name: userData.name,
            email: userData.email,
            experience: userData.experience,
            pay: userData.payRange,
            hours_per_week: userData.hours,
          })
          .eq("user_id", (await user).data.user?.id!);

        if (error) {
          throw error;
        }

        toast.success("profile updated successfully! ");
        // Optionally, add a success message or redirect after updating
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to updating profile.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <title>Profile - PixaJobs</title>
      <div className="bg-background py-2">
        <div className="container">
          <div className="breadcrumbs text-sm mb-0">
            <ul>
              <li>
                <a>Dashboard</a>
              </li>
              <li className="font-bold">
                <a>Edit Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-primary text-white"
              onClick={handleSaveChanges}
            >
              <MdCheck className="text-lg" />
              Save Changes
            </button>
          </div>
        </div>
        {/* Form */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Experience</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="experience"
              value={userData.experience}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pay Range</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="payRange"
              value={userData.payRange}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Hours</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="hours"
              value={userData.hours}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
              name="descrpiton"
              defaultValue={userData.bio}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
