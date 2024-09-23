/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDBadge from "../../../../../components/PDBadge";
import PDTypography from "../../../../../components/PDTypography";
import PDAvatar from "../../../../../components/PDAvatar";
import PDProgress from "../../../../../components/PDProgress";

// Custom styles for the Card

function Card({ image, badge, content, progress, attachedFiles, members }) {
  const renderMembers = members.map((member, key) => {
    const imageAlt = `image-${key}`;

    return (
      <PDAvatar
        key={imageAlt}
        src={member}
        alt={imageAlt}
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { grey } }) =>
            `${borderWidth[2]} solid ${grey[700]}`,
          cursor: "pointer",
          position: "relative",
          ml: -1,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    );
  });

  return (
    <PDBox>
      {image && <PDBox component="img" src={image} width="100%" borderRadius="lg" mb={1} />}
      <PDBadge variant="basic" size="lg" color={badge.color} badgeContent={badge.label} container />
      <PDBox mt={1} mb={2}>
        <PDTypography variant="body2" color="white" mb={2}>
          {content}
        </PDTypography>
        {progress > 0 && (
          <PDBox mt={0.25}>
            <PDProgress variant="contained" value={progress} color={badge.color} />
          </PDBox>
        )}
      </PDBox>
      <PDBox display="flex" justifyContent="space-between" alignItems="center">
        <PDBox display="flex" alignItems="center" color="text">
          {attachedFiles && (
            <>
              <PDTypography variant="body2" color="text" sx={{ lineHeight: 0 }}>
                <Icon sx={{ fontWeight: "bold" }}>attach_file</Icon>
              </PDTypography>
              <PDTypography variant="button" fontWeight="regular" color="text">
                &nbsp;{attachedFiles}
              </PDTypography>
            </>
          )}
        </PDBox>
        <PDBox display="flex">{renderMembers}</PDBox>
      </PDBox>
    </PDBox>
  );
}

// Setting default props for the Card
Card.defaultProps = {
  image: "",
  progress: 0,
  attachedFiles: "",
};

// Typechecking props for the Card
Card.propTypes = {
  image: PropTypes.string,
  badge: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.node.isRequired,
  progress: PropTypes.number,
  attachedFiles: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
