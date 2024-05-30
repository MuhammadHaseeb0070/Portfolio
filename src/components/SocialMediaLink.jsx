// SocialMediaLink.jsx
import React from "react";

const SocialMediaLink = ({ platform, profileName, imagePath }) => {
  const handleClick = () => {
    let appUrl, webUrl;

    switch (platform) {
      case "facebook":
        appUrl = `fb://profile/${profileName}`;
        webUrl = `https://www.facebook.com/${profileName}`;
        break;

      case "whatsapp":
        appUrl = `whatsapp://send?phone=${profileName}`;
        webUrl = `https://web.whatsapp.com/send?phone=${profileName}`;

        // Check if the user is on a mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // Open the app if on a mobile device, otherwise open in a new browser window
        if (isMobile) {
          openAppOrWeb(appUrl, webUrl);
        } else {
          // For non-mobile devices, open in a new browser window
          window.open(webUrl, "_blank");
        }
        return;
        break;
      case "instagram":
        appUrl = `instagram://user?username=${profileName}`;
        webUrl = `https://www.instagram.com/${profileName}`;
        break;
      case "linkedin":
        appUrl = `linkedin://profile/${profileName}`;
        webUrl = `https://www.linkedin.com/in/${profileName}`;
        break;
  
      default:
        return;
    }

    // Check if the app is installed
    const isAppInstalled = window.navigator.userAgent.includes(platform);

    // Open the app if installed, otherwise open in browser
    if (isAppInstalled) {
      window.location.href = appUrl;
    } else {
      window.open(webUrl, "_blank");
    }
  };

  const openAppOrWeb = (appUrl, webUrl) => {
    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = appUrl;

    // Try to open the app using the "intent" method
    anchor.onload = () => {
      document.body.appendChild(anchor);
      window.location.href = appUrl;
    };

    // If the "intent" method fails, open in a new browser window
    anchor.onerror = () => {
      window.open(webUrl, "_blank");
    };

    anchor.click();
  };

  return (
    <div>
      <img
        src={imagePath}
        alt={`${platform} Icon`}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default SocialMediaLink;
