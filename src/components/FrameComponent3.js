import { useState } from "react";

const FrameComponent3 = () => {
  const [checkBoxIconChecked, setCheckBoxIconChecked] = useState(true);
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[18px] max-w-full text-center text-9xl text-white font-epilogue">
      <h2 className="m-0 relative text-inherit uppercase inline-block italic font-semibold font-inherit w-[355px] h-9 shrink-0 max-w-full z-[1] mq450:text-3xl">
        Todas as cartas
      </h2>
      <div className="self-stretch rounded-3xs bg-teal shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row flex-wrap items-center justify-center py-[15px] pr-0.5 pl-[25px] box-border gap-[12px] max-w-full z-[1] text-left text-sm font-text-sm-regular">
        <div className="relative rounded-3xs bg-teal shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1124px] h-[75px] hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-lg font-epilogue">
          <b className="relative flex items-center h-9 shrink-0 z-[2]">
            Filtros de busca
          </b>
        </div>
        <div className="w-[340px] h-[45px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border max-w-full">
          <div className="self-stretch rounded-md box-border h-[47px] flex flex-row items-center justify-center p-3 z-[1] border-[1px] border-solid border-white">
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] flex-1 h-[21px] flex flex-row items-center justify-start py-0 px-1 box-border font-text-sm-regular text-sm text-white min-w-[185px]"
              placeholder="Nome da carta"
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 h-[45px] flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border min-w-[228px] max-w-full text-center">
          <div className="flex-1 rounded-md box-border h-[47px] flex flex-row items-center justify-center p-3 max-w-full z-[2] border-[1px] border-solid border-white">
            <div className="flex-1 flex flex-row items-center justify-start py-0 px-1">
              <div className="relative leading-[150%]">Raridade</div>
            </div>
          </div>
          <img
            className="relative w-[43.5px] h-10 z-[3] ml-[-46px]"
            alt=""
            src="/a--icon--arrow-down-1.svg"
          />
        </div>
        <div className="w-[212px] flex flex-row items-center justify-start gap-[14px] text-gray-700">
          <input
            className="accent-white1 m-0 relative w-4 h-4 z-[2]"
            checked={checkBoxIconChecked}
            type="checkbox"
            onChange={(event) => setCheckBoxIconChecked(event.target.checked)}
          />
          <div className="flex-1 h-[21px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border z-[2]">
            <div className="self-stretch relative leading-[150%] hidden w-[182px] shrink-0">
              Checkbox label
            </div>
            <div className="relative bg-gray-300 w-[38.3px] h-2.5 hidden" />
            <div className="self-stretch relative leading-[150%] text-gray-300 hidden w-[182px] shrink-0">
              Checkbox label
            </div>
            <div className="self-stretch relative leading-[150%] hidden w-[182px] shrink-0">
              Checkbox label
            </div>
            <div className="self-stretch relative leading-[150%] hidden w-[182px] shrink-0">
              Checkbox label
            </div>
            <div className="self-stretch relative leading-[150%] hidden w-[182px] shrink-0">
              Checkbox label
            </div>
            <div className="self-stretch relative leading-[150%] hidden w-[182px] shrink-0">
              Checkbox label
            </div>
            <div className="self-stretch relative leading-[150%] hidden w-[182px] shrink-0">
              Checkbox label
            </div>
            <div className="flex-1 relative text-base leading-[150%] text-white">
              Super Trybe Trunfo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
