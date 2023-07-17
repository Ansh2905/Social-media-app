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
          Sponsored by:
        </Typography>
      </FlexBetween>
      <a href="https://open.spotify.com/">
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="http://localhost:3001/assets/spotify.png"
          style={{ border: "0", borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
      </a>
    </WidgetWrapper>
  );
};

export default AdvertWidget;