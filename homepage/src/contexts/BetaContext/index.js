import React, { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { checkTokenHolding, getTokenBalance } from "../../services/api";
import { AuthContext } from "../AuthContext";
import axios from "axios";
import config from "../../config";

export const BetaContext = createContext();

export const BetaProvider = ({ children }) => {
  const [isBetaMode, setIsBetaMode] = useState(true);
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [hasRequestedWhitelist, setHasRequestedWhitelist] = useState(false);
  const [hasFullAccess, setHasFullAccess] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      checkWhitelistStatus();
      checkFullAccess();
    }
  }, [user]);

  const checkWhitelistStatus = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/v1/users/${user.id}/whitelist-status`);
      setIsWhitelisted(response.data.isWhitelisted);
      setHasRequestedWhitelist(response.data.whitelistStatus === "requested");
    } catch (error) {
      console.error("Error checking whitelist status:", error);
    }
  };

  const checkFullAccess = () => {
    const fullAccessRoles = ["admin", "co-admin", "prosperaTeam", "kol"];
    setHasFullAccess(fullAccessRoles.includes(user.role) || isWhitelisted);
  };

  const hasAccessToFeature = (feature) => {
    const fullAccessRoles = ["admin", "co-admin", "prosperaTeam", "kol"];
    if (fullAccessRoles.includes(user.role)) {
      return true;
    }

    switch (feature) {
      case "augmentedReality":
        return !isBetaMode || isWhitelisted || user.betaAccess;
      case "teamDashboard":
        return ["admin", "co-admin", "prosperaTeam", "kol"].includes(user.role);
      case "userDashboard":
        return !isBetaMode || isWhitelisted || user.betaAccess;
      default:
        return false;
    }
  };

  const requestWhitelist = async (arbitrumWallet) => {
    try {
      const holdsSufficientPROS = await checkTokenHolding(arbitrumWallet);
      if (holdsSufficientPROS) {
        const response = await axios.post(
          `${config.apiUrl}/v1/users/${user.id}/request-whitelist`,
          {
            arbitrumWallet,
          }
        );
        setHasRequestedWhitelist(true);
        alert(response.data.message);
      } else {
        const balance = await getTokenBalance(arbitrumWallet);
        alert(
          `To be considered for whitelisting, you must hold at least 5000 $PROS tokens. Your current balance is ${balance} $PROS. Please visit https://www.prosperaico.com to purchase more $PROS tokens and then come back to re-submit for whitelisting.`
        );
      }
    } catch (error) {
      console.error("Error requesting whitelist:", error);
      alert("An error occurred while processing your request. Please try again later.");
    }
  };

  const toggleBetaMode = async (value) => {
    try {
      await axios.post(`${config.apiUrl}/v1/admin/toggle-beta-mode`, { isBetaMode: value });
      setIsBetaMode(value);
    } catch (error) {
      console.error("Error toggling beta mode:", error);
      alert("An error occurred while toggling beta mode. Please try again later.");
    }
  };

  return (
    <BetaContext.Provider
      value={{
        isBetaMode,
        isWhitelisted,
        hasRequestedWhitelist,
        hasFullAccess,
        requestWhitelist,
        toggleBetaMode,
        hasAccessToFeature,
      }}
    >
      {children}
    </BetaContext.Provider>
  );
};

BetaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BetaProvider;
