import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const GetInTouch = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact number is required.";
    if (!/^\d+$/.test(formData.contactNumber))
      newErrors.contactNumber = "Contact number must be numeric.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (!captchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }
    alert("Form submitted successfully!");
    // Reset form
    setFormData({
      fullName: "",
      contactNumber: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };
  return (
    <div id="contact" className="py-[5rem] relative">
      <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[2rem] right-3 -z-10"></div>
      <div className="blue-bg-shape bottom-[-2rem] left-[-2rem] -z-10 rotate-[-45deg]"></div>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div data-aos="fade-right" className="flex flex-col gap-5 text-white">
          <h1 className="heading text-center lg:text-start">
            Ready to Lead with Innovation? <br /> Let’s Start Your Project
          </h1>
          <p className="description text-center lg:text-start">
            Reach out to discover how our tech solutions can propel your
            business forward.
          </p>
        </div>
        <div data-aos="fade-left" className="flex flex-col items-start gap-3">
          <p className="gradient-text uppercase">Let&apos;s connect</p>
          <div className="bg-gradient-to-r text-white from-primary/80 to-primary rounded-2xl w-fit p-7">
            <h2 className="text-3xl font-medium">
              Connect With Our Team to Get Started!
            </h2>
            <form
              // onSubmit={(e) => e.preventDefault()}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-3 mt-3"
            >
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                  <label htmlFor="">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your Full Name"
                    className="w-full outline-none p-3 rounded-lg text-black"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="">Email*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your mail"
                    className="w-full outline-none p-3 rounded-lg text-black"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                  <label htmlFor="">Subject*</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full outline-none p-3 rounded-lg text-black"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="">Phone Number*</label>
                  <input
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Enter number"
                    className="w-full outline-none p-3 rounded-lg text-black"
                  />
                  {errors.contactNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.contactNumber}
                    </p>
                  )}
                </div>
              </div>
              <div className="">
                <label htmlFor="">Message*</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Enter your massage"
                  className="w-full outline-none p-3 rounded-lg text-black"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="mt-4">
                <ReCAPTCHA
                  sitekey={"6Ld_lZsqAAAAAFeWRvgpMCYO2qNFhOWl9Frkteg6"}
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-white text-[#433d99] px-5 py-3 rounded-full hover:bg-[#5B3E9A] hover:text-white hover:-translate-y-1 duration-300 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
