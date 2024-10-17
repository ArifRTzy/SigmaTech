import { useState, useRef, useEffect } from "react";
import { faq } from "../constants";
import { cats, dropdown } from "../utils";

const Faq = () => {
  const [show, setShow] = useState([]);
  const faqContainerRef = useRef(null);

  const handleShow = (i) => {
    if (show.includes(i)) {
      setShow(show.filter(index => index !== i));
    } else {
      setShow([...show, i]);
    }
  };

  useEffect(() => {
    const faqContainer = faqContainerRef.current;

    const handlePageScroll = (event) => {
      const rect = faqContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the FAQ container is fully in view (100% of viewport)
      const isInViewport = rect.top >= 0 && rect.bottom <= windowHeight;

      // Toggle overflow based on whether the FAQ is fully in view
      if (isInViewport) {
        faqContainer.classList.remove("overflow-hidden");
        faqContainer.classList.add("overflow-auto");

        const canScrollUp = faqContainer.scrollTop > 0;
        const canScrollDown = faqContainer.scrollTop + faqContainer.clientHeight < faqContainer.scrollHeight;

        // Only allow scrolling of the FAQ container
        if (event.deltaY > 0 && canScrollDown) {
          event.preventDefault(); // Prevent page scrolling
          faqContainer.scrollTop += event.deltaY; // Scroll the FAQ container
        } else if (event.deltaY < 0 && canScrollUp) {
          event.preventDefault(); // Prevent page scrolling
          faqContainer.scrollTop += event.deltaY; // Scroll the FAQ container
        }
      } else {
        faqContainer.classList.add("overflow-hidden");
        faqContainer.classList.remove("overflow-auto");
      }
    };

    // Attach scroll event listener
    window.addEventListener("wheel", handlePageScroll, { passive: false });

    // Clean up on unmount
    return () => {
      window.removeEventListener("wheel", handlePageScroll);
    };
  }, []);

  return (
    <div className="bg-black w-full lg:h-[calc(100vh-64px)]" id="faq">
      <div className="lg:w-[80%] xl:w-[70%] lg:px-0 px-5 mx-auto h-full lg:flex">
        <div className="h-full flex flex-col lg:w-[35%]">
          <h1 className="bg-gradient-to-r from-[#5B61FE] to-[#9296fe] mid:w-full bg-clip-text text-transparent lg:text-5xl mid:text-4xl text-3xl font-bold">
            FAQ
          </h1>
          <p className="text-white mid:text-xl text-lg font-light lg:pb-0 pb-6">
            Pertanyaan yang sering diajukan oleh pelanggan SigmaTech
          </p>
          <img src={cats} alt="cats" className="w-[90%] mt-auto hidden lg:flex" />
        </div>
        <div
          className="lg:w-[65%] lg:max-h-[calc(100vh-64px)] hide-scrollbar overflow-hidden" // Default to hidden
          ref={faqContainerRef}
        >
          {faq.map(({ question, answer }, i) => (
            <div key={question} className={`border-b-[1px] border-[#333333] ${i === 0 ? 'pb-9 pt-1' : 'py-9'}`}>
              <div className="flex justify-between items-center cursor-pointer" onClick={() => handleShow(i)}>
                <h2 className={`font-semibold hover:text-[#5B61FE] flex-1 ${show.includes(i) ? 'text-[#5B61FE]' : 'text-white'}`}>
                  {question}
                </h2>
                <img src={dropdown} alt={question} className={`w-4  ${show.includes(i) ? 'rotate-180' : 'rotate-0'} ml-4`} />
              </div>
              <p className={`text-white font-normal pt-3 ${show.includes(i) ? 'block' : 'hidden'}`}>
                {answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
