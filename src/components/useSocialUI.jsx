import { useState } from "react";

const useSocialUI = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSocialShare, setShowSocialShare] = useState(false);
  const [showLeaveSoon, setShowLeaveSoon] = useState(false);

  const handleMinimize = () => {
    setIsMinimized((prev) => !prev);
    setShowSocialShare((prev) => !prev);
  };

  const handleCloseSocialShare = () => {
    setIsMinimized(false);
    setTimeout(() => {
      setShowSocialShare(false);
    }, 500);
  };

  const handleLeaveSoon = () => {
    setShowLeaveSoon((prev) => !prev);
  };

  const handleCloseLeaveSoon = () => {
    setTimeout(() => {
      setShowLeaveSoon(false);
    }, 500);
  };

  return {
    isMinimized,
    showSocialShare,
    showLeaveSoon,
    handleMinimize,
    handleCloseSocialShare,
    handleLeaveSoon,
    handleCloseLeaveSoon,
  };
};

export default useSocialUI;
