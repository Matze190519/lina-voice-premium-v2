import { useEffect } from 'react';

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
      // Cleanup if needed, though removing scripts dynamically can be tricky
    };
  }, []);

  return null;
}
