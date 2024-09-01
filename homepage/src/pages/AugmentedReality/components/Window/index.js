import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";
import PropTypes from "prop-types";

import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";
import pxToRem from "assets/theme/functions/pxToRem";

import "react-resizable/css/styles.css";

const WindowContainer = styled(Box)(() => ({
  background: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRadius: borders.borderRadius.lg,
  boxShadow: boxShadows.xxl,
  border: `1px solid ${colors.dark.main}`,
  overflow: "hidden",
  position: "absolute",
}));

const WindowHeader = styled(Box)(() => ({
  background: "rgba(0, 0, 0, 0.2)",
  color: colors.white.main,
  padding: pxToRem(8),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "move",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));

const ResizeHandle = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: pxToRem(20),
  height: pxToRem(20),
  cursor: "se-resize",
  background: `linear-gradient(135deg, transparent 50%, ${colors.info.main} 50%)`,
}));

const Window = ({
  title,
  onClose,
  onMinimize,
  children,
  initialPosition,
  initialSize,
  onPositionChange,
  onSizeChange,
}) => {
  const [position, setPosition] = useState(initialPosition || { x: 50, y: 50 });
  const [size, setSize] = useState(initialSize || { width: 400, height: 300 });

  const handleDrag = (e, data) => {
    const newPosition = { x: data.x, y: data.y };
    setPosition(newPosition);
    onPositionChange && onPositionChange(newPosition);
  };

  const handleResize = (e, { size }) => {
    setSize(size);
    onSizeChange && onSizeChange(size);
  };

  return (
    <Draggable handle=".window-header" position={position} onDrag={handleDrag}>
      <Resizable
        width={size.width}
        height={size.height}
        onResize={handleResize}
        minConstraints={[200, 100]}
        maxConstraints={[800, 600]}
      >
        <WindowContainer style={{ width: size.width, height: size.height }}>
          <WindowHeader className="window-header">
            <Typography variant="subtitle1" fontWeight="bold">
              {title}
            </Typography>
            <Box>
              <IconButton
                size="small"
                onClick={onMinimize}
                sx={{ color: colors.white.main, mr: 1 }}
              >
                <MinimizeIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" onClick={onClose} sx={{ color: colors.white.main }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          </WindowHeader>
          <Box
            p={2}
            sx={{ color: colors.white.main, height: "calc(100% - 48px)", overflow: "auto" }}
            className="custom-scrollbar"
          >
            {children}
          </Box>
          <ResizeHandle />
        </WindowContainer>
      </Resizable>
    </Draggable>
  );
};

Window.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onMinimize: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  initialPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  initialSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  onPositionChange: PropTypes.func,
  onSizeChange: PropTypes.func,
};

export default Window;
