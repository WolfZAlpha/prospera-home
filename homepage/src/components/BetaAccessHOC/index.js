/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BetaContext } from "../contexts/BetaContext";
import { WalletContext } from "../contexts/WalletContext";

const BetaAccessHOC = (WrappedComponent) => {
  return function WithBetaAccess(props) {
    const { user } = useContext(AuthContext);
    const { isBetaMode, isWhitelisted, hasRequestedWhitelist, requestWhitelist } =
      useContext(BetaContext);
    const { wallet } = useContext(WalletContext);

    if (!user) {
      return <div>Please sign in to access this page.</div>;
    }

    if (
      isBetaMode &&
      !isWhitelisted &&
      !["admin", "co-admin", "prosperaTeam", "kol"].includes(user.role)
    ) {
      if (!hasRequestedWhitelist) {
        return (
          <div>
            <p>You are not an approved member to access during beta-testing.</p>
            <button onClick={() => requestWhitelist(wallet.address)}>
              Request Whitelist Access
            </button>
          </div>
        );
      } else {
        return <div>Your whitelist request is being processed. Please check back later.</div>;
      }
    }

    return <WrappedComponent {...props} />;
  };
};

export default BetaAccessHOC;
