import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const [submitState, setSubmitState] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.sendForm(
        // "service_mmx23ii",
        // "template_rer61k9",
        form.current
        // "twcfsdyMRI2RLLHE1"
      );
      document.form.reset();
      setSubmitState(true);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h5 className="mb-4 text-bg-cta font-medium">Get started</h5>
      <h4 className="text-font-primary font-medium mb-8 md:mb-12">
        FlyKick is launching soon, join the waitlist today
      </h4>
      <form
        className="flex flex-col gap-4"
        id="onboard"
        ref={form}
        onSubmit={submitHandler}
        name="form"
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex flex-col gap-1 w-full">
            <label
              for="first"
              className="text-gray-500 font-medium text-sm ml-1"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              name="first"
              id="first"
              className="border rounded px-4 py-2 text-sm"
              required
              min="2"
              max="30"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              for="last"
              className="text-gray-500 font-medium text-sm ml-1"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Smith"
              name="last"
              id="last"
              className="border rounded px-4 py-2 text-sm"
              required
              min="2"
              max="30"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex flex-col gap-1 w-full">
            <label
              for="email"
              className="text-gray-500 font-medium text-sm ml-1"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="johnsmith@gmail.com"
              name="email"
              id="email"
              className="border rounded px-4 py-2 text-sm"
              required
              min="2"
              max="30"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              for="phone"
              className="text-gray-500 font-medium text-sm ml-1"
            >
              Phone
            </label>
            <input
              type="text"
              placeholder="0424 073 944"
              name="phone"
              id="phone"
              className="border rounded px-4 py-2 text-sm"
              required
              min="2"
              max="30"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex flex-col gap-1 w-full">
            <label
              for="company"
              className="text-gray-500 font-medium text-sm ml-1"
            >
              Company Name
            </label>
            <input
              type="text"
              placeholder="John Smith Finance"
              name="company"
              id="company"
              className="border rounded px-4 py-2 text-sm"
              required
              min="2"
              max="30"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label for="job" className="text-gray-500 font-medium text-sm ml-1">
              Job Title
            </label>
            <input
              type="text"
              placeholder="CEO"
              name="job"
              id="job"
              className="border rounded px-4 py-2 text-sm"
              required
              min="2"
              max="30"
            />
          </div>
        </div>
        {submitState && (
          <button className="bg-bg-cta text-white w-fit mt-8">
            Message sent
          </button>
        )}
        {!submitState && (
          <button className="bg-bg-cta text-white w-fit mt-8 hover:bg-white hover:text-bg-cta border border-bg-cta transition-all duration-150">
            Join the waitlist
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
