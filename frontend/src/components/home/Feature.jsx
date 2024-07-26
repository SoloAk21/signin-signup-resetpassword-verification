import React from "react";

export default function Feature() {
  return (
    <div className="container p-6 px-6 mx-auto ">
      <div className="mb-16 text-center">
        <h2 className="text-base font-semibold tracking-wide text-[var(--primary)] uppercase">
          Features
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-[var(--text-color)] sm:text-4xl">
          Simplifying Influencer Marketing
        </p>
      </div>
      <div className="flex flex-wrap my-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full p-8 border-b md:w-1/2 lg:w-1/3"
            style={{
              borderRight:
                (index + 1) % 3 !== 0
                  ? "1px solid var(--card-bg-color)"
                  : "none",
              borderBottom:
                index < features.length - 3
                  ? "1px solid var(--card-bg-color)"
                  : "none",
            }}
          >
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-[var(--primary)]"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={feature.iconPath}></path>
              </svg>
              <div className="ml-4 text-xl text-[var(--text-color)]">
                {feature.title}
              </div>
            </div>
            <p className="leading-loose text-[var(--text-color)] text-md">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    title: "Easy Registration",
    description:
      "Join the platform quickly with a simple registration process, making it easy for influencers and companies to get started.",
    iconPath:
      "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
  },
  {
    title: "Detailed Profiles",
    description:
      "View comprehensive profiles with key information about influencers and companies, helping you make informed decisions.",
    iconPath:
      "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
  },
  {
    title: "Smart Matching",
    description:
      "Find the best partners quickly with intelligent search and a scoring system that recommends the best collaborations.",
    iconPath:
      "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
  },
  {
    title: "Secure Messaging",
    description:
      "Communicate safely with secure messaging tools, ensuring your conversations are private and protected.",
    iconPath:
      "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
  },
  {
    title: "Digital Agreements",
    description:
      "Easily create and manage agreements online, making it simple to formalize partnerships and keep track of terms.",
    iconPath:
      "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
  },
  {
    title: "Integrated Payments",
    description:
      "Handle payments directly on the platform, ensuring timely and secure transactions for all parties involved.",
    iconPath:
      "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
  },
  {
    title: "Feedback System",
    description:
      "Build trust within the community with a review system that allows users to leave feedback and ratings.",
    iconPath:
      "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
  },
  {
    title: "User Experience Focus",
    description:
      "Enjoy a seamless and intuitive interface designed to make influencer marketing more accessible and efficient.",
    iconPath:
      "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
  },
  {
    title: "User Experience Focus",
    description:
      "Enjoy a seamless and intuitive interface designed to make influencer marketing more accessible and efficient.",
    iconPath:
      "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
  },
];
