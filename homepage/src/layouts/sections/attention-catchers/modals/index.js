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

// Modals page components
import SimpleModal from "layouts/sections/attention-catchers/modals/components/SimpleModal";
import NotificationModal from "layouts/sections/attention-catchers/modals/components/NotificationModal";

// Modals page components code
import simpleModalCode from "layouts/sections/attention-catchers/modals/components/SimpleModal/code";
import notificationModalCode from "layouts/sections/attention-catchers/modals/components/NotificationModal/code";

function Modals() {
  return (
    <BaseLayout
      title="Modals"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/modals" },
        { label: "Modals" },
      ]}
    >
      <View title="Simple modal" code={simpleModalCode}>
        <SimpleModal />
      </View>
      <View title="Notification modal" code={notificationModalCode}>
        <NotificationModal />
      </View>
    </BaseLayout>
  );
}

export default Modals;
