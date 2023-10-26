const styles = {
  boxWidth: "md:max-w-[1200px] lg:max-w-[1200px] xl:max-w-[1280px] w-full",

  heading1: "font-kantumruyPro text-[41px] text-white w-full",
  heading2: "font-kantumruyPro text-[32px] text-white w-full",
  heading3: "font-kantumruyPro text-[24px] text-white w-full",
  paragraph: "font-kantumruyPro text-[18px] text-white  leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  buttonDefault: "flex m-auto items-center px-4 py-2 items-center rounded-md text-white bg-[#1075bc] hover:bg-[#0c65a4]"
};

export const layout = {
  mainLayout: "bg-primary w-full overflow-hidden",
  navBar: "w-full fixed top-0 left-0 bg-primary height-[64px] z-[9999] shadow-lg",
  mainContent: "w-full h-full mt-[64px] bg-primary",
};

export default styles;
