import Button from "../buttons/Button";

const Card = () => {
  return (
    <div className="relative flex flex-col bg-[var(--secondary-color)] ml-[70px] rounded-4xl w-[285px] h-[230px]">
      <div className="top-[10px] right-0 absolute flex justify-end gap-[20px] pr-[20px] w-full cardTopContainer">
        <div>
          <Button
            size="w-[35px] h-[35px] flex justify-center items-center bg-[var(--color-white)]"
            img="./images/svg/leftArrow.svg"
          />
        </div>
        <div>
          <Button
            size="w-[35px] h-[35px] flex justify-center items-center bg-[var(--main-color)]"
            img="./images/svg/rightArrrow.svg"
          />
        </div>
        <div>
          <Button
            size="w-[35px] h-[35px] flex justify-center items-center bg-[var(--color-white)]"
            img="./images/svg/Trash.svg"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[100px] cardBottonContainer">
        <p className="mb-[10px] font-inter text-[var(--color-brown)]">
          Double Delight
        </p>
        <div className="flex gap-[10px] text-center">
          <div className="flex">
            <img src="./images/svg/orangeStar.svg" alt="" />
            <p className="text-[var(--color-brown)]">4.7</p>
          </div>
          <p className="text-[var(--color-brown)]">SAR.25</p>
        </div>
      </div>
      <img
        className="right-[100px] bottom-[90px] absolute"
        src="./images/png/doubleDelitburger.png"
        alt=""
      />
    </div>
  );
};

export default Card;
