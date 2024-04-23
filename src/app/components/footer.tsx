import React from "react";

export default function Footer() {
  return (
    <footer className="h-full w-full flex flex-1 ">
      <div className=" w-2/6">
        <h1 className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none py-2">
          Marlone Akidiva
        </h1>
        <h1 className="text-primary underlined block whitespace-nowrap text-xl transition focus:outline-none">
          Full time Software Engineer
        </h1>

        <ul className="my-10 flex w-3/4 justify-between">
          <li>email</li>
          <li>github</li>
          <li>youtube</li>
          <li>linkedin</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className=" w-1/6">
        <p className="font-bold">Contact</p>
        <ul className="flex flex-col justify-around h-24">
          <li>Email Marlone</li>
          <li>Schedule a zoom call</li>
          <li>Book a slot on Calendly</li>
        </ul>

        <p className="font-bold mt-10">General</p>
        <ul className="flex flex-col justify-around h-48">
          <li>Blog</li>
          <li>Courses</li>
          <li>Discord</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </div>
      <div className=" w-1/6">
        <p className="font-bold">Sitemap</p>
        <ul className="flex flex-col justify-around h-48">
          <li>Blog</li>
          <li>Courses</li>
          <li>Discord</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </div>
      <div className="w-2/6">
        <p className="font-bold">Stay up to date</p>
        <p>
          Subscribe to the newsletter to stay up to date with articles, courses
          and much more!
        </p>
        <form action="">
          <div className="flex flex-col">
            <label className="my-4" htmlFor="">
              First name
            </label>
            <input className="border-2 border-black p-4" type="text" />
          </div>
          <div className="flex flex-col">
            <label className="my-4" htmlFor="">
              Email
            </label>
            <input className="border-2 border-black p-4" type="text" />
          </div>
          <button className="w-full border-2 border-black bg-black px-6 text-white rounded p-6 my-4">
            sign me up
          </button>
        </form>
      </div>
    </footer>
  );
}
