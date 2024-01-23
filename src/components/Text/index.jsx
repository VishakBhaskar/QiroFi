import React from "react";

const sizeClasses = {
  txtRobotoMonoMedium36: "font-medium font-robotomono",
  txtRobotoMonoRegular16: "font-normal font-robotomono",
  txtRobotoMonoMedium14: "font-normal font-robotomono",
  txtRobotoMonoRegular18: "font-normal font-robotomono",
  txtRobotoMonoMedium18: "font-normal font-robotomono",
  txtRobotoMonoMedium12Indigo100: "font-normal font-robotomono",
  txtRobotoMonoRegular18GreenA700: "font-normal font-robotomono",
  txtRobotoMonoRegular12: "font-normal font-robotomono",
  txtRobotoMonoRegular14: "font-normal font-robotomono",
  txtRobotoMonoRegular36: "font-normal font-robotomono",
  txtRobotoMonoBold14: "font-bold font-robotomono",
  txtRobotoMonoRegular14Indigo1004c: "font-normal font-robotomono",
  txtRobotoMonoBold14Indigo1004c: "font-bold font-robotomono",
  txtRobotoMonoMedium12: "font-normal font-robotomono",
  txtRobotoMonoMedium24: "font-normal font-robotomono",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
