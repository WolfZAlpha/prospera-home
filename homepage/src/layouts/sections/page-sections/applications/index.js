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

// Applications page components
import ApplicationOne from "layouts/sections/page-sections/applications/components/ApplicationOne";
import ApplicationTwo from "layouts/sections/page-sections/applications/components/ApplicationTwo";

// Applications page components code
import applicationOneCode from "layouts/sections/page-sections/applications/components/ApplicationOne/code";
import applicationTwoCode from "layouts/sections/page-sections/applications/components/ApplicationTwo/code";

function Applications() {
  return (
    <BaseLayout
      title="Applications"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/applications" },
        { label: "Applications" },
      ]}
    >
      <View title="Application 1" code={applicationOneCode}>
        <ApplicationOne />
      </View>
      <View title="Application 2" code={applicationTwoCode}>
        <ApplicationTwo />
      </View>
    </BaseLayout>
  );
}

export default Applications;
