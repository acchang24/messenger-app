"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface Props {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal = ({ isOpen, onClose, src }: Props) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" className="object-cover" fill src={src}></Image>
      </div>
    </Modal>
  );
};

export default ImageModal;
