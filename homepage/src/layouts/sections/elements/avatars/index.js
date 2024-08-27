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

// Avatars page components
import AvatarGroup from "layouts/sections/elements/avatars/components/AvatarGroup";
import AvatarSize from "layouts/sections/elements/avatars/components/AvatarSize";

// Avatars page components code
import avatarGroupCode from "layouts/sections/elements/avatars/components/AvatarGroup/code";
import avatarSizeCode from "layouts/sections/elements/avatars/components/AvatarSize/code";

function Avatars() {
  return (
    <BaseLayout
      title="Avatars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/avatars" },
        { label: "Avatars" },
      ]}
    >
      <View title="Avatar Group" code={avatarGroupCode}>
        <AvatarGroup />
      </View>
      <View title="Avatar Size" code={avatarSizeCode}>
        <AvatarSize />
      </View>
    </BaseLayout>
  );
}

export default Avatars;
