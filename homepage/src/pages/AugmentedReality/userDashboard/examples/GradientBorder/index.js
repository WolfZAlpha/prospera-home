/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prospera defi dashboard components
import PDBox from "../../components/PDBox";

// prospera defi dashboard

function GradientBorder(props) {
  const { backgroundImage, children, borderRadius, width, minWidth, padding, ...rest } = props;
  return (
    <PDBox
      padding={padding ? padding : "2px"}
      minWidth={minWidth}
      height="fit-content"
      borderRadius={borderRadius}
      sx={{
        width: "fit-content",
        height: "fit-content",
        backgroundImage: backgroundImage
          ? backgroundImage
          : "radial-gradient(94.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      }}
      {...rest}
    >
      {children}
    </PDBox>
  );
}

export default GradientBorder;
