import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/logo.jsx";
import axios from "axios";

const MembershipApplicationPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    familyName: "",
    gender: "",
    email: "",
    country: "",
    mobile: "",

    // Professional Information
    jobTitle: "",
    jobClassification: "",
    highestQualification: "",
    department: "",
    institution: "",
    yearsInAcademia: "",

    // Research Information
    researchInterests: "",
    subjectClassification: "",
    areasOfSpecialization: "",

    // Contact & Collaboration
    contactPersonInstitution: "",
    contactPersonName: "",
    areasForCollaboration: "",
    confidentialityConsent: false,

    // Membership
    membershipType: "",
  });

  // Define membership types
  const membershipTypes = [
    {
      id: "regular",
      title: "Regular Membership",
      description:
        "For professionals and academics in AI and informatics fields",
      benefits: [
        "Access to all IAAII resources and publications",
        "Voting rights in IAAII elections",
        "Discounted event registration",
      ],
    },
    {
      id: "student",
      title: "Student Membership",
      description:
        "For undergraduate and graduate students in relevant disciplines",
      benefits: [
        "Reduced membership fees",
        "Access to mentorship programs",
        "Student-focused networking opportunities",
      ],
    },
    {
      id: "institutional",
      title: "Institutional Membership",
      description:
        "For universities, research centers, and academic organizations",
      benefits: [
        "Multiple affiliated memberships",
        "Institutional recognition on IAAII platforms",
        "Special collaboration opportunities",
      ],
    },
    {
      id: "corporate",
      title: "Corporate Membership",
      description: "For companies and industry organizations",
      benefits: [
        "Partnership opportunities",
        "Industry forum participation",
        "Recruitment and showcase opportunities",
      ],
    },
    {
      id: "emeritus",
      title: "Emeritus Membership",
      description:
        "For retired professionals with significant contributions to the field",
      benefits: [
        "Honorary status",
        "Special recognition",
        "Lifetime access to basic resources",
      ],
    },
  ];

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.familyName)
        newErrors.familyName = "Family name is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid";
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    } else if (step === 2) {
      if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
      if (!formData.jobClassification)
        newErrors.jobClassification = "Job classification is required";
      if (!formData.highestQualification)
        newErrors.highestQualification = "Highest qualification is required";
      if (!formData.department) newErrors.department = "Department is required";
      if (!formData.institution)
        newErrors.institution = "Institution is required";
    } else if (step === 3) {
      if (!formData.researchInterests)
        newErrors.researchInterests = "Research interests are required";
    } else if (step === 4) {
      if (!formData.contactPersonName)
        newErrors.contactPersonName = "Contact person name is required";
      if (!formData.contactPersonInstitution)
        newErrors.contactPersonInstitution =
          "Contact person institution is required";
      if (!formData.areasForCollaboration)
        newErrors.areasForCollaboration =
          "Areas for collaboration are required";
      if (!formData.membershipType)
        newErrors.membershipType = "Please select a membership type";
      if (!formData.confidentialityConsent)
        newErrors.confidentialityConsent =
          "You must agree to the confidentiality consent";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setIsSubmitting(true);

      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/submit-form",
          formData
        );

        if (response.status === 200) {
          setShowSuccessModal(true);
        } else {
          console.error("Form submission failed:", response.data.message);
        }
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <Logo className="h-16" />
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Membership Application
        </h1>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[...Array(4)].map((_, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep > index + 1
                        ? "bg-green-500 text-white"
                        : currentStep === index + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > index + 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="mt-1 text-xs">
                    {index === 0 && "Personal"}
                    {index === 1 && "Professional"}
                    {index === 2 && "Research"}
                    {index === 3 && "Collaboration & Membership"}
                  </span>
                </div>

                {index < 3 && (
                  <div
                    className={`flex-1 h-1 ${
                      currentStep > index + 1 ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    First Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Family Name */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Family Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="familyName"
                    value={formData.familyName}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.familyName ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your family name"
                  />
                  {errors.familyName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.familyName}
                    </p>
                  )}
                </div>

                {/* Gender */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Gender: <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.gender ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Email Address: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Country */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Country: <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.country ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select your country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Democratic Republic of the Congo">
                      Democratic Republic of the Congo
                    </option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Eswatini">Eswatini</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Greece">Greece</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Holy See">Holy See</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="North Korea">North Korea</option>
                    <option value="North Macedonia">North Macedonia</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestine State">Palestine State</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Korea">South Korea</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>

                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>

                {/* Mobile */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Mobile: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.mobile ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Professional Information */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Professional Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Job Title: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.jobTitle ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your job title"
                  />
                  {errors.jobTitle && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.jobTitle}
                    </p>
                  )}
                </div>

                {/* Job Classification */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Job Classification: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobClassification"
                    value={formData.jobClassification}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.jobClassification ? "border-red-500" : ""
                    }`}
                    placeholder="Enter job classification"
                  />
                  {errors.jobClassification && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.jobClassification}
                    </p>
                  )}
                </div>

                {/* Highest Qualification */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Highest Qualification:{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.highestQualification ? "border-red-500" : ""
                    }`}
                    placeholder="Enter qualification"
                  />
                  {errors.highestQualification && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.highestQualification}
                    </p>
                  )}
                </div>

                {/* Department */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Department: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.department ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your department"
                  />
                  {errors.department && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.department}
                    </p>
                  )}
                </div>

                {/* Institution */}
                <div className="flex flex-col md:col-span-2">
                  <label className="mb-2 font-medium">
                    Institution: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.institution ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your institution"
                  />
                  {errors.institution && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.institution}
                    </p>
                  )}
                </div>

                {/* Years in Academia */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Number of Years in Academia:
                  </label>
                  <input
                    type="number"
                    name="yearsInAcademia"
                    value={formData.yearsInAcademia}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                    placeholder="Enter number of years"
                    min="0"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Research Information */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Research Information
              </h2>

              <div className="space-y-6">
                {/* Research Interests */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Area(s) of Research Interest:{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="researchInterests"
                    value={formData.researchInterests}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.researchInterests ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your research interests (comma separated)"
                    rows={3}
                  />
                  {errors.researchInterests && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.researchInterests}
                    </p>
                  )}
                </div>

                {/* Subject Classification */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Subject Classification:
                  </label>
                  <textarea
                    name="subjectClassification"
                    value={formData.subjectClassification}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                    placeholder="Enter subject classifications (comma separated)"
                    rows={3}
                  />
                </div>

                {/* Areas of Specialization */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Area(s) of Specialization:
                  </label>
                  <textarea
                    name="areasOfSpecialization"
                    value={formData.areasOfSpecialization}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                    placeholder="Enter areas of specialization (comma separated)"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact Person, Collaboration & Membership */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Person, Collaboration & Membership
              </h2>

              <div className="space-y-6">
                {/* Contact Person Institution */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Institution of your contact person:{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactPersonInstitution"
                    value={formData.contactPersonInstitution}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.contactPersonInstitution ? "border-red-500" : ""
                    }`}
                    placeholder="Enter institution name"
                  />
                  {errors.contactPersonInstitution && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactPersonInstitution}
                    </p>
                  )}
                </div>

                {/* Contact Person Name */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Name of contact person from the mentioned institution:{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.contactPersonName ? "border-red-500" : ""
                    }`}
                    placeholder="Enter contact person name"
                  />
                  {errors.contactPersonName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactPersonName}
                    </p>
                  )}
                </div>

                {/* Areas for Collaboration */}
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">
                    Area(s) for Collaboration:{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="areasForCollaboration"
                    value={formData.areasForCollaboration}
                    onChange={handleChange}
                    className={`border p-2 rounded-md ${
                      errors.areasForCollaboration ? "border-red-500" : ""
                    }`}
                    placeholder="Enter areas for collaboration (comma separated)"
                    rows={3}
                  />
                  {errors.areasForCollaboration && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.areasForCollaboration}
                    </p>
                  )}
                </div>

                {/* Membership Selection */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Membership Selection <span className="text-red-500">*</span>
                  </h3>

                  <div className="space-y-4">
                    {membershipTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`border rounded-lg p-4 transition-colors ${
                          formData.membershipType === type.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <label className="flex items-start cursor-pointer">
                          <input
                            type="radio"
                            name="membershipType"
                            value={type.id}
                            checked={formData.membershipType === type.id}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <div className="ml-3">
                            <span className="block text-md font-medium text-gray-900">
                              {type.title}
                            </span>
                            <span className="block text-sm text-gray-500 mt-1">
                              {type.description}
                            </span>

                            <ul className="mt-2 list-disc list-inside text-sm text-gray-600 pl-2">
                              {type.benefits.map((benefit, idx) => (
                                <li key={idx}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>

                  {errors.membershipType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.membershipType}
                    </p>
                  )}
                </div>

                {/* Confidentiality Consent */}
                <div className="flex items-start mt-8">
                  <div className="flex items-center h-5">
                    <input
                      id="confidentialityConsent"
                      name="confidentialityConsent"
                      type="checkbox"
                      checked={formData.confidentialityConsent}
                      onChange={handleChange}
                      className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                        errors.confidentialityConsent ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="confidentialityConsent"
                      className="font-medium text-gray-700"
                    >
                      Confidentiality Consent{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-500">
                      I agree to the confidentiality terms and conditions of
                      IAAII regarding the use of my personal and professional
                      information.
                    </p>
                    {errors.confidentialityConsent && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.confidentialityConsent}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Previous
              </button>
            )}

            <div className={`${currentStep > 1 ? "ml-auto" : ""}`}>
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 bg-[#182C49] text-white rounded-md hover:bg-[#0f1c30]"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-[#F47B20] text-white rounded-md hover:bg-[#e06610] flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Success Modal */}
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4"
            >
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Application Submitted!
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Thank you for your application. We will review your
                  information and get back to you soon.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setShowSuccessModal(false);
                      navigate("/");
                    }}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#182C49] border border-transparent rounded-md hover:bg-[#0f1c30] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MembershipApplicationPage;
