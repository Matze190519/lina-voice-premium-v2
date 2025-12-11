import { useEffect } from 'react';

declare global {
  interface Window {
    botpressWebChat: any;
  }
}

export default function BotpressChat() {
  useEffect(() => {
    // Check if script is already present to avoid duplicates
    if (document.getElementById('botpress-inject')) {
      return;
    }

    // 1. Inject the main Botpress script (v3.4 as found on reference site)
    const script = document.createElement('script');
    script.id = 'botpress-inject';
    script.src = 'https://cdn.botpress.cloud/webchat/v3.4/inject.js'; 
    script.async = true;
    
    script.onload = () => {
      // Wait a bit for the script to fully initialize
      setTimeout(() => {
        if (window.botpressWebChat) {
          window.botpressWebChat.init({
            "botId": "cac882a1-cf8f-4b8f-9740-8f96ea9558db",
            "configuration": {
              "botName": "Lina vom LR Lifestyle Team",
              "botAvatar": "https://files.bpcontent.cloud/2025/09/30/22/20250930222336-BY08EPCV.jpeg",
              "botDescription": "Hallo, ich bin Lina, der Chat bot des LR Lifestyle Teams.",
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
              "themeMode": "dark",
              "fontFamily": "AR One Sans",
              "radius": 4,
              "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/11/17/18/20251117183249-ODXZWBXJ.css",
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
        } else {
          console.error("Botpress WebChat not found on window object");
        }
      }, 1000); // 1 second delay to ensure script execution
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
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
    };
  }, []);

  return null;
}
