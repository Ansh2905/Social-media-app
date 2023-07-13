import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween marginBottom="20px">
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsorsed by:
        </Typography>
      </FlexBetween>
      <a href="https://www.xlabhinnovations.com/">
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="http://localhost:3001/assets/XLabhLogo.gif"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
      </a>
    </WidgetWrapper>
  );
};

export default AdvertWidget;