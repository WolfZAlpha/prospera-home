/** 
=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.
*/

import { useEffect, useState } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import PDBox from "../../components/PDBox";
import PDTypography from "../../components/PDTypography";
import SidenavCollapse from "./SidenavCollapse";
import SidenavList from "./SidenavList";
import SidenavItem from "./SidenavItem";
import SidenavCard from "./SidenavCard";
import SimmmpleLogo from "../Icons/SimmmpleLogo";
import SidenavRoot from "./SidenavRoot";
import sidenavLogoLabel from "./styles/sidenav";
import { Scrollbars } from "react-custom-scrollbars-2";
import { renderThumb, renderTrack, renderTrackRTL, renderView, renderViewRTL } from "../Scrollbar";
import { useDashboardUIController, setMiniSidenav, setTransparentSidenav } from "../../context";

function Sidenav({ color, brand, brandName, routes, handleLinkClick, ...rest }) {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [openNestedCollapse, setOpenNestedCollapse] = useState(false);
  const [controller, dispatch] = useDashboardUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];
  const itemName = pathname.split("/").slice(1)[1];

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  useEffect(() => {
    if (window.innerWidth < 1440) {
      setTransparentSidenav(dispatch, false);
    }
  }, [dispatch]);

  const handleNavigation = (path) => {
    if (path) {
      console.log("Navigating to:", path);
      handleLinkClick(path);
    } else {
      console.error("No path provided for navigation");
    }
  };

  const renderNestedCollapse = (collapse) => {
    const template = collapse.map(({ name, path, key, href }) =>
      href ? (
        <Link
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavItem color={color} name={name} nested />
        </Link>
      ) : (
        <SidenavItem
          key={key}
          color={color}
          name={name}
          active={path === pathname}
          nested
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(path);
          }}
        />
      )
    );

    return template;
  };

  const renderCollapse = (collapses) =>
    collapses.map(({ name, collapse, path, href, key }) => {
      let returnValue;

      if (collapse) {
        returnValue = (
          <SidenavItem
            color={color}
            key={key}
            name={name}
            active={key === itemName}
            open={openNestedCollapse === name}
            onClick={() =>
              openNestedCollapse === name
                ? setOpenNestedCollapse(false)
                : setOpenNestedCollapse(name)
            }
          >
            {renderNestedCollapse(collapse)}
          </SidenavItem>
        );
      } else {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavItem color={color} name={name} active={key === itemName} />
          </Link>
        ) : (
          <SidenavItem
            color={color}
            name={name}
            active={key === itemName}
            onClick={(e) => {
              e.preventDefault();
              if (path) {
                handleNavigation(path);
              } else {
                console.error("No path defined for route:", name);
              }
            }}
          />
        );
      }
      return <SidenavList key={key}>{returnValue}</SidenavList>;
    });

  const renderRoutes = routes.map(
    ({ type, name, icon, title, collapse, noCollapse, key, href, path }) => {
      let returnValue;

      if (type === "collapse") {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavCollapse
              color={color}
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
        ) : (
          <SidenavCollapse
            color={color}
            key={key}
            name={name}
            icon={icon}
            active={key === collapseName}
            open={openCollapse === name}
            onClick={() => {
              if (collapse) {
                openCollapse === name ? setOpenCollapse(false) : setOpenCollapse(name);
              } else if (path) {
                handleNavigation(path);
              } else {
                console.error("No path or collapse defined for route:", name);
              }
            }}
          >
            {collapse ? renderCollapse(collapse) : null}
          </SidenavCollapse>
        );
      } else if (type === "title") {
        returnValue = (
          <PDTypography
            key={key}
            display="block"
            variant="caption"
            fontWeight="bold"
            color="white"
            textTransform="uppercase"
            pl={3}
            my={3}
            ml={1}
          >
            {title}
          </PDTypography>
        );
      } else if (type === "divider") {
        returnValue = <Divider key={key} />;
      }

      return returnValue;
    }
  );

  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ miniSidenav, transparentSidenav }}>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        renderThumbVertical={renderThumb}
        renderTrackVertical={window.location.href.includes("rtl") ? renderTrackRTL : renderTrack}
        renderView={window.location.href.includes("rtl") ? renderViewRTL : renderView}
      >
        <PDBox
          display="flex"
          sx={{ flexDirection: "column", justifyContent: "space-between", height: "100%" }}
        >
          <PDBox pt={3} pb={1} px={4} textAlign="center">
            <PDBox
              display={{ xs: "block", xl: "none" }}
              position="absolute"
              top={0}
              right={0}
              p={1.625}
              onClick={closeSidenav}
              sx={{ cursor: "pointer" }}
            >
              <PDTypography variant="h6" color="white">
                <Icon sx={{ fontWeight: "bold" }}>close</Icon>
              </PDTypography>
            </PDBox>
            <PDBox component={NavLink} to="/" display="flex" alignItems="center">
              <PDBox
                sx={
                  ((theme) => sidenavLogoLabel(theme, { miniSidenav }),
                  {
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                  })
                }
              >
                <PDBox
                  display="flex"
                  sx={
                    ((theme) => sidenavLogoLabel(theme, { miniSidenav, transparentSidenav }),
                    {
                      mr: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
                    })
                  }
                >
                  <SimmmpleLogo size="24px" />
                </PDBox>
                <PDTypography
                  variant="button"
                  textGradient={true}
                  color="logo"
                  fontSize={14}
                  letterSpacing={2}
                  fontWeight="medium"
                  sx={
                    ((theme) => sidenavLogoLabel(theme, { miniSidenav, transparentSidenav }),
                    {
                      opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
                      maxWidth: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : "100%",
                      margin: "0 auto",
                    })
                  }
                >
                  {brandName}
                </PDTypography>
              </PDBox>
            </PDBox>
            <Divider light />
          </PDBox>
          <List sx={{ mb: "auto" }}>{renderRoutes}</List>
          <PDBox pt={2} mx={2} mb={2}>
            <SidenavCard />
          </PDBox>
        </PDBox>
      </Scrollbars>
    </SidenavRoot>
  );
}

Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleLinkClick: PropTypes.func.isRequired,
};

export default Sidenav;
