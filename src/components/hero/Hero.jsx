import Button from "../buttons/Button";

const Hero = () => {
  return (
    <div className="flex justify-between items-center bg-[var(--color-white)] m-auto mt-[px] pr-[70px] pl-[70px] rounded-b-[10px] max-w-[1440px] h-[auto]">
      <div className="flex flex-col gap-[34px] w-[870px] heroLeftContainer">
        <div className="flex justify-center items-center bg-[var(--secondary-color)] rounded-[50px] w-[289px] h-[50px]">
          <p className="font-inter text-[24px] text-[var(--main-color)]">
            The Original Burger
          </p>
        </div>
        <div>
          <p className="w-[700px] font-[900] text-[110px] leading-[100px]">
            From the
            <p> Grill to</p>
            <p>Your Heart</p>
          </p>
        </div>
        <p className="font-[500] font-inter">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor
          dictumst venenatis potenti nisl aliquet eget nascetur adipiscing.
          Laoreet efficitur auctor erat ac platea magna.
        </p>
        <div className="flex gap-[74px]">
          <div>
            <Button
              text="Explore More"
              size="w-[286px] h-[72px] flex justify-center items-center rounded-[10px] cursor-pointer"
              color="bg-[var(--main-color)] text-[var(--color-white)] font-inter hover:bg-[var(--color-white)] hover:text-[var(--main-color)] hover:bg-transparent border border:1px transition-colors duration-300"
            />
          </div>
          <div>
            <Button
              text="Explore More"
              size="w-[286px] h-[72px] flex justify-center items-center rounded-[10px] border border-2x1 cursor-pointer"
              color="bg-transparent text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--color-white)] transition-colors duration-300 font-inter "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center heroRightContainer">
        <img src="./images/png/burger.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
