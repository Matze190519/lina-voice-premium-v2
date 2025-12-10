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

    const script = document.createElement('script');
    script.id = 'botpress-inject';
    script.src = 'https://cdn.botpress.cloud/webchat/v3.4/inject.js';
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.id = 'botpress-config';
    // Use the updated configuration script found on the reference site
    script2.src = 'https://files.bpcontent.cloud/2025/05/06/15/20250506153427-V2JQXLMN.js';
    script2.async = true;
    
    // Add event listener to configure feedback when the webchat is ready
    script2.onload = () => {
      window.botpressWebChat.onEvent(
        function (event: any) {
          if (event.type === 'LIFECYCLE.LOADED') {
            window.botpressWebChat.sendEvent({ type: 'show' });
          }
        },
        ['LIFECYCLE.LOADED']
      );
    };
    
    document.body.appendChild(script2);

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
