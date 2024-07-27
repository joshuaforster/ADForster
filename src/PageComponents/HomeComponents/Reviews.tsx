import React, { useEffect, useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import Button from '../../CustomComponents/buttons';

const reviews = [
  {
    id: 1,
    text: "Cleaned my parents windows today who are not on Facebook but asked me to leave a review on their behalf. Came today to clean very dirty windows, but done a really good job at a very reasonable price. Would highly recommended. Thank you.",
    name: "Tessa Patterson",
  },
  {
    id: 2,
    text: "Windows look fab thank you so much.",
    name: "Emma Platt",
  },
  {
    id: 3,
    text: "I messaged Adam as I was looking for a new window cleaner. Adam was prompt and responded to me efficiently. He has been once and my windows/sills are sparkling. Would definitely recommend. Thank you.",
    name: "Lewis AttWood",
  },
  {
    id: 4,
    text: "Just had Adam clean my Gutters and Windows. Really pleased and highly recommend.",
    name: "Anne Hastings",
  },
  {
    id: 5,
    text: "Had my windows done few times and have been very pleased. Good Job every time. I highly recommend A.D. Forster Window Cleaning.",
    name: "Irene Mcdowall",
  },
  {
    id: 6,
    text: "We have just done a house renovation, so understandably the windows and doors were very dusty. Couldn’t be happier our windows were sparkly after. Very thorough job. Highly recommend!",
    name: "Lauren Jade",
  },
  {
    id: 7,
    text: "Cannot recommend enough - moved in to a very dirty house which included windows and facias that I didn’t think possible to get clean. I now have bright white windows and facia boards that sparkle and look like new. Very professional, very friendly and very very reasonably priced. Thanks so much, good luck to you and your business and I hope to use you again soon!",
    name: "Shân Evbota",
  },
  {
    id: 8,
    text: "I had all my windows, doors, gutters and fascias all cleaned by A.D. Forster Window Cleaning and they were very professional and cleaned them brilliantly. They are very reasonably priced, friendly and I definitely recommend them. Thank you for doing a brilliant job.",
    name: "Lynn Bean",
  },
  {
    id: 9,
    text: "Quoted and cleaned on the same day. Professional service and my windows really sparkle now. Thanks Adam!",
    name: "Jo Pointer",
  },
  {
    id: 10,
    text: "10/10 service from Adam. Came to quote and cleaned on the same day. Quick, friendly and left my windows and doors gleaming! Very fairly priced too.",
    name: "Tom Yallop",
  },
  {
    id: 11,
    text: "Adam gave me a quote Friday and cleaned my windows and conservatory Monday, very prompt professional service. Would highly recommend.",
    name: "Stuart Lynes",
  },
];

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setDragging(false);
      setOffsetX(0);
      nextReview();
    },
    onSwipedRight: () => {
      setDragging(false);
      setOffsetX(0);
      prevReview();
    },
    onSwiping: (event) => {
      setDragging(true);
      setOffsetX(event.deltaX);
    },
    onSwiped: () => {
      setDragging(false);
      setOffsetX(0);
    },
    trackMouse: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75 && bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="isolate overflow-hidden bg-white">
      <div
        {...swipeHandlers}
        className="relative mx-auto max-w-screen-xl px-4 lg:px-6 py-24 sm:py-32"
      >
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
        <div className={`transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl text-fontColour font-bold text-center mb-12">Reviews</h2>
          <div className="flex overflow-hidden relative">
            <div
              className="flex w-full cursor-grab"
              style={{
                transform: `translateX(calc(${offsetX}px - ${currentReviewIndex * 100}%))`,
                transition: dragging ? 'none' : 'transform 0.3s ease',
                cursor: dragging ? 'grabbing' : 'grab'
              }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <figure className="flex flex-col items-center gap-y-8 lg:gap-x-10">
                    <blockquote className="text-l font-semibold leading-8 text-fontColour sm:leading-9 w-full text-center">
                      <p>{review.text}</p>
                    </blockquote>
                    <figcaption className="text-base">
                      <div className="font-semibold text-fontColour">{review.name}</div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <button onClick={prevReview} className="mx-2 text-fontColour hover:text-gray-900 focus:outline-none" aria-label="Previous review">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {reviews.map((_, index) => (
              <div key={index} className={`h-2 w-2 rounded-full mx-1 ${index === currentReviewIndex ? 'bg-gray-900' : 'bg-gray-300'}`} />
            ))}
            <button onClick={nextReview} className="mx-2 text-fontColour hover:text-gray-900 focus:outline-none" aria-label="Next review">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center mt-4">
            <span className="text-sm text-fontColour">{currentReviewIndex + 1} of {reviews.length}</span>
          </div>
          <div className="flex justify-center items-center mt-8">
            <Button
              href="https://www.facebook.com/profile.php?id=100069334146139&sk=reviews"
              variant="primary"
            >
              View More Reviews on Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
