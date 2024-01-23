import React from "react";

import { Button, Img, Input, Switch, Text } from "components";

const FiftyPage = () => {
  return (
    <>
      <div className="bg-gradient5  flex flex-col font-robotomono mx-auto p-10 sm:px-5 relative w-full">
        <div className="flex flex-col items-center justify-start max-w-[1323px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Img className="h-10" src="images/img_logo.svg" alt="logo" />
              <Img
                className="h-[59px] md:h-auto object-cover w-[59px]"
                src="images/img_buttonwallet.png"
                alt="buttonwallet"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-9 items-start justify-start p-[9px] w-[10%] md:w-full"
                style={{ backgroundImage: "url('images/img_group11.png')" }}
              >
                <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[5px] w-[100%] md:w-full">
                  <Img className="h-2" src="images/img_union.svg" alt="union" />
                  <Text
                    className="text-indigo-100 text-sm tracking-[0.56px]"
                    size="txtRobotoMonoRegular14"
                  >
                    Back
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-start mt-7 w-1/2 md:w-full">
                <Img
                  className="h-[50px]"
                  src="images/img_group29.svg"
                  alt="groupTwentyNine"
                />
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-100"
                  size="txtRobotoMonoMedium36"
                >
                  Ethereum vault
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between mt-12 w-full">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[35px]">
                  <Text
                    className="text-indigo-100 text-lg tracking-[1.00px]"
                    size="txtRobotoMonoRegular18"
                  >
                    Amount
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-normal mt-4 w-full">
                    <div className="bg-gradient6  blue_gray_500_95_blue_gray_900_95_border2 border border-solid flex flex-row gap-3 items-center justify-center p-[17px] rounded-[12px] shadow-bs1">
                      <Button
                        className="flex h-7 items-center justify-center ml-[5px] w-7"
                        shape="circle"
                        variant="gradient"
                        color="amber_A700_amber_300"
                      >
                        <Img src="images/img_thumbsup.svg" alt="thumbsup" />
                      </Button>
                      <Img
                        className="h-[9px] mr-0.5"
                        src="images/img_filter.svg"
                        alt="filter"
                      />
                    </div>
                    <Input
                      name="groupThree"
                      placeholder="1000.0"
                      className="leading-[normal] md:text-[22px] p-0 placeholder:text-indigo-100 sm:text-xl text-2xl text-left w-full"
                      wrapClassName=""
                      color="blue_gray_700_01_blue_gray_700_02"
                    ></Input>
                  </div>
                  
                  <div className="flex flex-row items-center justify-start mt-[50px] w-[100%] md:w-full">
                  <div>
                  <div className="flex flex-row">
                    <Text
                      className="text-indigo-100 text-sm tracking-[0.56px]"
                      size="txtRobotoMonoBold14"
                    >
                      Current APY
                    </Text>
                    <Img
                      className="h-[18px] md:h-auto ml-2.5 object-cover w-[18px]"
                      src="images/img_help.png"
                      alt="help"
                    />
                    </div>
                    <Text
              className="text-green-A700 text-lg tracking-[0.90px]"
              size="txtRobotoMonoRegular18GreenA700"
            >
              55.3%
            </Text>
            </div>
            <div className="flex flex-col ml-[46px]">
                    <Text
                      className=" text-indigo-100 text-sm tracking-[0.56px]"
                      size="txtRobotoMonoBold14"
                    >
                      Value locked
                    </Text>
                    <Text
              className="text-indigo-100 text-lg tracking-[0.90px]"
              size="txtRobotoMonoRegular18"
            >
              $24.1M
            </Text>
            </div>
                  </div>
                  <Text
                    className="mt-[61px] text-indigo-100 text-sm tracking-[0.56px]"
                    size="txtRobotoMonoBold14"
                  >
                    Volatility
                  </Text>
                  <Text
            className="text-indigo-100 text-lg tracking-[0.90px]"
            size="txtRobotoMonoRegular18"
          >
            Low
          </Text>
          <Text
            className="mt-[55px] text-indigo-100 text-lg font-bold tracking-[1.00px]"
            size="txtRobotoMonoMedium18"
          >
            Benefits
          </Text>
          {/* // */}
          <div className="flex flex-row items-center justify-normal mt-[25px] w-full md:w-full">
                  <div>
                  <div className="flex flex-row">
                  
                    <Img
                      className="h-[12px] md:h-auto mr-5 object-cover w-[12px] justify-normal mt-[5px]"
                      src="images/img_checkmark.svg"
                      alt="help"
                    />
                    <Text
                      className="text-indigo-100 text-sm tracking-[0.56px] justify-normal"
                      size="txtRobotoMonoBold14"
                    >
                      Use your low-volatility assets (stable coins) to get exposure to
              high-volatility assets
                    </Text>
                    </div>
                    <div>
                  <div className="flex flex-row mt-[15px]">
                  
                    <Img
                      className="h-[12px] md:h-auto mr-5 object-cover w-[12px] justify-normal mt-[5px]"
                      src="images/img_checkmark.svg"
                      alt="help"
                    />
                    <Text
                      className="text-indigo-100 text-sm tracking-[0.56px] justify-normal"
                      size="txtRobotoMonoBold14"
                    >
                      Yield earned on your stable assets is continuously swapped for a
              volatile asset and distributed back to you
                    </Text>
                    </div>
                    </div>
                    
            </div>
            </div>
         
                </div>
                
                <Img
                  className="h-3 mt-24 mx-24"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <div className="bg-gradient5 flex flex-col items-center justify-start p-[27px] sm:px-5 rounded-[25px] shadow-bs3 w-[45%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-1.5 w-[95%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-indigo-100 text-lg tracking-[1.00px]"
                        size="txtRobotoMonoRegular18"
                      >
                        Projected returns
                      </Text>
                      <div className="bg-gradient7 flex flex-row gap-[13px] items-center justify-end sm:pl-5 pl-[21px] rounded-[12px] shadow-bs4">
                        <Text
                          className="text-indigo-100_75 text-xs"
                          size="txtRobotoMonoMedium12"
                        >
                          Daily
                        </Text>
                        
                        <div className="inline-flex items-center justify-center gap-[10px] pt-[10px] pb-[11px] px-[16px] relative bg-white rounded-[12px] border border-solid border-transparent [background:linear-gradient(180deg,rgb(93.5,100.04,136)_0%,rgb(65.87,71.82,104.55)_100%)]">
      
      <Text
                          className="text-indigo-100 text-xs"
                          size="txtRobotoMonoMedium12"
                        >
                          Yearly
                        </Text>
    </div>
                      </div>
                      
                    </div>
                    <div className="h-[84px] md:h-[99px] mt-[15px] relative w-[87%] sm:w-full">
                      <Text
                        className="leading-[42.00px] m-auto text-4xl sm:text-[32px] md:text-[34px] text-indigo-100 tracking-[-0.50px] w-full"
                        size="txtRobotoMonoRegular36"
                      >
                        <span className="inline-flex h-[30px] w-[30px]">
                        <Button
                        className="absolute flex h-10 items-center justify-center left-[0] rounded-[50%] top-[7%] w-10"
                        shape="circle"
                        color="indigo_A200"
                        variant="fill"
                      >
                        <Img src="images/img_eth.svg" alt="eth" />
                      </Button>
                        </span>
                        <span className="text-indigo-100 font-robotomono text-left font-normal">
                          <>
                            {" "}
                            +0.216 ETH <br />
                            per year{" "}
                          </>
                        </span>
                        
                        <span className="text-indigo-100_4c font-robotomono text-left font-normal">
                          est.
                        </span> 
                        <span className="inline-flex h-[40px] w-[40px]">
                       
                        <Button
                       
                        color="blue_gray_500_95_blue_gray_900_95"
                      >
                        <Img src="images/img_help.png" alt="profile" />
                      </Button>
                        </span>
                      </Text>
                      
                    </div>
                    <div className="flex flex-row items-start justify-between mt-3.5 w-full">
                      <Text
                        className="text-base text-indigo-100_4c tracking-[0.60px]"
                        size="txtRobotoMonoRegular16"
                      >
                        ($512.11)
                      </Text>
                      <div className="flex flex-row gap-2 items-start justify-start">
                        <Img
                          className="h-[9px] mt-[5px] w-2.5"
                          src="images/img_iconchart.svg"
                          alt="iconchart"
                        />
                        <Text
                          className="text-indigo-100 text-xs tracking-[0.60px] underline"
                          size="txtRobotoMonoRegular12"
                        >
                          Past returns performance
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[31px] w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Img
                          className="md:h-auto h-px object-cover"
                          src="images/img_sideseparator.png"
                          alt="sideseparator"
                        />
                        <div className="flex flex-row gap-2.5 items-center justify-between mt-[23px] w-[100%] md:w-full">
                        <div className="flex flex-col w-full">
                          <Text
                            className="text-indigo-100 text-xs tracking-[0.30px]"
                            size="txtRobotoMonoMedium12Indigo100"
                          >
                            Deposit fee
                          </Text>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[11px] w-[91%] md:w-full">
                          <Text
                            className="text-indigo-100 text-sm"
                            size="txtRobotoMonoBold14"
                          >
                            0%
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[61px] text-indigo-100_4c text-sm"
                            size="txtRobotoMonoBold14Indigo1004c"
                          >
                            +
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[11px] text-indigo-100 text-sm"
                            size="txtRobotoMonoBold14"
                          >
                            ~8.4 DAI
                          </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[3px] w-[81%] md:w-full">
                          <Text
                            className="text-indigo-100_4c text-sm"
                            size="txtRobotoMonoRegular14Indigo1004c"
                          >
                            ETHALend
                          </Text>
                          <Text
                            className="ml-[30px] text-indigo-100_4c text-sm"
                            size="txtRobotoMonoRegular14Indigo1004c"
                          >
                            gas
                          </Text>
                          </div>
                          </div>
                          <div className="flex flex-col w-full">
                          <Text
                            className="text-indigo-100 text-xs tracking-[0.30px]"
                            size="txtRobotoMonoMedium12Indigo100"
                          >
                            Withdraw fee
                          </Text>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[11px] w-[91%] md:w-full">
                          <Text
                            className="text-indigo-100 text-sm"
                            size="txtRobotoMonoBold14"
                          >
                            1%
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[61px] text-indigo-100_4c text-sm"
                            size="txtRobotoMonoBold14Indigo1004c"
                          >
                            +
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[11px] text-indigo-100 text-sm"
                            size="txtRobotoMonoBold14"
                          >
                            ~8.4 DAI
                          </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[3px] w-[81%] md:w-full">
                          <Text
                            className="text-indigo-100_4c text-sm"
                            size="txtRobotoMonoRegular14Indigo1004c"
                          >
                            ETHALend
                          </Text>
                          <Text
                            className="ml-[30px] text-indigo-100_4c text-sm"
                            size="txtRobotoMonoRegular14Indigo1004c"
                          >
                            gas
                          </Text>
                          </div>
                          </div>
                          
                        </div>
                       
                        <div className="flex flex-row gap-2.5 items-center justify-start mt-[27px] w-full">
                          <Text
                            className="text-green-A700 text-sm"
                            size="txtRobotoMonoMedium14"
                          >
                            You save ~$213.24 on gas fees
                          </Text>
                          <Img
                            className="h-[18px] md:h-auto object-cover w-[18px]"
                            src="images/img_help.png"
                            alt="help_One"
                          />
                        </div>
                        <Img
                          className="md:h-auto h-px mt-7 object-cover"
                          src="images/img_sideseparator.png"
                          alt="sideseparator_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[13px] items-center justify-start mt-7 w-[50%] md:w-full">
                      <div className="flex flex-row gap-5 items-start justify-between w-[94%]">
                        <Text
                          className="text-indigo-100 text-lg"
                          size="txtRobotoMonoRegular18"
                        >
                          Gas token
                        </Text>
                        <Switch
                          onColor="#363a563d"
                          offColor="#363a563d"
                          onHandleColor="#555c827a"
                          offHandleColor="#555c827a"
                          value={false}
                          className="rounded-[15px] border-solid border-transparent shadow-[8px_8px_22px_#363a563d,-6px_-6px_24px_#555c827a,inset_-1px_-1px_4px_#525b881f,inset_1px_1px_1px_#2530690d] [border-image:linear-gradient(to_bottom,rgb(94.95,102.87,144.77),rgba(39.29,43.54,66.94,0.69))_1]  opacity-95 "
                        />
 
                      </div>
                      <Img
                        className="h-[18px] md:h-auto object-cover w-[18px]"
                        src="images/img_help.png"
                        alt="help_Two"
                      />
                    </div>
  
  

                    <Button
                      size="md"
                      className="text-indigo-100 mt-7 w-[433px] h-[64px] rounded-[12px] md-w-full border border-solid border-transparent shadow-[8px_8px_22px_#363a563d,-6px_-6px_24px_#555c827a,inset_-1px_-1px_4px_#525b881f,inset_1px_1px_1px_#2530690d] [border-image:linear-gradient(to_bottom,rgb(94.95,102.87,144.77),rgba(39.29,43.54,66.94,0.69))_1] [background:linear-gradient(180deg,rgb(117.81,98.17,196.35)_0%,rgb(84,88,246)_100%)]"
                    >
                      Invest 1000 DAI
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center ml-[217px] mt-[20px] md:px-5 w-[27%] z-[1]">
          <Img
            className="md:h-auto h-px object-cover"
            src="images/img_sideseparator.png"
            alt="sideseparator_Two"
          />
          
        </div> */}
        <div className="md:h-[306px] sm:h-[443px] h-[502px] mb-[7px] mt-[80px] mx-auto md:px-5 w-[80%] z-[1]">
          
          <div className=" bg-blue_gray-700_04 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[42px] rounded-[12px] w-[84%] ">
            <div className="flex flex-col items-start justify-start mb-[7px] md:ml-[0] ml-[9px] w-4/5 md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-indigo-100 sm:text-xl tracking-[1.00px] font-bold"
                size="txtRobotoMonoMedium24"
              >
                Strategy
              </Text>
              <Text
                className="leading-[28.00px] mt-8 text-indigo-100 text-lg tracking-[1.00px] w-full"
                size="txtRobotoMonoRegular18"
              >
                Investing in this vault will lock up your stable asset and use
                the yield to invest into (ETH).
              </Text>
              <div className="flex sm:flex-col flex-row gap-10 items-center justify-start mt-[47px] w-[85%] md:w-full">
                <Img
                  className="h-[50px]"
                  src="images/img_group29.svg"
                  alt="groupThirty"
                />
                <div className="flex flex-col gap-3 items-start justify-start w-[70%] sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start w-full">
                    <Text
                      className="text-indigo-100 text-sm tracking-[1.00px]"
                      size="txtRobotoMonoBold14"
                    >
                      Supply:
                    </Text>
                    <Text
                      className="text-indigo-100 text-sm tracking-[1.00px]"
                      size="txtRobotoMonoRegular14"
                    >
                      Any stablecoin (USDC, USDT, DAI)
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[45px] items-center justify-start w-[31%] md:w-full">
                    <Text
                      className="text-indigo-100 text-sm tracking-[1.00px]"
                      size="txtRobotoMonoBold14"
                    >
                      Earn:
                    </Text>
                    <Text
                      className="text-indigo-100 text-sm tracking-[1.00px]"
                      size="txtRobotoMonoRegular14"
                    >
                      ETH
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiftyPage;
