import { useEffect } from 'react';

export default function BotpressChat() {
  useEffect(() => {
    // Check if script is already present to avoid duplicates
    if (document.getElementById('botpress-inject')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'botpress-inject';
    script.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.id = 'botpress-config';
    script2.src = 'https://files.bpcontent.cloud/2024/10/08/10/20241008103322-L8K3G7X0.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      // Cleanup not strictly necessary for global widget, but good practice to avoid memory leaks if component unmounts frequently
    };
  }, []);

  return null;
}
