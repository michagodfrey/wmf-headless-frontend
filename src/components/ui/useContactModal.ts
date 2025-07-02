import { useState } from "react";

export interface UseContactModalReturn {
  isOpen: boolean;
  selectedInquiryType: string;
  openModal: (inquiryType: string) => void;
  closeModal: () => void;
}

export function useContactModal(): UseContactModalReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInquiryType, setSelectedInquiryType] = useState("");

  const openModal = (inquiryType: string) => {
    setSelectedInquiryType(inquiryType);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedInquiryType("");
  };

  return {
    isOpen,
    selectedInquiryType,
    openModal,
    closeModal,
  };
}
