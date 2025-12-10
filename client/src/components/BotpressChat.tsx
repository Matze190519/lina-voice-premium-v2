import { useEffect } from 'react';

export default function BotpressChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      window.botpressWebChat.init({
        "composerPlaceholder": "Frag Lina etwas...",
        "botConversationDescription": "Lina Voice AI Assistant",
        "botId": "5206232e-4377-44da-9664-43610444659c", // Extracted from lrlifestyle.pro
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "5206232e-4377-44da-9664-43610444659c",
        "webhookId": "63602506-6552-4096-8a7b-5e038f0a006e",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Lina Voice",
        "avatarUrl": "https://ki-voice.net/wp-content/uploads/2024/10/Lina-Avatar.png", // Using existing avatar
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/06f6b646-8d43-4566-9369-182367839660/v66368/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "showPoweredBy": false,
        "theme": "prism",
        "themeColor": "#2563eb"
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
