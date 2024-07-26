import React, { useState } from "react";

export default function Team() {
  return (
    <div className=" mx-auto pt-16 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="text-center">
        <p className="text-lg  pb-3  font-bold text-[var(--primary)]">
          BUILDING TEAM
        </p>
        <h1 className="xl:text-4xl text-3xl text-center font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          The Talented People Behind the Scenes of the Organization
        </h1>
      </div>

      <div className="w-full px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 ${
                  index % 3 === 2 ? "lg:w-2/5" : ""
                }`}
              >
                <div className="rounded overflow-hidden shadow-md bg-[var(--card-bg-color)]">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={member.image}
                        alt="Team Member"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                      {member.name}
                    </div>
                    <p className="text-sm text-center">{member.position}</p>
                    <p className="text-center text-base pt-3 font-normal">
                      {member.bio}
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      {member.socialLinks.map((link, i) => (
                        <a key={i} href={link.url} className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`feather feather-${link.platform}`}
                            >
                              <path d={link.iconPath}></path>
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: "Andres Berlin",
    position: "Chief Executive Officer",
    bio: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    socialLinks: [
      {
        platform: "github",
        url: "javascript:void(0)",
        iconPath:
          "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
      },
      // ...other social links
    ],
  },
  {
    name: "Andres Berlin",
    position: "Chief Executive Officer",
    bio: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    socialLinks: [
      {
        platform: "github",
        url: "javascript:void(0)",
        iconPath:
          "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
      },
      // ...other social links
    ],
  },
  {
    name: "Andres Berlin",
    position: "Chief Executive Officer",
    bio: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    socialLinks: [
      {
        platform: "github",
        url: "javascript:void(0)",
        iconPath:
          "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
      },
      // ...other social links
    ],
  },
  // ...other team member objects
];
