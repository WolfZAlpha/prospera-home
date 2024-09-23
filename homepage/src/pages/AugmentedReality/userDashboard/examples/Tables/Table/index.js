/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import Card from "@mui/material/Card";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDAvatar from "../../../components/PDAvatar";
import PDTypography from "../../../components/PDTypography";

// prospera defi dashboard base styles
import colors from "../../../assets/theme/base/colors";
import typography from "../../../assets/theme/base/typography";
import borders from "../../../assets/theme/base/borders";

function Table({ columns, rows }) {
  const { light, grey } = colors;
  const { size, fontWeightMedium } = typography;
  const { borderWidth } = borders;

  const renderColumns = columns.map(({ name, align, width }, key) => {
    let pl;
    let pr;

    if (key === 0) {
      pl = 0;
      pr = 3;
    } else if (key === columns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }

    return (
      <PDBox
        key={name}
        component="th"
        width={width || "auto"}
        pt={1.5}
        pb={1.25}
        pl={align === "left" ? pl : 3}
        pr={align === "right" ? pr : 3}
        textAlign={align}
        fontSize={size.xxs}
        fontWeight={fontWeightMedium}
        color="text"
        opacity={0.7}
        borderBottom={`${borderWidth[1]} solid ${grey[600]}`}
      >
        {name.toUpperCase()}
      </PDBox>
    );
  });

  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;

    const tableRow = columns.map(({ name, align }) => {
      let template;

      if (Array.isArray(row[name])) {
        template = (
          <PDBox
            key={uuidv4()}
            component="td"
            py={1}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${grey[600]}` : null}
          >
            <PDBox display="flex" alignItems="center" py={0.5}>
              <PDBox mr={2}>
                <PDAvatar src={row[name][0]} name={row[name][1]} variant="rounded" size="sm" />
              </PDBox>
              <PDTypography
                variant="button"
                color="white"
                fontWeight="medium"
                sx={{ width: "max-content" }}
              >
                {row[name][1]}
              </PDTypography>
            </PDBox>
          </PDBox>
        );
      } else {
        template = (
          <PDBox
            key={uuidv4()}
            component="td"
            p={1}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${grey[600]}` : null}
          >
            <PDTypography
              variant="button"
              fontWeight="regular"
              color="white"
              sx={{ display: "inline-block", width: "max-content" }}
            >
              {row[name]}
            </PDTypography>
          </PDBox>
        );
      }

      return template;
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  });

  return useMemo(
    () => (
      <Card
        sx={({ breakpoints }) => ({
          [breakpoints.down("xl")]: {
            overflowX: "scroll",
          },
        })}
      >
        <MuiTable>
          <PDBox component="thead">
            <TableRow>{renderColumns}</TableRow>
          </PDBox>
          <TableBody>{renderRows}</TableBody>
        </MuiTable>
      </Card>
    ),
    [columns, rows]
  );
}

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}],
};

// Typechecking props for the Table
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
