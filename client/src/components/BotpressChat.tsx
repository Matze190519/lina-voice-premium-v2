import { useEffect } from 'react';

export default function BotpressChat() {
  useEffect(() => {
    // Check if script is already present to avoid duplicates
    if (document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2024/10/08/10/20241008103322-L8K3G7X0.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      // Cleanup if needed, though Botpress usually handles its own lifecycle
      // Removing the script tag doesn't necessarily remove the widget instance
    };
  }, []);

  return null;
}
