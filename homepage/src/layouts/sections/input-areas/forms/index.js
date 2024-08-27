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

// Forms page components
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";
import FormContext from "layouts/sections/input-areas/forms/components/FormContext";

// Forms page components code
import formSimpleCode from "layouts/sections/input-areas/forms/components/FormSimple/code";
import formContextCode from "layouts/sections/input-areas/forms/components/FormContext/code";

function Forms() {
  return (
    <BaseLayout
      title="Forms"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/input-areas/forms" },
        { label: "Forms" },
      ]}
    >
      <View title="Form Simple" code={formSimpleCode}>
        <FormSimple />
      </View>
      <View title="Form Context" code={formContextCode}>
        <FormContext />
      </View>
    </BaseLayout>
  );
}

export default Forms;
