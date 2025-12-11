import { useEffect } from 'react';

declare global {
  interface Window {
    botpressWebChat: any;
    botpress: any;
  }
}

export default function BotpressChat() {
  useEffect(() => {
    // Check if script is already present to avoid duplicates
    if (document.getElementById('botpress-inject')) {
      return;
    }

    // 1. Inject the main Botpress script
    const script = document.createElement('script');
    script.id = 'botpress-inject';
    script.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js'; // Use stable v2.2
    script.async = true;
    
    script.onload = () => {
      // 2. Initialize Botpress with the configuration extracted from the reference site
      // This avoids loading an external config file that might fail or be blocked
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          "botId": "cac882a1-cf8f-4b8f-9740-8f96ea9558db",
          "configuration": {
            "version": "v2",
            "botName": "Lina vom LR Lifestyle Team",
            "botAvatar": "https://files.bpcontent.cloud/2025/09/30/22/20250930222336-BY08EPCV.jpeg",
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

        // Add event listener for showing the chat
        window.botpressWebChat.onEvent(
          function (event: any) {
            if (event.type === 'LIFECYCLE.LOADED') {
              window.botpressWebChat.sendEvent({ type: 'show' });
            }
          },
          ['LIFECYCLE.LOADED']
        );
      }
    };

    document.body.appendChild(script);

    // Add custom styles to adjust position on mobile
    const style = document.createElement('style');
    style.innerHTML = `
      @media (max-width: 768px) {
        .bpw-widget-btn {
          bottom: 90px !important; /* Move up to avoid overlapping bottom navigation/buttons */
          right: 20px !important;
          z-index: 9999 !important;
        }
        .bpw-chat-container {
          z-index: 9999 !important;
          bottom: 90px !important;
        }
      }
      /* Ensure it sits above other elements */
      .bpw-widget-btn, .bpw-chat-container {
        z-index: 9999 !important;
      }

      /* Pulse animation for the chat button */
      @keyframes pulse-glow {
        0% {
          box-shadow: 0 0 0 0 rgba(196, 155, 255, 0.7);
        }
        70% {
          box-shadow: 0 0 0 15px rgba(196, 155, 255, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(196, 155, 255, 0);
        }
      }

      .bpw-widget-btn {
        animation: pulse-glow 2s infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
    };
  }, []);

  return null;
}
