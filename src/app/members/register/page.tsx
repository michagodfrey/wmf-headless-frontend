export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#374151] mb-2">Join WMF</h1>
          <p className="text-[#6B7280]">
            Create your member account and start your journey with us
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[#374151]"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-[#A5375C] focus:border-[#A5375C] sm:text-sm"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-[#374151]"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-[#A5375C] focus:border-[#A5375C] sm:text-sm"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#374151]"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-[#A5375C] focus:border-[#A5375C] sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#374151]"
                >
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-[#A5375C] focus:border-[#A5375C] sm:text-sm"
                  placeholder="Create a password"
                />
                <p className="mt-1 text-xs text-[#6B7280]">
                  Must be at least 8 characters long
                </p>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-[#374151]"
                >
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-[#A5375C] focus:border-[#A5375C] sm:text-sm"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#374151]"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-[#A5375C] focus:border-[#A5375C] sm:text-sm"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-[#374151]"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-[#A5375C] focus:border-[#A5375C] sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-[#374151]"
              >
                City/Region
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-[#A5375C] focus:border-[#A5375C] sm:text-sm"
                placeholder="Enter your city or region"
              />
            </div>

            {/* Interests and Preferences */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-3">
                Areas of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center">
                  <input
                    id="workplace-support"
                    name="interests"
                    type="checkbox"
                    value="workplace-support"
                    className="h-4 w-4 text-[#A5375C] focus:ring-[#A5375C] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="workplace-support"
                    className="ml-2 block text-sm text-[#374151]"
                  >
                    Workplace Support
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="peer-counseling"
                    name="interests"
                    type="checkbox"
                    value="peer-counseling"
                    className="h-4 w-4 text-[#A5375C] focus:ring-[#A5375C] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="peer-counseling"
                    className="ml-2 block text-sm text-[#374151]"
                  >
                    Peer Counseling
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="workshops"
                    name="interests"
                    type="checkbox"
                    value="workshops"
                    className="h-4 w-4 text-[#A5375C] focus:ring-[#A5375C] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="workshops"
                    className="ml-2 block text-sm text-[#374151]"
                  >
                    Workshops & Training
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="volunteering"
                    name="interests"
                    type="checkbox"
                    value="volunteering"
                    className="h-4 w-4 text-[#A5375C] focus:ring-[#A5375C] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="volunteering"
                    className="ml-2 block text-sm text-[#374151]"
                  >
                    Volunteering
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="community-events"
                    name="interests"
                    type="checkbox"
                    value="community-events"
                    className="h-4 w-4 text-[#A5375C] focus:ring-[#A5375C] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="community-events"
                    className="ml-2 block text-sm text-[#374151]"
                  >
                    Community Events
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="newsletter"
                    name="interests"
                    type="checkbox"
                    value="newsletter"
                    className="h-4 w-4 text-[#A5375C] focus:ring-[#A5375C] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-2 block text-sm text-[#374151]"
                  >
                    Newsletter & Updates
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="howDidYouHear"
                className="block text-sm font-medium text-[#374151]"
              >
                How did you hear about WMF?
              </label>
              <select
                id="howDidYouHear"
                name="howDidYouHear"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-[#A5375C] focus:border-[#A5375C] sm:text-sm"
              >
                <option value="">Select an option</option>
                <option value="social-media">Social Media</option>
                <option value="friend-family">Friend or Family</option>
                <option value="workplace">Workplace</option>
                <option value="community-event">Community Event</option>
                <option value="search-engine">Search Engine</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="additionalInfo"
                className="block text-sm font-medium text-[#374151]"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-[#A5375C] focus:border-[#A5375C] sm:text-sm"
                placeholder="Tell us more about yourself, your interests, or how we can support you..."
              />
            </div>

            {/* Terms and Privacy */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-[#A5375C] focus:ring-[#A5375C] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-[#374151]">
                    I agree to the{" "}
                    <a href="#" className="text-[#A5375C] hover:text-[#C84862]">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#A5375C] hover:text-[#C84862]">
                      Privacy Policy
                    </a>
                    *
                  </label>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter-opt-in"
                    name="newsletterOptIn"
                    type="checkbox"
                    className="h-4 w-4 text-[#A5375C] focus:ring-[#A5375C] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="newsletter-opt-in" className="text-[#374151]">
                    I would like to receive newsletters and updates about WMF
                    programs and events
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#A5375C] hover:bg-[#C84862] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A5375C]"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#6B7280]">
              Already have an account?{" "}
              <a
                href="/members/login"
                className="font-medium text-[#A5375C] hover:text-[#C84862]"
              >
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-gradient-to-r from-[#A5375C]/10 to-[#C84862]/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#374151] mb-4">
            Member Benefits
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-[#A5375C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#6B7280]">
                  Access to exclusive support groups and resources
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-[#A5375C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#6B7280]">
                  Priority registration for workshops and events
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-[#A5375C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#6B7280]">
                  Connect with our community of supportive women
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-[#A5375C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#6B7280]">
                  Receive personalized support and guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
