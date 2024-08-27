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

// Stats page components
import LogoAreaOne from "layouts/sections/page-sections/logo-areas/components/LogoAreaOne";
import LogoAreaTwo from "layouts/sections/page-sections/logo-areas/components/LogoAreaTwo";
import LogoAreaThree from "layouts/sections/page-sections/logo-areas/components/LogoAreaThree";

// Stats page components code
import logoAreaOneCode from "layouts/sections/page-sections/logo-areas/components/LogoAreaOne/code";
import logoAreaTwoCode from "layouts/sections/page-sections/logo-areas/components/LogoAreaTwo/code";
import logoAreaThreeCode from "layouts/sections/page-sections/logo-areas/components/LogoAreaThree/code";

function LogoAreas() {
  return (
    <BaseLayout
      title="Logo Areas"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/logo-areas" },
        { label: "Logo Areas" },
      ]}
    >
      <View title="Logo Area 1" code={logoAreaOneCode}>
        <LogoAreaOne />
      </View>
      <View title="Logo Area 2" code={logoAreaTwoCode}>
        <LogoAreaTwo />
      </View>
      <View title="Logo Area 3" code={logoAreaThreeCode}>
        <LogoAreaThree />
      </View>
    </BaseLayout>
  );
}

export default LogoAreas;
