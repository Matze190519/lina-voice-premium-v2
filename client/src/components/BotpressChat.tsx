import { useEffect } from 'react';

declare global {
  interface Window {
    botpressWebChat: any;
  }
}

export default function BotpressChat() {
  useEffect(() => {
    // Prevent duplicate injection
    if (document.getElementById('botpress-inject')) return;

    // 1. Load the main Botpress WebChat script
    const script = document.createElement('script');
    script.id = 'botpress-inject';
    script.src = 'https://cdn.botpress.cloud/webchat/v3.5/inject.js';
    script.async = true;
    
    script.onload = () => {
      console.log("Botpress inject.js loaded. Waiting for window.botpressWebChat...");
      
      // 2. Poll for the global object to be ready
      const intervalId = setInterval(() => {
        if (window.botpressWebChat) {
          clearInterval(intervalId);
          console.log("Botpress global object found. Initializing...");

          // 3. Initialize with the configuration (derived from user's script + custom icon)
          window.botpressWebChat.init({
            "botId": "cac882a1-cf8f-4b8f-9740-8f96ea9558db",
            "configuration": {
              "version": "v2", // Explicitly set version if needed, though v3.5 handles it
              "botName": "Lina vom LR Lifestyle Team",
              // CUSTOM ICON HERE - Ensure absolute path
              "botAvatar": window.location.origin + "/images/lina-avatar-future.png",
              "botDescription": "Hallo, ich bin Lina, der Chat bot des LR Lifestyle Teams. Achtung, diese Version von mir ist extrem eingeschränkt, wenn du im LR Lifestyle Team bist werden alle Funktionen für dich freigeschaltet. ",
              "website": {},
              "email": {
                "title": "Info@lr-lifestyle.info",
                "link": "Info@lr-lifestyle.info"
              },
              "phone": {
                "title": "+491715060008",
                "link": "+491715060008"
              },
              "termsOfService": {},
              "privacyPolicy": {},
              "color": "#9333EA",
              "variant": "solid",
              "headerVariant": "solid",
              "themeMode": "dark",
              "fontFamily": "AR One Sans",
              "radius": 4,
              "feedbackEnabled": false,
              "footer": "[⚡ LR Lifestyle Team](https://botpress.com/?from=webchat)",
              "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/11/17/18/20251117183249-ODXZWBXJ.css",
              "allowFileUpload": true,
              "soundEnabled": true,
              "toggleChatId": "bp-embedded-webchat",
              "embeddedChatId": "bp-embedded-webchat",
              "proactiveMessageEnabled": false,
              "proactiveBubbleMessage": "Hi! 👋 Need help?",
              "proactiveBubbleTriggerType": "afterDelay",
              "proactiveBubbleDelayTime": 10
            },
            "clientId": "32dfe644-9e09-4072-bd72-34340d56cb7b"
          });
        }
      }, 100);
    };

    document.body.appendChild(script);

    // Force high z-index via global style to ensure visibility
    const style = document.createElement('style');
    style.innerHTML = `
      .bpw-widget-btn {
        z-index: 2147483647 !important; /* Max z-index */
        bottom: 20px !important;
        right: 20px !important;
      }
      .bpw-chat-container {
        z-index: 2147483647 !important;
      }
    `;
    document.head.appendChild(style);

  }, []);

  return null;
}
