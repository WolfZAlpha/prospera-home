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

// Notifications page components
import ToastBasic from "layouts/sections/attention-catchers/notifications/components/ToastBasic";
import ToastMessage from "layouts/sections/attention-catchers/notifications/components/ToastMessage";

// Notifications page components code
import toastBasicCode from "layouts/sections/attention-catchers/notifications/components/ToastBasic/code";
import toastMessageCode from "layouts/sections/attention-catchers/notifications/components/ToastMessage/code";

function Notifications() {
  return (
    <BaseLayout
      title="Notifications"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/notifications" },
        { label: "Notifications" },
      ]}
    >
      <View title="Toast basic" code={toastBasicCode}>
        <ToastBasic />
      </View>
      <View title="Toast message" code={toastMessageCode}>
        <ToastMessage />
      </View>
    </BaseLayout>
  );
}

export default Notifications;
