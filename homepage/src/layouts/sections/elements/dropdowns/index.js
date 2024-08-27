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

// Dropdowns page components
import DropdownAndDropup from "layouts/sections/elements/dropdowns/components/DropdownAndDropup";
import SelectPicker from "layouts/sections/elements/dropdowns/components/SelectPicker";

// Dropdowns page components code
import dropdownAndDropupCode from "layouts/sections/elements/dropdowns/components/DropdownAndDropup/code";
import selectPickerCode from "layouts/sections/elements/dropdowns/components/SelectPicker/code";

function Dropdowns() {
  return (
    <BaseLayout
      title="Dropdowns"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/dropdowns" },
        { label: "Dropdowns" },
      ]}
    >
      <View title="Dropdown and Dropup" code={dropdownAndDropupCode}>
        <DropdownAndDropup />
      </View>
      <View title="Selectpicker" height="24rem" code={selectPickerCode}>
        <SelectPicker />
      </View>
    </BaseLayout>
  );
}

export default Dropdowns;
