import { useRef } from "react";
import { useGsapDownStagger } from "../hooks/gsap";

const NotFound = () => {
  const errorFirst4Ref = useRef(null);
  const bombImgRef = useRef(null);
  const errorLast4Ref = useRef(null);
  const pageNotFoundRef = useRef(null);
  const error404Arr = [errorFirst4Ref, bombImgRef, errorLast4Ref];
  const pageNotFoundRefArr = [pageNotFoundRef];

  useGsapDownStagger(error404Arr, 1.8);
  useGsapDownStagger(pageNotFoundRefArr, 2.7);

  return (
    <section className='not-found container mx-auto mt-20 min-h-scrren flex flex-col gap-5 justify-center items-center overflow-hidden'>
      <h1 className='!text-9xl text-red-400 flex justify-center items-center font-bold'>
        <span ref={errorFirst4Ref}>4</span>

        <img
          ref={bombImgRef}
          src='https://www.clipartmax.com/png/full/227-2279466_white-bomb-clipart.png'
          alt='Black Bomb vector'
          className='w-32'
        />
        <span ref={errorLast4Ref}>4</span>
      </h1>
      <p ref={pageNotFoundRef}> page Not Found</p>
    </section>
  );
};

export default NotFound;
