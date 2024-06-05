"use client";

import { useEffect } from "react";

const KofiWidgetContainer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const kofiWidgetOverlay = window.kofiWidgetOverlay;
        if (kofiWidgetOverlay) {
          kofiWidgetOverlay.draw("akidiva", {
            type: "floating-chat",
            "floating-chat.donateButton.text": "Buy Me a Coffee",
            "floating-chat.donateButton.background-color": "#fcbf47",
            "floating-chat.donateButton.text-color": "#323842",
          });
        }
      };
    }
  }, []);

  return <div id="kofi-widget-container" />;
};

export default KofiWidgetContainer;
