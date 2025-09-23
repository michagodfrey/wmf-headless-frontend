"use client";

import { useState, useEffect } from "react";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryType: string;
  title?: string;
  description?: string;
  customFields?: Array<{
    name: string;
    type: "text" | "email" | "tel" | "textarea" | "select";
    label: string;
    required?: boolean;
    options?: string[];
    placeholder?: string;
  }>;
  initialValues?: Record<string, string>;
  recipientKey?: string;
}

interface InquiryConfig {
  title: string;
  description: string;
  fields: Array<{
    name: string;
    type: "text" | "email" | "tel" | "textarea" | "select";
    label: string;
    required?: boolean;
    options?: string[];
    placeholder?: string;
  }>;
}

const inquiryConfigs: Record<string, InquiryConfig> = {
  volunteer: {
    title: "Volunteer with WMF",
    description:
      "Thank you for your interest in volunteering! Please share your details and we'll get back to you with opportunities that match your skills and interests.",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        name: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "Enter your email address",
      },
      {
        name: "phone",
        type: "tel",
        label: "Phone Number",
        placeholder: "Enter your phone number",
      },
      {
        name: "interests",
        type: "select",
        label: "Areas of Interest",
        required: true,
        options: [
          "Peer counseling support",
          "Event coordination",
          "Administrative assistance",
          "Community outreach",
          "Other",
        ],
      },
      {
        name: "availability",
        type: "select",
        label: "Weekly Availability",
        required: true,
        options: ["1-3 hours", "4-6 hours", "7-10 hours", "10+ hours"],
      },
      {
        name: "experience",
        type: "textarea",
        label: "Relevant Experience",
        placeholder:
          "Tell us about any relevant experience or skills you have...",
      },
      {
        name: "motivation",
        type: "textarea",
        label: "Why do you want to volunteer with WMF?",
        required: true,
        placeholder: "Share your motivation for wanting to help...",
      },
    ],
  },
  peerCounselor: {
    title: "Become a Peer Counselor",
    description:
      "Join our peer counseling program and help other women on their journey to recovery. We'll provide comprehensive training and ongoing support.",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        name: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "Enter your email address",
      },
      {
        name: "phone",
        type: "tel",
        label: "Phone Number",
        placeholder: "Enter your phone number",
      },
      {
        name: "recoveryExperience",
        type: "textarea",
        label: "Your Recovery Experience",
        required: true,
        placeholder:
          "Please share your personal experience with mental health recovery...",
      },
      {
        name: "motivation",
        type: "textarea",
        label: "Why do you want to become a peer counselor?",
        required: true,
        placeholder: "Tell us about your motivation...",
      },
      {
        name: "availability",
        type: "select",
        label: "Training Availability",
        required: true,
        options: ["Weekdays", "Weekends", "Evenings", "Flexible"],
      },
      {
        name: "commitment",
        type: "select",
        label: "Long-term Commitment",
        required: true,
        options: ["6 months", "1 year", "2+ years"],
      },
    ],
  },
  partner: {
    title: "Partner With WMF",
    description:
      "We're excited about potential collaboration! Let's discuss how we can work together to expand our impact in the community.",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Contact Name",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        name: "organization",
        type: "text",
        label: "Organization Name",
        required: true,
        placeholder: "Enter your organization name",
      },
      {
        name: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "Enter your email address",
      },
      {
        name: "phone",
        type: "tel",
        label: "Phone Number",
        placeholder: "Enter your phone number",
      },
      {
        name: "partnershipType",
        type: "select",
        label: "Type of Partnership",
        required: true,
        options: [
          "Corporate partnership",
          "Community organization collaboration",
          "Healthcare provider network",
          "Educational institution partnership",
          "Other",
        ],
      },
      {
        name: "proposal",
        type: "textarea",
        label: "Partnership Proposal",
        required: true,
        placeholder: "Describe your proposed partnership or collaboration...",
      },
      {
        name: "resources",
        type: "textarea",
        label: "Resources You Can Offer",
        placeholder: "What resources, expertise, or support can you provide?",
      },
    ],
  },
  fundraise: {
    title: "Fundraising Opportunities",
    description:
      "Thank you for your interest in fundraising for WMF! Let's discuss how you can help support our mission through fundraising initiatives.",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        name: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "Enter your email address",
      },
      {
        name: "phone",
        type: "tel",
        label: "Phone Number",
        placeholder: "Enter your phone number",
      },
      {
        name: "fundraisingType",
        type: "select",
        label: "Fundraising Type",
        required: true,
        options: [
          "Community fundraising event",
          "Online fundraising campaign",
          "Corporate matching program",
          "Legacy giving",
          "Other",
        ],
      },
      {
        name: "eventDetails",
        type: "textarea",
        label: "Event or Campaign Details",
        placeholder: "Describe your fundraising event or campaign idea...",
      },
      {
        name: "timeline",
        type: "select",
        label: "Timeline",
        required: true,
        options: ["Within 1 month", "1-3 months", "3-6 months", "6+ months"],
      },
      {
        name: "goals",
        type: "textarea",
        label: "Fundraising Goals",
        placeholder: "What are your fundraising goals and expectations?",
      },
    ],
  },
  awareness: {
    title: "Spread Awareness",
    description:
      "Help us reach more women who need support by sharing our mission and programs in your community.",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        name: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "Enter your email address",
      },
      {
        name: "phone",
        type: "tel",
        label: "Phone Number",
        placeholder: "Enter your phone number",
      },
      {
        name: "awarenessType",
        type: "select",
        label: "Awareness Activities",
        required: true,
        options: [
          "Social media advocacy",
          "Community presentations",
          "Resource distribution",
          "Event promotion",
          "Other",
        ],
      },
      {
        name: "community",
        type: "text",
        label: "Target Community",
        required: true,
        placeholder: "Which community would you like to reach?",
      },
      {
        name: "reach",
        type: "select",
        label: "Expected Reach",
        required: true,
        options: [
          "10-50 people",
          "50-100 people",
          "100-500 people",
          "500+ people",
        ],
      },
      {
        name: "message",
        type: "textarea",
        label: "Additional Information",
        placeholder: "Any additional details about your awareness campaign...",
      },
    ],
  },
  board: {
    title: "Join Our Board",
    description:
      "Contribute your expertise and leadership to help guide our organization's strategic direction and governance.",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        name: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "Enter your email address",
      },
      {
        name: "phone",
        type: "tel",
        label: "Phone Number",
        placeholder: "Enter your phone number",
      },
      {
        name: "expertise",
        type: "select",
        label: "Areas of Expertise",
        required: true,
        options: [
          "Strategic leadership",
          "Financial management",
          "Governance and compliance",
          "Community relations",
          "Mental health advocacy",
          "Non-profit management",
          "Other",
        ],
      },
      {
        name: "experience",
        type: "textarea",
        label: "Professional Experience",
        required: true,
        placeholder: "Describe your relevant professional experience...",
      },
      {
        name: "motivation",
        type: "textarea",
        label: "Why do you want to join our board?",
        required: true,
        placeholder: "Share your motivation and what you hope to contribute...",
      },
      {
        name: "availability",
        type: "select",
        label: "Board Meeting Availability",
        required: true,
        options: [
          "Monthly meetings",
          "Bi-monthly meetings",
          "Quarterly meetings",
          "As needed",
        ],
      },
    ],
  },
};

export default function ContactModal({
  isOpen,
  onClose,
  inquiryType,
  title,
  description,
  customFields,
  initialValues,
  recipientKey,
}: ContactModalProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get configuration for the inquiry type
  const config = customFields
    ? {
        title: title || "Contact Us",
        description:
          description ||
          "Please fill out the form below and we'll get back to you soon.",
        fields: customFields,
      }
    : inquiryConfigs[inquiryType] || inquiryConfigs.volunteer;

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData(initialValues || {});
    }
  }, [isOpen, initialValues]);

  // Handle form input changes
  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryType,
          recipientKey,
          formData,
          meta: {
            source:
              typeof window !== "undefined" ? window.location.pathname : "",
          },
        }),
      });

      if (!res.ok) throw new Error("Failed to send.");

      alert("Thank you for your interest! We'll be in touch soon.");
      // Close modal and reset form
      onClose();
      setFormData({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
          <div>
            <h2 className="text-2xl font-bold text-[#374151]">
              {config.title}
            </h2>
            <p className="text-[#6B7280] mt-1">{config.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#6B7280] hover:text-[#374151] transition-colors p-2 cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {config.fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={4}
                  className="w-full px-3 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#A5375C] focus:border-transparent resize-none"
                />
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  required={field.required}
                  aria-label={field.label}
                  className="w-full px-3 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#A5375C] focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#A5375C] focus:border-transparent"
                />
              )}
            </div>
          ))}

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer flex-1 px-6 py-3 border border-[#D1D5DB] text-[#374151] rounded-lg hover:bg-[#F9FAFB] transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer flex-1 bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
