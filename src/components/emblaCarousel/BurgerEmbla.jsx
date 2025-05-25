import styles from "./BurgerEmbla.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Card from "../cards/card";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className="flex justify-end items-center mx-auto max-w-[1440px] max-h-[360px]">
        <div className="flex gap-4 mb-[40px] pr-[40px]">
          <button onClick={scrollPrev} className="cursor-pointer">
            <img src="./images/svg/leftArrow.svg" alt="leftArrow" />
          </button>
          <button onClick={scrollNext} className="cursor-pointer">
            <img src="./images/svg/rightArrrow.svg" alt="rightArrow" />
          </button>
        </div>
      </div>

      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          <div className={styles.emblaSlide}>
            <Card />
          </div>

          <div className={styles.emblaSlide}>
            <Card />
          </div>

          <div className={styles.emblaSlide}>
            <Card />
          </div>
          <div className={styles.emblaSlide}>
            <Card />
          </div>
          <div className={styles.emblaSlide}>
            <Card />
          </div>
          <div className={styles.emblaSlide}>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
