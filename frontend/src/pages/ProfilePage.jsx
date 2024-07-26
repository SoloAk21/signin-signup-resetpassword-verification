import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import InputField from "../components/form/InputField";
import SelectField from "../components/form/SelectField";

const socialMediaData = [
  {
    name: "Facebook",
    channelName: "John's Facebook Page",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
      >
        {/* Telegram icon path */}
        <path
          d="M24.9436 6V12C24.9436 12.6 24.5443 13 23.9452 13C23.3461 13 22.9468 12.6 22.9468 12V8.4L15.159 16.2C14.7596 16.6 14.1605 16.6 13.7612 16.2L9.46789 11.9L2.67854 18.7C2.47885 18.9 2.27917 19 1.97964 19C1.68011 19 1.48042 18.9 1.28073 18.7C0.881358 18.3 0.881358 17.7 1.28073 17.3L8.76899 9.8C9.16836 9.4 9.76742 9.4 10.1668 9.8L14.4601 14.1L21.549 7H17.9546C17.3555 7 16.9562 6.6 16.9562 6C16.9562 5.4 17.3555 5 17.9546 5H23.9452C24.045 5 24.2447 5 24.3446 5.1C24.5443 5.2 24.7439 5.4 24.8438 5.6C24.9436 5.7 24.9436 5.9 24.9436 6Z"
          fill="#6D28D9"
        />
      </svg>
    ),
    subscribers: "500k",
    views: "1.2M",
    likes: "300k",
    profileLink: "https://facebook.com/johndoe",
    email: "johndoe@example.com",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/182px-Telegram_2019_Logo.svg.png",
  },
  {
    name: "Twitter",
    channelName: "Jane's Twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
      >
        {/* Telegram icon path */}
        <path
          d="M24.9436 6V12C24.9436 12.6 24.5443 13 23.9452 13C23.3461 13 22.9468 12.6 22.9468 12V8.4L15.159 16.2C14.7596 16.6 14.1605 16.6 13.7612 16.2L9.46789 11.9L2.67854 18.7C2.47885 18.9 2.27917 19 1.97964 19C1.68011 19 1.48042 18.9 1.28073 18.7C0.881358 18.3 0.881358 17.7 1.28073 17.3L8.76899 9.8C9.16836 9.4 9.76742 9.4 10.1668 9.8L14.4601 14.1L21.549 7H17.9546C17.3555 7 16.9562 6.6 16.9562 6C16.9562 5.4 17.3555 5 17.9546 5H23.9452C24.045 5 24.2447 5 24.3446 5.1C24.5443 5.2 24.7439 5.4 24.8438 5.6C24.9436 5.7 24.9436 5.9 24.9436 6Z"
          fill="#6D28D9"
        />
      </svg>
    ),
    subscribers: "300k",
    views: "600k",
    likes: "100k",
    profileLink: "https://twitter.com/janedoe",
    email: "janedoe@example.com",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/182px-Telegram_2019_Logo.svg.png",
  },
  {
    name: "Instagram",
    channelName: "Insta by Mike",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
      >
        {/* Telegram icon path */}
        <path
          d="M24.9436 6V12C24.9436 12.6 24.5443 13 23.9452 13C23.3461 13 22.9468 12.6 22.9468 12V8.4L15.159 16.2C14.7596 16.6 14.1605 16.6 13.7612 16.2L9.46789 11.9L2.67854 18.7C2.47885 18.9 2.27917 19 1.97964 19C1.68011 19 1.48042 18.9 1.28073 18.7C0.881358 18.3 0.881358 17.7 1.28073 17.3L8.76899 9.8C9.16836 9.4 9.76742 9.4 10.1668 9.8L14.4601 14.1L21.549 7H17.9546C17.3555 7 16.9562 6.6 16.9562 6C16.9562 5.4 17.3555 5 17.9546 5H23.9452C24.045 5 24.2447 5 24.3446 5.1C24.5443 5.2 24.7439 5.4 24.8438 5.6C24.9436 5.7 24.9436 5.9 24.9436 6Z"
          fill="#6D28D9"
        />
      </svg>
    ),
    subscribers: "800k",
    views: "2M",
    likes: "500k",
    profileLink: "https://instagram.com/mikeshow",
    email: "mikeshow@example.com",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/182px-Telegram_2019_Logo.svg.png",
  },
  {
    name: "TikTok",
    channelName: "TikTok Channel",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
      >
        {/* Telegram icon path */}
        <path
          d="M24.9436 6V12C24.9436 12.6 24.5443 13 23.9452 13C23.3461 13 22.9468 12.6 22.9468 12V8.4L15.159 16.2C14.7596 16.6 14.1605 16.6 13.7612 16.2L9.46789 11.9L2.67854 18.7C2.47885 18.9 2.27917 19 1.97964 19C1.68011 19 1.48042 18.9 1.28073 18.7C0.881358 18.3 0.881358 17.7 1.28073 17.3L8.76899 9.8C9.16836 9.4 9.76742 9.4 10.1668 9.8L14.4601 14.1L21.549 7H17.9546C17.3555 7 16.9562 6.6 16.9562 6C16.9562 5.4 17.3555 5 17.9546 5H23.9452C24.045 5 24.2447 5 24.3446 5.1C24.5443 5.2 24.7439 5.4 24.8438 5.6C24.9436 5.7 24.9436 5.9 24.9436 6Z"
          fill="#6D28D9"
        />
      </svg>
    ),
    subscribers: "200k",
    views: "800k",
    likes: "150k",
    profileLink: "https://tiktok.com/@tiktokchannel",
    email: "tiktokchannel@example.com",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/182px-Telegram_2019_Logo.svg.png",
  },
];

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [userType, setUserType] = useState("");
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  useEffect(() => {
    // Sample user data
    const sampleUserData = {
      _id: "64a8a9b0f1e4c3e5d6f7a8b9",
      username: "johndoe",
      email: "johndoe@example.com",
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-01-01",
      city: "New York",
      biography: "Lorem ipsum dolor sit amet.",
      gender: "Male",
      userType: "influencer",
      platforms: ["Instagram", "YouTube"],
      active: true,
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      __v: 0,
    };

    // Set sample user data
    setUserData(sampleUserData);
    setUserType(sampleUserData.userType);
  }, []);

  const [theme, setTheme] = useState("Beginner");
  const [layout, setLayout] = useState("Layout Vertical");

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleLayoutChange = (selectedLayout) => {
    setLayout(selectedLayout);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    let payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    // Reset errors
    setErrors({});

    axios
      .post("/api/user/profile", payload)
      .then((response) => {
        console.log("Profile updated successfully", response.data);
      })
      .catch((error) => {
        console.error("Error updating profile", error);
        // Handle errors if needed
        setErrors({ general: "Failed to update profile. Please try again." });
      });
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 py-6 px-4 md:px-8 lg:px-12"
      >
        <div className="bg-white dark:bg-gray-800 rounded shadow-md">
          <div className="relative mt-8">
            <img
              src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg"
              alt="Cover"
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded" />
            <div className="absolute top-4 right-4 cursor-pointer text-xs text-gray-100">
              Change Cover Photo
            </div>
            <div className="absolute bottom-0 -mb-12 left-12">
              <img
                src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover shadow"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-full z-10 flex items-center justify-center text-gray-100 cursor-pointer">
                <p className="text-xs">Edit Picture</p>
              </div>
            </div>
          </div>

          <div className="mt-10 px-4 md:px-8">
            <div className="border-b border-gray-300 dark:border-gray-700 py-5">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Personal Information
              </p>
            </div>
            <div className="mt-4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField
                  label="First Name"
                  name="firstName"
                  type="text"
                  value={userData.firstName}
                  onChange={() => {}}
                  placeholder="First Name"
                  error={errors.firstName}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value={userData.lastName}
                  onChange={() => {}}
                  placeholder="Last Name"
                  error={errors.lastName}
                />
                <InputField
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={userData.dateOfBirth}
                  onChange={() => {}}
                  error={errors.dateOfBirth}
                />
                <InputField
                  label="City"
                  name="city"
                  type="text"
                  value={userData.city}
                  onChange={() => {}}
                  placeholder="City"
                  error={errors.city}
                />
                <SelectField
                  label="Theme"
                  options={["Beginner", "Intermediate", "Expert"]}
                  value={theme}
                  onChange={handleThemeChange}
                />
                <SelectField
                  label="Default Layout"
                  options={[
                    "Layout Vertical",
                    "Layout Horizontal",
                    "Layout Primary",
                  ]}
                  value={layout}
                  onChange={handleLayoutChange}
                />
                <InputField
                  label="Username"
                  name="username"
                  type="text"
                  value={userData.username}
                  onChange={() => {}}
                  placeholder="@example"
                  error={errors.username}
                />
                <InputField
                  label="Company Name"
                  name="companyName"
                  type="text"
                  value={userData.companyName}
                  onChange={() => {}}
                  placeholder="Company Name"
                  error={errors.companyName}
                />

                <div>
                  <label
                    htmlFor="biography"
                    className="block text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    About
                  </label>
                  <textarea
                    id="biography"
                    name="biography"
                    defaultValue={userData.biography}
                    className="w-full bg-transparent border border-gray-300 dark:border-gray-700 p-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="Let the world know who you are"
                    rows={5}
                  />
                  <p className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Character Limit: 200
                  </p>
                </div>
              </div>

              <div className="  mt-10 rounded bg-gray-100 dark:bg-gray-700">
                <div className="xl:w-full py-5 px-2 md:px-8">
                  <div className="flex items-center mx-auto">
                    <div className="container mx-auto">
                      <div className="mx-auto xl:w-full">
                        <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                          Alerts
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 pt-1">
                          Get updates of any new activity or features. Turn
                          on/off your preferences
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container mx-auto pb-6">
                  <div className="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                    <p className="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">
                      Via Email
                    </p>
                  </div>
                  <div className="px-4 md:px-8">
                    <div className="flex justify-between items-center mb-8 mt-4">
                      <div className="w-9/12">
                        <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">
                          Comments
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Get notified when a post or comment is made
                        </p>
                      </div>
                      <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                        <input
                          type="checkbox"
                          name="email_comments"
                          id="toggle1"
                          className="checkbox hidden"
                        />
                        <label
                          htmlFor="toggle1"
                          className="toggle-label  w-12 h-6 bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer flex items-center relative"
                        >
                          <span className="toggle-knob w-6 h-6 bg-white rounded-full absolute left-0"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-9/12">
                        <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">
                          Job Applications
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Get notified when a candidate applies to a job posting
                        </p>
                      </div>
                      <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                        <input
                          type="checkbox"
                          name="email_job_application"
                          id="toggle2"
                          className="checkbox hidden"
                        />
                        <label
                          htmlFor="toggle2"
                          className="toggle-label  w-12 h-6 bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer flex items-center relative"
                        >
                          <span className="toggle-knob w-6 h-6 bg-white rounded-full absolute left-0"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-9/12">
                        <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">
                          Product Updates
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Get notified when there is a new product feature or
                          upgrades
                        </p>
                      </div>
                      <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                        <input
                          type="checkbox"
                          name="email_product_update"
                          id="toggle3"
                          className="checkbox hidden"
                        />
                        <label
                          htmlFor="toggle3"
                          className="toggle-label  w-12 h-6 bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer flex items-center relative"
                        >
                          <span className="toggle-knob w-6 h-6 bg-white rounded-full absolute left-0"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pb-4 border-b border-gray-300 dark:border-gray-700 px-8">
                    <div className="flex items-center text-gray-800 dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bell"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                      </svg>
                      <p className="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">
                        Push Notifications
                      </p>
                    </div>
                  </div>
                  <div className="px-4 md:px-8">
                    <div className="flex justify-between items-center mb-8 mt-4">
                      <div className="w-9/12">
                        <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">
                          Comments
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Get notified when a post or comment is made
                        </p>
                      </div>
                      <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                        <input
                          type="checkbox"
                          name="notification_comment"
                          id="toggle4"
                          className="checkbox hidden"
                        />
                        <label
                          htmlFor="toggle4"
                          className="toggle-label  w-12 h-6 bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer flex items-center relative"
                        >
                          <span className="toggle-knob w-6 h-6 bg-white rounded-full absolute left-0"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-9/12">
                        <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">
                          Job Applications
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Get notified when a candidate applies to a job posting
                        </p>
                      </div>
                      <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                        <input
                          type="checkbox"
                          name="notification_application"
                          id="toggle5"
                          className="checkbox hidden"
                        />
                        <label
                          htmlFor="toggle5"
                          className="toggle-label  w-12 h-6 bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer flex items-center relative"
                        >
                          <span className="toggle-knob w-6 h-6 bg-white rounded-full absolute left-0"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-9/12">
                        <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">
                          Product Updates
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Get notified when there is a new product feature or
                          upgrades
                        </p>
                      </div>
                      <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                        <input
                          type="checkbox"
                          name="notification_product_update"
                          id="toggle6"
                          className="checkbox hidden"
                        />
                        <label
                          htmlFor="toggle6"
                          className="toggle-label  w-12 h-6 bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer flex items-center relative"
                        >
                          <span className="toggle-knob w-6 h-6 bg-white rounded-full absolute left-0"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {socialMediaData.map((data) => (
                <div
                  key={data.name}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
                >
                  <img
                    className="h-16 w-16 rounded-full"
                    src={data.profileImage}
                    alt={`${data.channelName} Profile`}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {data.channelName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Subscribers: {data.subscribers}
                      <br />
                      Views: {data.views}
                      <br />
                      Likes: {data.likes}
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      Profile Link:{" "}
                      <a
                        href={data.profileLink}
                        className="text-indigo-700 hover:underline"
                      >
                        {data.profileLink}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <button
              type="button"
              className="border border-gray-300 dark:border-gray-700 rounded px-8 py-2 text-sm text-gray-800 dark:text-gray-100 hover:border-gray-600 dark:hover:border-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-700 text-white rounded px-8 py-2 text-sm hover:bg-indigo-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>{" "}
    </>
  );
};

export default ProfilePage;
