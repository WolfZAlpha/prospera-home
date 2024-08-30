import React, { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { checkTokenHolding, getTokenBalance } from "../../services/tokenService";
import { AuthContext } from "../AuthContext";
import axios from "axios";

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
      const response = await axios.get(`/api/users/${user.id}/whitelist-status`);
      setIsWhitelisted(response.data.isWhitelisted);
      setHasRequestedWhitelist(response.data.hasRequestedWhitelist);
    } catch (error) {
      console.error("Error checking whitelist status:", error);
    }
  };

  const checkFullAccess = () => {
    const fullAccessRoles = ["admin", "co-admin", "prosperaTeam", "kol"];
    setHasFullAccess(fullAccessRoles.includes(user.role) || isWhitelisted);
  };

  const requestWhitelist = async (walletAddress) => {
    try {
      const holdsSufficientPROS = await checkTokenHolding(walletAddress);
      if (holdsSufficientPROS) {
        const response = await axios.post(`/api/users/${user.id}/request-whitelist`, {
          walletAddress,
        });
        setHasRequestedWhitelist(true);
        alert(response.data.message);
      } else {
        const balance = await getTokenBalance(walletAddress);
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
      await axios.post("/api/admin/toggle-beta-mode", { isBetaMode: value });
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
      }}
    >
      {children}
    </BetaContext.Provider>
  );
};

BetaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
