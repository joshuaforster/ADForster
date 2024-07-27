import React from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

interface SingleImageProps {
  imageUrl: string;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
}

const SingleImage: React.FC<SingleImageProps> = ({ imageUrl, onPrevious, onNext, onClose }) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]" onClick={handleClickOutside}>
      <img
        src={imageUrl}
        alt=""
        className="max-h-[90vh] w-auto object-contain cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute top-5 right-5 text-white text-3xl"
        onClick={onClose}
      >
        <FaTimes />
      </button>
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-2xl p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-2xl p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SingleImage;
