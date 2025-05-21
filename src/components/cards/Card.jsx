import Button from "../buttons/Button";

const Card = () => {
  return (
    <div className="bg-[aqua] ml-[70px] w-[285px] h-[230px]">
      <div className="flex justify-end gap-[30px] pr-[42px] cardTopContainer">
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
      <div className="flex flex-col justify-center items-center mt-[30px] cardBottonContainer">
        <p className="mb-[10px] text-[var(--color-brown)]">Double Delight</p>
        <div className="flex gap-[30px]">
          <div className="flex">
            <img src="./images/svg/orangeStar.svg" alt="" />
            <p className="text-[var(--color-brown)]">4.7</p>
          </div>
          <p className="text-[var(--color-brown)]">SAR.25</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
