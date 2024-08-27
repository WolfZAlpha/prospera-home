/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Tables page components
import TableOne from "layouts/sections/elements/tables/components/TableOne";

// Tables page components code
import tableOneCode from "layouts/sections/elements/tables/components/TableOne/code";

function Tables() {
  return (
    <BaseLayout
      title="Tables"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/tables" },
        { label: "Tables" },
      ]}
    >
      <View title="Table One" code={tableOneCode}>
        <TableOne />
      </View>
    </BaseLayout>
  );
}

export default Tables;
