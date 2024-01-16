import { useState } from "react";

const AdicioneNovaCarta = () => {
  const [aCheckboxDefaultChecked, setACheckboxDefaultChecked] = useState(true);
  return (
    <div className="self-stretch rounded-xl bg-white shadow-[0px_4px_19px_rgba(0,_0,_0,_0.8)] h-[763px] flex flex-row items-center justify-start py-[41px] pr-[102px] pl-[101px] box-border gap-[159px] max-w-full z-[1] text-center text-9xl text-mediumseagreen font-epilogue lg:gap-[79px] lg:pl-[50px] lg:pr-[51px] lg:box-border mq750:gap-[40px] mq750:py-[27px] mq750:px-[25px] mq750:box-border mq450:h-auto mq450:gap-[20px] mq450:pt-5 mq450:pb-5 mq450:box-border">
      <div className="relative rounded-xl bg-white shadow-[0px_4px_19px_rgba(0,_0,_0,_0.8)] w-[1124px] h-[721px] hidden max-w-full" />
      <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[6px] max-w-[calc(100%_-_517px)] shrink-0 mq750:hidden mq750:max-w-full">
        <div className="w-[394px] flex flex-col items-start justify-start gap-[10px] max-w-full">
          <div className="w-[363px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
            <h2 className="m-0 flex-1 relative text-9xl uppercase inline-block italic font-extrabold font-epilogue text-mediumseagreen text-left h-9 max-w-full z-[1] mq450:text-3xl">
              Adicione nova carta
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[11px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[237px] max-w-full z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <div className="relative w-[49px] h-6 hidden">
                      <b className="absolute top-[0%] left-[0%] text-base leading-[150%] inline-block font-text-sm-regular text-gray-300 text-left w-full h-full">
                        Label
                      </b>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                      <b className="relative text-base leading-[150%] font-text-sm-regular text-gray-700 text-left">
                        Nome
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch relative h-[18px] hidden">
                      <i className="absolute w-full top-[0%] left-[0%] text-xs leading-[150%] inline-block font-text-sm-regular text-gray-300 text-left h-full">
                        Help text here
                      </i>
                    </div>
                    <div className="self-stretch relative h-0 hidden">
                      <i className="absolute text-xs leading-[150%] hidden font-text-sm-regular text-gray-700 text-left">
                        Help text here
                      </i>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center max-w-full">
                  <div className="flex-1 flex flex-row items-center justify-center max-w-full">
                    <div className="relative w-72 h-[37px] hidden">
                      <div className="absolute top-[0px] left-[0px] rounded-sm bg-white w-full flex flex-row items-center justify-start h-full">
                        <div className="flex-1 flex flex-col items-start justify-start py-2 pr-0 pl-2 gap-[10px]">
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[58.6px] h-10 hidden">
                            <div className="absolute top-[10px] left-[22px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left hidden w-[378px] h-5">{`Placeholder `}</div>
                            <div className="absolute top-[0px] left-[0px] w-full h-full">
                              <div className="absolute bottom-[11px] left-[15px] bg-gray-700 w-px h-[18px]" />
                            </div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px]">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-[37px] left-[0px] rounded-sm w-72 h-0 flex flex-col items-start justify-start">
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-end justify-center pt-[37px] px-0 pb-0 box-border relative max-w-full">
                      <div className="my-0 mx-[!important] absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white flex flex-row items-center justify-start">
                        <div className="flex-1 hidden flex-col items-start justify-start py-2 pr-0 pl-2 gap-[10px]">
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[58.6px] h-10 hidden">
                            <div className="absolute top-[10px] left-[22px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left hidden w-[378px] h-5">{`Placeholder `}</div>
                            <div className="absolute top-[0px] left-[0px] w-full h-full">
                              <div className="absolute bottom-[11px] left-[15px] bg-gray-700 w-px h-[18px]" />
                            </div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px]">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 h-0 flex flex-col items-start justify-start max-w-full">
                        <img
                          className="self-stretch relative max-w-full overflow-clip max-h-[unset]"
                          alt=""
                          src="/enabled-1.svg"
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="relative w-[290px] h-[37px] hidden">
                      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-full flex flex-row items-center justify-start h-full">
                        <div className="flex-1 flex flex-col items-start justify-start py-2 pr-0 pl-2 gap-[10px]">
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[58.6px] h-10 hidden">
                            <div className="absolute top-[10px] left-[22px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left hidden w-[378px] h-5">{`Placeholder `}</div>
                            <div className="absolute top-[0px] left-[0px] w-full h-full">
                              <div className="absolute bottom-[11px] left-[15px] bg-gray-700 w-px h-[18px]" />
                            </div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px]">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-[37px] left-[0px] w-[290px] h-0 flex flex-col items-start justify-start">
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="relative w-[290px] h-[37px] hidden">
                      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-full flex flex-row items-center justify-start h-full">
                        <div className="flex-1 flex flex-col items-start justify-start py-2 pr-0 pl-2 gap-[10px]">
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[58.6px] h-10 hidden">
                            <div className="absolute top-[10px] left-[22px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left hidden w-[378px] h-5">{`Placeholder `}</div>
                            <div className="absolute top-[0px] left-[0px] w-full h-full">
                              <div className="absolute bottom-[11px] left-[15px] bg-gray-700 w-px h-[18px]" />
                            </div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px]">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-100 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-[37px] left-[0px] w-[290px] h-0 flex flex-col items-start justify-start">
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="relative w-[290px] h-[37px] hidden">
                      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-full flex flex-row items-center justify-start h-full">
                        <div className="flex-1 flex flex-col items-start justify-start py-2 pr-0 pl-2 gap-[10px]">
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[58.6px] h-10 hidden">
                            <div className="absolute top-[10px] left-[22px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left hidden w-[378px] h-5">{`Placeholder `}</div>
                            <div className="absolute top-[0px] left-[0px] w-full h-full">
                              <div className="absolute bottom-[11px] left-[15px] bg-gray-700 w-px h-[18px]" />
                            </div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px]">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-[37px] left-[0px] w-[290px] h-0 flex flex-col items-start justify-start">
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="relative w-[290px] h-[37px] hidden">
                      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-full flex flex-row items-center justify-start h-full">
                        <div className="flex-1 flex flex-col items-start justify-start py-2 pr-0 pl-2 gap-[10px]">
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[58.6px] h-10 hidden">
                            <div className="absolute top-[10px] left-[22px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left hidden w-[378px] h-5">{`Placeholder `}</div>
                            <div className="absolute top-[0px] left-[0px] w-full h-full">
                              <div className="absolute bottom-[11px] left-[15px] bg-gray-700 w-px h-[18px]" />
                            </div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px]">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-[37px] left-[0px] w-[290px] h-0 flex flex-col items-start justify-start">
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="relative w-[291px] h-[37px] hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white flex flex-row items-center justify-start">
                        <div className="flex-1 flex flex-col items-start justify-start py-2 pr-0 pl-2 gap-[10px]">
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[58.6px] h-10 hidden">
                            <div className="absolute top-[10px] left-[22px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left hidden w-[378px] h-5">{`Placeholder `}</div>
                            <div className="absolute top-[0px] left-[0px] w-full h-full">
                              <div className="absolute bottom-[11px] left-[15px] bg-gray-700 w-px h-[18px]" />
                            </div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px] hidden">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                          <div className="relative w-[81px] h-[21px]">
                            <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute w-full top-[100%] right-[0%] left-[0%] h-0 flex flex-col items-start justify-start">
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                <img
                  className="relative w-[18px] h-[18px] object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/a--icon--error@2x.png"
                />
              </div>
            </div>
            <div className="w-[365px] h-[108px] flex flex-col items-start justify-start relative gap-[14px] max-w-full z-[1]">
              <img
                className="absolute my-0 mx-[!important] w-full right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-20 shrink-0"
                loading="eager"
                alt=""
                src="/a--text-area--default.svg"
              />
              <div className="w-[49px] flex flex-row items-start justify-start gap-[10px]">
                <div className="relative w-[49px] h-6 hidden">
                  <b className="absolute top-[0%] left-[0%] text-base leading-[150%] inline-block font-text-sm-regular text-gray-300 text-left w-full h-full">
                    Label
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <b className="relative text-base leading-[150%] font-text-sm-regular text-gray-700 text-left">
                    Descrição
                  </b>
                </div>
              </div>
              <div className="w-4 h-[21px] flex flex-row items-start justify-start py-0 px-2 box-border">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] z-[1]">
                  <div className="relative w-[81px] h-[21px] hidden">
                    <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left inline-block w-full h-full">{`Placeholder `}</div>
                  </div>
                  <div className="relative w-[81px] h-[21px] hidden">
                    <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                  </div>
                  <div className="relative w-[81px] h-[21px] hidden">
                    <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block w-full h-full">{`Placeholder `}</div>
                  </div>
                  <div className="relative w-[58.6px] h-10 hidden">
                    <div className="absolute top-[10px] left-[22px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left hidden w-[378px] h-5">{`Placeholder `}</div>
                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                      <div className="absolute bottom-[11px] left-[15px] bg-gray-700 w-px h-[18px]" />
                    </div>
                  </div>
                  <div className="relative w-[81px] h-[21px] hidden">
                    <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                  </div>
                  <div className="relative w-[81px] h-[21px] hidden">
                    <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                  </div>
                  <div className="flex-1 w-0 flex flex-row items-center justify-center">
                    <div className="self-stretch relative text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-px box-border gap-[5px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[22px]">
            <input
              className="w-[calc(100%_-_16px)] [border:none] [outline:none] bg-[transparent] h-[29px] flex flex-col items-start justify-start font-text-sm-regular font-bold text-base text-gray-700"
              placeholder="Attr01"
              type="text"
            />
            <div className="flex-1 relative rounded-sm bg-white box-border h-[37px] min-w-[179px] z-[1] border-[1px] border-solid border-darkslategray-200" />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="relative w-4 h-4 object-cover z-[1]"
                alt=""
                src="/a--progress-bar--horizontal--step--complete@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[22px]">
            <input
              className="w-[calc(100%_-_16px)] [border:none] [outline:none] bg-[transparent] h-[33px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border font-text-sm-regular font-bold text-base text-gray-700"
              placeholder="Attr02"
              type="text"
            />
            <div className="flex-1 relative rounded-sm bg-white box-border h-[37px] min-w-[179px] z-[1] border-[1px] border-solid border-darkslategray-200" />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <img
                className="relative w-4 h-4 object-cover z-[1]"
                alt=""
                src="/a--progress-bar--horizontal--step--complete@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[22px]">
            <input
              className="w-[calc(100%_-_16px)] [border:none] [outline:none] bg-[transparent] h-[33px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border font-text-sm-regular font-bold text-base text-gray-700"
              placeholder="Attr03"
              type="text"
            />
            <div className="flex-1 relative rounded-sm bg-white box-border h-[37px] min-w-[179px] z-[1] border-[1px] border-solid border-darkslategray-200" />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <img
                className="relative w-4 h-4 object-cover z-[1]"
                alt=""
                src="/a--progress-bar--horizontal--step--complete@2x.png"
              />
            </div>
          </div>
          <div className="w-[329px] flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 relative text-base leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block h-[30px] z-[1]">
              Pontos restantes = 000
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[17px] min-h-[53px]">
          <b className="relative text-base leading-[150%] inline-block font-text-sm-regular text-gray-700 text-left h-[29px] z-[1]">
            Imagem
          </b>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border min-w-[183px]">
            <div className="self-stretch relative rounded-sm bg-white box-border h-[37px] z-[1] border-[1px] border-solid border-darkslategray-300">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-white box-border w-full h-full hidden z-[1] border-[1px] border-solid border-darkslategray-300" />
              <button className="cursor-pointer [border:none] p-0 bg-darkslategray-300 absolute top-[0px] left-[229px] rounded-tl-sm rounded-tr-none rounded-br-none rounded-bl-sm w-[46px] h-[37px] z-[2]">
                <div className="absolute top-[0px] left-[0px] rounded-tl-sm rounded-tr-none rounded-br-none rounded-bl-sm bg-darkslategray-300 w-full h-full hidden" />
                <img
                  className="absolute top-[2.3px] left-[6.3px] w-[33.4px] h-[33.4px] object-contain z-[1]"
                  alt=""
                  src="/insert-link-24px@2x.png"
                />
              </button>
            </div>
          </div>
          <img
            className="relative w-4 h-4 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/a--progress-bar--horizontal--step--complete@2x.png"
          />
        </div>
        <div className="w-[364px] flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start relative gap-[4px] max-w-full z-[1]">
            <img
              className="absolute my-0 mx-[!important] w-full right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-10 shrink-0"
              alt=""
              src="/a--text-field--default.svg"
            />
            <div className="w-[49px] flex flex-row items-start justify-start gap-[10px]">
              <div className="relative w-[49px] h-6 hidden">
                <b className="absolute top-[0%] left-[0%] text-base leading-[150%] inline-block font-text-sm-regular text-gray-300 text-left w-full h-full">
                  Label
                </b>
              </div>
              <div className="flex flex-row items-center justify-center">
                <b className="relative text-base leading-[150%] font-text-sm-regular text-gray-700 text-left">
                  Raridade
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
                <div className="flex flex-row items-center justify-center gap-[10px] z-[1]">
                  <div className="relative w-[81px] h-[21px] hidden">
                    <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left inline-block w-full h-full">{`Placeholder `}</div>
                  </div>
                  <div className="relative w-[81px] h-[21px] hidden">
                    <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                  </div>
                  <div className="relative w-[81px] h-[21px] hidden">
                    <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left inline-block w-full h-full">{`Placeholder `}</div>
                  </div>
                  <div className="relative w-[58.6px] h-10 hidden">
                    <div className="absolute top-[10px] left-[22px] text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left hidden w-[378px] h-5">{`Placeholder `}</div>
                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                      <div className="absolute bottom-[11px] left-[15px] bg-gray-700 w-px h-[18px]" />
                    </div>
                  </div>
                  <div className="relative w-[81px] h-[21px] hidden">
                    <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                  </div>
                  <div className="relative w-[81px] h-[21px] hidden">
                    <div className="absolute top-[0px] left-[0px] text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left inline-block w-full h-full">{`Placeholder `}</div>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative text-sm leading-[150%] font-text-sm-regular text-gray-500 text-left">{`Placeholder `}</div>
                  </div>
                </div>
                <img
                  className="relative w-10 h-10 z-[1]"
                  alt=""
                  src="/a--icon--arrow-down.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[47px] flex flex-row items-start justify-end py-0 px-[39px] box-border">
          <b className="relative text-base leading-[150%] inline-block font-text-sm-regular text-gray-700 text-left h-[29.9px] z-[1]">
            Total de pontos = 000
          </b>
        </div>
        <div className="w-[366px] flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
            <div className="flex flex-row items-center justify-center z-[1]">
              <div className="w-[180px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                <input
                  className="accent-teal m-0 relative w-4 h-4"
                  checked={aCheckboxDefaultChecked}
                  type="checkbox"
                  onChange={(event) =>
                    setACheckboxDefaultChecked(event.target.checked)
                  }
                />
                <div className="w-[452px] h-[21px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-[251%] shrink-0">
                  <div className="self-stretch relative text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left hidden w-[452px] shrink-0 max-w-full">
                    Checkbox label
                  </div>
                  <div className="relative bg-gray-300 w-[95px] h-2.5 hidden" />
                  <div className="self-stretch relative text-sm leading-[150%] font-text-sm-regular text-gray-300 text-left hidden w-[452px] shrink-0 max-w-full">
                    Checkbox label
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left hidden w-[452px] shrink-0 max-w-full">
                    Checkbox label
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left hidden w-[452px] shrink-0 max-w-full">
                    Checkbox label
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left hidden w-[452px] shrink-0 max-w-full">
                    Checkbox label
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left hidden w-[452px] shrink-0 max-w-full">
                    Checkbox label
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] font-text-sm-regular text-gray-700 text-left hidden w-[452px] shrink-0 max-w-full">
                    Checkbox label
                  </div>
                  <b className="flex-1 relative text-base leading-[150%] inline-block font-text-sm-regular text-gray-700 text-left max-w-full">
                    Super Trybe Trunfo
                  </b>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-sm shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start z-[1]">
            <div className="rounded-sm bg-mediumseagreen overflow-hidden flex flex-row items-center justify-center py-2 px-8">
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-base leading-[150%] font-text-sm-regular text-white text-center">
                  Salvar
                </div>
              </div>
            </div>
          </button>
        </div>
      </form>
      <div className="w-[358px] h-[681px] flex flex-col items-start justify-start gap-[41px] max-w-[calc(100%_-_563px)] mq750:hidden mq750:max-w-full mq450:gap-[20px]">
        <h2 className="m-0 relative text-inherit uppercase inline-block italic font-extrabold font-inherit w-[263px] z-[1] mq450:text-3xl">
          pré-visualização
        </h2>
        <div className="self-stretch rounded-[9.73px] bg-white shadow-[0px_3.9px_18.49px_rgba(0,_0,_0,_0.25)] h-[604px] flex flex-row items-center justify-center pt-[9px] px-[9px] pb-[11px] box-border max-w-full z-[1] text-left text-base-6 text-gray-700">
          <div className="relative rounded-[9.73px] bg-white shadow-[0px_3.9px_18.49px_rgba(0,_0,_0,_0.25)] w-[358.2px] h-[534.3px] hidden max-w-full" />
          <div className="flex-1 rounded-[9.73px] bg-teal flex flex-col items-end justify-end pt-[260px] pb-[75px] pr-0 pl-[21px] box-border relative max-w-full z-[1] mq750:pt-[169px] mq750:pb-[49px] mq750:box-border">
            <div className="relative rounded-[9.73px] bg-teal w-[338.7px] h-[514.9px] hidden max-w-full z-[0]" />
            <div className="my-0 mx-[!important] absolute right-[16px] bottom-[82px] w-[308px] flex flex-row items-center justify-center">
              <div className="flex-1 relative h-48">
                <img
                  className="absolute top-[-0.3px] left-[0.3px] w-full h-full object-contain z-[2]"
                  alt=""
                  src="/rectangle-57.svg"
                />
                <div className="absolute top-[53.8px] left-[16.9px] rounded-[9.73px] bg-gray-100 w-[276.4px] h-[29.9px] z-[3]">
                  <div className="absolute top-[0px] left-[-0.5px] rounded-[9.73px] bg-gray-100 w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[229.1px] rounded-tl-none rounded-tr-[9.73px] rounded-br-[9.73px] rounded-bl-none bg-darkslategray-300 w-[46.7px] h-[29.9px] z-[4]">
                    <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[9.73px] rounded-br-[9.73px] rounded-bl-none bg-darkslategray-300 w-full h-full hidden" />
                  </div>
                </div>
                <div className="absolute top-[88.8px] left-[16.9px] rounded-[9.73px] bg-gray-100 w-[276.4px] h-[29.9px] z-[3]">
                  <div className="absolute top-[0px] left-[-0.5px] rounded-[9.73px] bg-gray-100 w-full h-full hidden" />
                  <input
                    className="w-full [border:none] [outline:none] bg-darkslategray-300 absolute top-[0px] left-[229.1px] rounded-tl-none rounded-tr-[9.73px] rounded-br-[9.73px] rounded-bl-none h-[29.9px] pt-[6.2000000000000455px] px-[10.5px] pb-[0.6999999999999318px] box-border font-epilogue font-semibold text-base-6 text-white z-[4]"
                    placeholder="99"
                    type="text"
                  />
                  <div className="absolute top-[4.2px] left-[8.6px] leading-[150%] font-semibold inline-block w-[205px] z-[6]">
                    Attr02....................................
                  </div>
                </div>
                <div className="absolute top-[123.8px] left-[16.9px] rounded-[9.73px] bg-gray-100 w-[276.4px] h-[29.9px] z-[3]">
                  <div className="absolute top-[0px] left-[-0.5px] rounded-[9.73px] bg-gray-100 w-full h-full hidden" />
                  <input
                    className="w-full [border:none] [outline:none] bg-darkslategray-300 absolute top-[0px] left-[229.1px] rounded-tl-none rounded-tr-[9.73px] rounded-br-[9.73px] rounded-bl-none h-[29.9px] pt-[6.2000000000000455px] px-[10.5px] pb-[0.6999999999999318px] box-border font-epilogue font-semibold text-base-6 text-white z-[4]"
                    placeholder="99"
                    type="text"
                  />
                  <div className="absolute top-[4.2px] left-[8.6px] leading-[150%] font-semibold inline-block w-[205px] z-[6]">
                    Attr03....................................
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start relative">
              <div className="my-0 mx-[!important] absolute top-[-241px] left-[-208.1px] flex flex-row items-start justify-center pt-0 px-0 pb-[228px] bg-cover bg-no-repeat bg-[top] z-[2]">
                <img
                  className="relative w-[308.5px] h-[270.6px] object-cover hidden"
                  alt=""
                  src="/rectangle-56@2x.png"
                />
                <div className="w-[309px] flex flex-col items-start justify-start py-0 px-0 box-border">
                  <div className="self-stretch flex flex-row items-end justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1">
                      <div className="self-stretch relative rounded-t-[9.73px] rounded-b-none bg-darkslategray-300 h-[38.9px] z-[3]" />
                    </div>
                    <input
                      className="w-full [border:none] [outline:none] inline-block font-epilogue text-8xl-3 bg-[transparent] relative font-bold text-white text-left h-[35px] z-[4] ml-[-169px] mq450:text-3xl"
                      placeholder="Java Script"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[116px] h-[69.5px] z-[7] flex items-center justify-center">
                <img
                  className="w-full h-full z-[7] object-contain absolute left-[0px] top-[0px] [transform:scale(1.377)]"
                  loading="eager"
                  alt=""
                  src="/group-243.svg"
                />
              </div>
            </div>
            <div className="self-stretch relative h-[179px] text-white">
              <div className="absolute top-[38.43px] left-[-0.1px] text-3xs-7 leading-[12.65px] font-light inline-block w-full h-full [transform:_rotate(-6.92deg)] [transform-origin:0_0] z-[5]">
                Linguagem de programação interpretada estruturada, de script em
                alto nível com tipagem dinâmica fraca e multiparadigma. É uma
                das três principais tecnologias da World Wide Web.
              </div>
              <div className="absolute top-[108px] left-[20.9px] leading-[150%] font-semibold text-gray-700 inline-block w-[202px] z-[6]">
                Attr01....................................
              </div>
              <div className="absolute top-[110px] left-[251.9px] leading-[150%] font-semibold inline-block w-[17px] z-[6]">
                99
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdicioneNovaCarta;
