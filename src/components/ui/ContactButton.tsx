"use client";

import { ContactModal, useContactModal } from "./index";

interface ContactButtonProps {
  inquiryType: string;
  children: React.ReactNode;
  className?: string;
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
}

export default function ContactButton({
  inquiryType,
  children,
  className = "bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold",
  title,
  description,
  customFields,
}: ContactButtonProps) {
  const { isOpen, selectedInquiryType, openModal, closeModal } =
    useContactModal();

  return (
    <>
      <button onClick={() => openModal(inquiryType)} className={className}>
        {children}
      </button>

      <ContactModal
        isOpen={isOpen}
        onClose={closeModal}
        inquiryType={selectedInquiryType}
        title={title}
        description={description}
        customFields={customFields}
      />
    </>
  );
}
