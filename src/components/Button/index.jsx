import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[12px]" };
const variants = {
  outline: {
    blue_gray_600_blue_gray_700_01:
      "bg-gradient2  blue_gray_500_b2_blue_gray_900_b2_border2 border border-solid shadow-bs text-indigo-100",
    blue_gray_600_b0_blue_gray_700_b0_01:
      "bg-gradient  blue_gray_500_95_blue_gray_900_95_border border border-solid shadow-bs",
    deep_purple_400_indigo_A200_01:
      "bg-gradient1  blue_gray_500_b2_blue_gray_900_b2_border border border-solid shadow-bs1 text-indigo-100",
  },
  gradient: { amber_A700_amber_300: "bg-gradient4 " },
  fill: { indigo_A200: "bg-indigo-A200" },
};
const sizes = { xs: "p-[5px]", sm: "p-2.5", md: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "outline",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "gradient", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_600_blue_gray_700_01",
    "blue_gray_600_b0_blue_gray_700_b0_01",
    "deep_purple_400_indigo_A200_01",
    "amber_A700_amber_300",
    "indigo_A200",
  ]),
};

export { Button };
