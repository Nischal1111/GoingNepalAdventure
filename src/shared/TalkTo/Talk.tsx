"use client"
import { useEffect } from 'react';

export const TawkToScript = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6752c2612480f5b4f5a895f3/1iedkejqt';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append script to document
    document.body.appendChild(script);

    // Cleanup function to remove script if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};