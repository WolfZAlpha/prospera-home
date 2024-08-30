import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import MKBox from "../../../../../components/MKBox";
import MKAvatar from "../../../../../components/MKAvatar";
import MKTypography from "../../../../../components/MKTypography";

function Table({ columns, rows }) {
  const renderColumns = columns.map(({ name, align, width }) => (
    <MKBox
      key={name}
      component="th"
      width={width || "auto"}
      pt={1.5}
      pb={1.25}
      pl={3}
      pr={3}
      textAlign={align}
      sx={{
        fontSize: "0.65rem",
        fontWeight: "bold",
        color: "#01ff02",
        textTransform: "uppercase",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        backgroundColor: "#000000",
      }}
    >
      {name.toUpperCase()}
    </MKBox>
  ));

  const renderRows = rows.map((row) => {
    const rowKey = uuidv4();

    const tableRow = columns.map(({ name, align }) => {
      const cellContent = row[name];
      return (
        <MKBox
          key={uuidv4()}
          component="td"
          p={1}
          textAlign={align}
          sx={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          {name === "company" ? (
            <MKBox display="flex" alignItems="center">
              <MKAvatar src={cellContent[0]} alt={cellContent[1]} size="sm" variant="rounded" />
              <MKTypography variant="button" fontWeight="medium" ml={2} sx={{ color: "white" }}>
                {cellContent[1]}
              </MKTypography>
            </MKBox>
          ) : (
            cellContent
          )}
        </MKBox>
      );
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  });

  return (
    <TableContainer sx={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
      <MuiTable>
        <MKBox component="thead" sx={{ backgroundColor: "#000000" }}>
          <TableRow>{renderColumns}</TableRow>
        </MKBox>
        <TableBody>{renderRows}</TableBody>
      </MuiTable>
    </TableContainer>
  );
}

Table.defaultProps = {
  columns: [],
  rows: [{}],
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      align: PropTypes.oneOf(["left", "right", "center"]),
      width: PropTypes.string,
    })
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
