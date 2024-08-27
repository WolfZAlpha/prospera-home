/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import FooterOne from "layouts/sections/page-sections/footers/components/FooterOne";
import FooterTwo from "layouts/sections/page-sections/footers/components/FooterTwo";
import FooterThree from "layouts/sections/page-sections/footers/components/FooterThree";

// Stats page components code
import footerOneCode from "layouts/sections/page-sections/footers/components/FooterOne/code";
import footerTwoCode from "layouts/sections/page-sections/footers/components/FooterTwo/code";
import footerThreeCode from "layouts/sections/page-sections/footers/components/FooterThree/code";

function Footers() {
  return (
    <BaseLayout
      title="Footers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/footers" },
        { label: "Footers" },
      ]}
    >
      <View title="Footer 1" code={footerOneCode}>
        <MKBox bgColor="white" pt={3} pl={{ xs: 3, lg: 0 }}>
          <FooterOne />
        </MKBox>
      </View>
      <View title="Footer 2" code={footerTwoCode}>
        <MKBox pt={3}>
          <FooterTwo />
        </MKBox>
      </View>
      <View title="Footer 3" code={footerThreeCode}>
        <FooterThree />
      </View>
    </BaseLayout>
  );
}

export default Footers;
