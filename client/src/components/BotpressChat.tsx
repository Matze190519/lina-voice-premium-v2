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

    // 1. Inject the main Botpress script (v3.4 as found on reference site)
    const script = document.createElement('script');
    script.id = 'botpress-inject';
    script.src = 'https://cdn.botpress.cloud/webchat/v3.4/inject.js'; 
    script.async = true;
    
    script.onload = () => {
      // Robust polling mechanism to wait for Botpress to initialize
      let attempts = 0;
      const maxAttempts = 20; // Try for 10 seconds (20 * 500ms)
      
      const initBotpress = () => {
        // Check for either window.botpressWebChat OR window.botpress
        // The reference site uses window.botpress
        const bp = window.botpressWebChat || window.botpress;
        
        if (bp) {
          console.log("Botpress found, initializing...");
          
          // Ensure the init function exists before calling it
          if (typeof bp.init === 'function') {
            bp.init({
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
            if (typeof bp.onEvent === 'function') {
              bp.onEvent(
                function (event: any) {
                  if (event.type === 'LIFECYCLE.LOADED') {
                    bp.sendEvent({ type: 'show' });
                  }
                },
                ['LIFECYCLE.LOADED']
              );
            }
          } else {
            console.error("Botpress init function not found");
          }
        } else {
          attempts++;
          if (attempts < maxAttempts) {
            setTimeout(initBotpress, 500); // Retry every 500ms
          } else {
            console.error("Botpress failed to load after multiple attempts");
          }
        }
      };

      // Start polling
      initBotpress();
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
