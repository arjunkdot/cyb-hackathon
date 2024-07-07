"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "./../../../lib/supabaseClient";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useCheckProfileExists } from "../../hooks/useCheckProfileExists";
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().min(1, "Job position is required"),
  experience: z.number().min(1, "Experience must be a positive number"),
  pay: z.number().min(1, "Pay must be a positive number"),
  hours_per_week: z.number().min(1, "Hours per week must be a positive number"),
  bio: z.string().min(1, "Description is required"),
});
type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;
function Onboarding() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    position: "",
    experience: 0,
    pay: 0,
    hours_per_week: 0,
    bio: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useCheckProfileExists("/dashboard", true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedData = formSchema.safeParse({
      name: formData.name,
      position: formData.position,
      experience: Number(formData.experience),
      pay: Number(formData.pay),
      hours_per_week: Number(formData.hours_per_week),
      bio: formData.bio,
    });

    if (!parsedData.success) {
      const errorObject = parsedData.error.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {});
      setErrors(errorObject);
    } else {
      setErrors({});
      setIsSubmitting(true);
      const { data, error } = await supabase
        .from("talents")
        .insert([{ id: uuidv4(), ...parsedData.data }]);

      setIsSubmitting(false);
      if (error) {
        console.error("Error inserting data: ", error.message);
      } else {
        console.log("Data inserted successfully: ", data);
        // Reset form data
        setFormData({
          name: "",
          position: "",
          experience: 0,
          pay: 0,
          hours_per_week: 0,
          bio: "",
        });

        router.push("/dashboard/");
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-gray-50">
      <div className="container py-8">
        <div className="max-w-[400px] mx-auto bg-white border border-gray-300 p-4">
          <h1 className="text-xl font-bold text-center mt-4">
            Let&apos;s get to know you
          </h1>
          <p className="text-center text-sm text-gray-500 leading-0 mt-2">
            Fill in your details so that we can tailor your experience.
          </p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-sm font-semibold">
                  What is your name?
                </span>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Jane Doe"
                className="input input-sm input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.name}
                </p>
              )}
            </label>
            <label className="form-control w-full max-w-xs mt-3">
              <div className="label">
                <span className="label-text text-sm font-semibold">
                  What is your job position?
                </span>
              </div>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="e.g. Software Engineer"
                className="input input-sm input-bordered w-full max-w-xs"
              />
              {errors.position && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.position}
                </p>
              )}
            </label>
            <label className="form-control w-full max-w-xs mt-3">
              <div className="label">
                <span className="label-text text-sm font-semibold">
                  How much experience do you have?
                </span>
              </div>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g. 5"
                min={0}
                className="input input-sm input-bordered w-full max-w-xs"
              />
              {errors.experience && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.experience}
                </p>
              )}
            </label>
            <label className="form-control w-full max-w-xs mt-3">
              <div className="label">
                <span className="label-text text-sm font-semibold">
                  How much do you charge per hour?
                </span>
              </div>
              <input
                type="number"
                name="pay"
                value={formData.pay}
                onChange={handleChange}
                placeholder="e.g. 2000"
                min={0}
                className="input input-sm input-bordered w-full max-w-xs"
              />
              {errors.pay && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.pay}
                </p>
              )}
            </label>
            <label className="form-control w-full max-w-xs mt-3">
              <div className="label">
                <span className="label-text text-sm font-semibold">
                  How much hour do you work per week?
                </span>
              </div>
              <input
                type="number"
                name="hours_per_week"
                value={formData.hours_per_week}
                onChange={handleChange}
                placeholder="e.g. 30"
                min={0}
                className="input input-sm input-bordered w-full max-w-xs"
              />
              {errors.hours_per_week && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.hours_per_week}
                </p>
              )}
            </label>
            <label className="form-control w-full max-w-xs mt-3">
              <div className="label">
                <span className="label-text text-sm font-semibold">
                  A short description of yourself
                </span>
              </div>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="textarea textarea-bordered h-16"
                placeholder="Write a bio"
              />
              {errors.bio && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.bio}
                </p>
              )}
            </label>
            <button
              type="submit"
              className="btn btn-primary w-full text-white font-bold mt-4"
              disabled={isSubmitting}>
              Complete Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
