"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../_ui/use-toast";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { toast } = useToast();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    Promise.all(
      Array.from(files).map(async (file: any) => {
        // read from files

        const arrayBuffer = await file.arrayBuffer();

        return {
          filename: file.name,
          content: Buffer.from(arrayBuffer).toString("base64"), // convert to binary for transport
          contentType: file.type,
        };
      })
    )
      .then((processedFiles) => setSelectedFiles(processedFiles))
      .catch((error) => console.log(error));
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          files: selectedFiles,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast({
          title: "message sent",
          description:
            "Thanks for reaching out, i'll get back to you as soon as possible",
        });
        reset(); // Reset the form fields
        setSelectedFiles([]); // reset file upload
      } else {
        toast({
          title: "Error",
          description: "There was an error sending your request",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: `${error}`,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hi Marlone! <br />
      <br />
      My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      and I’m reaching out to explore the possibility of working together on an
      exciting project
      <br />
      <br />
      Here are a few details about the project: <br />
      <textarea
        {...register("projectDetails", {})}
        placeholder="My project is about..."
        rows={8}
        className="w-full my-4 outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      If this aligns with your expertise and interests, I’d love to discuss it
      further. Feel free to reach out to me at
      <br />
      <input
        type="email"
        placeholder="your@email"
        {...register("email", { required: true })}
        className="w-1/2 outline-none border-0 p-0 mx-2 my-4 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      <br />
      Attached files:
      <input
        type="file"
        multiple
        {...register("files")}
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mt-4"
      />
      <ul className="mt-4 h-16 overflow-scroll">
        {selectedFiles.map((file, index) => (
          <li key={index} className="text-sm text-gray-700">
            {file.filename}
          </li>
        ))}
      </ul>
      <button
        type="submit"
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer !shadow-[5px_5px_1px_1px_#000000] hover:bg-accentDark"
      >
        Send request
      </button>
    </form>
  );
}
