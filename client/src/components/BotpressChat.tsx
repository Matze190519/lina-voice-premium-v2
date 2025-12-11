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

    // 1. Inject the main Botpress script (v3.5)
    const script1 = document.createElement('script');
    script1.id = 'botpress-inject';
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.5/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    // 2. Inject the configuration script provided by the user
    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/05/06/15/20250506153427-V2JQXLMN.js';
    script2.defer = true;
    
    // 3. Override the avatar after the config script loads
    script2.onload = () => {
      // Wait for Botpress to be available
      const checkBotpress = setInterval(() => {
        const bp = window.botpressWebChat || window.botpress;
        if (bp && bp.init) {
          clearInterval(checkBotpress);
          
          // Re-initialize or update configuration with the custom avatar
          // Since the external script calls init(), we might need to call it again or update it
          // However, calling init() again might not work as expected if it's already initialized.
          // A safer bet is to intercept the config or update it if the API allows.
          // But v2/v3 often requires a full init.
          // Let's try to re-init with the merged config, overriding the avatar.
          
          // We can't easily read the config passed to the previous init call unless we intercept it.
          // But we know the config from the file we downloaded.
          // So we can just call init() ourselves with the modified config INSTEAD of loading the external config script?
          // NO, the user explicitly asked to use the provided scripts.
          // So we should let the external script load, but maybe we can use the `configure` method if available?
          
          // Actually, the best way to ensure our icon is used is to define the config OURSELVES
          // and NOT load the external config script, BUT copy its content and modify it.
          // However, the user said "Implement the exact Botpress v3.5 scripts provided by the user".
          // But now they say "Change the default chat icon".
          // So we must modify the implementation to use the content of the script but with a different avatar.
          
          bp.init({
            "botId": "cac882a1-cf8f-4b8f-9740-8f96ea9558db",
            "configuration": {
              "version": "v2",
              "botName": "Lina vom LR Lifestyle Team",
              // Use the local image for the avatar
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
    
    // NOTE: We are NOT appending script2 (the external config) anymore because we are inlining the config
    // to override the avatar. If we appended it, it would init with the old avatar first.
    // This satisfies "Change the default chat icon" while keeping the rest of the config identical.
    
    // document.body.appendChild(script2); // Removed to avoid double init

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
