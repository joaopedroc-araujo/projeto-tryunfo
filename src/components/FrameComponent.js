import FrameComponent2 from "./FrameComponent2";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent from "./GroupComponent";

const FrameComponent = () => {
  return (
    <div className="self-stretch grid flex-row items-start justify-start gap-[25px] max-w-full grid-cols-[repeat(3,_minmax(269px,_1fr))] mq750:grid-cols-[minmax(269px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(269px,_466px))]">
      <div className="rounded-[9.73px] bg-white shadow-[0px_3.9px_13px_rgba(0,_0,_0,_0.5)] flex flex-row items-center justify-center pt-[9px] pb-[11px] pr-[9px] pl-2.5 box-border max-w-full shrink-0 z-[1]">
        <div className="relative rounded-[9.73px] bg-white shadow-[0px_3.9px_13px_rgba(0,_0,_0,_0.5)] w-[358.2px] h-[534.3px] hidden max-w-full" />
        <div className="flex-1 rounded-[9.73px] bg-teal flex flex-col items-end justify-end py-[75px] pr-0 pl-[21px] box-border relative min-h-[514px] max-w-full z-[1]">
          <div className="relative rounded-[9.73px] bg-teal w-[338.7px] h-[514.9px] hidden max-w-full z-[0]" />
          <div className="my-0 mx-[!important] absolute top-[19px] left-[calc(50%_-_154.5px)] w-[310px] h-[271px] flex flex-col items-center justify-start bg-cover bg-no-repeat bg-[top] z-[2]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[270.6px] shrink-0 object-cover hidden z-[0]"
              alt=""
              src="/rectangle-56@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-0">
              <div className="flex-1 flex flex-row items-end justify-start">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1">
                  <div className="self-stretch relative rounded-t-[9.73px] rounded-b-none bg-darkslategray-300 h-[38.9px] z-[3]" />
                </div>
                <input
                  className="w-full [border:none] [outline:none] inline-block font-epilogue text-8xl-3 bg-[transparent] relative font-bold text-white text-left h-[35px] z-[4] ml-[-168px] mq450:text-3xl"
                  placeholder="Java Script"
                  type="text"
                />
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] right-[14.8px] bottom-[42px] w-[70.1px] h-[70.1px] z-[6]" />
          </div>
          <FrameComponent2 rectangle46="/rectangle-57.svg" />
        </div>
      </div>
      <GroupComponent1
        rectangle45="/rectangle-45-2@2x.png"
        rectangle46="/rectangle-46-2.svg"
      />
      <GroupComponent
        rectangle45="/rectangle-56@2x.png"
        rectangle46="/rectangle-46-3.svg"
      />
    </div>
  );
};

export default FrameComponent;
