import React, { useState, useEffect, ReactNode } from 'react';

interface DelayedFallbackProps {
  children: ReactNode;
  delay?: number;
  minDuration?: number;
}

const DelayedFallback: React.FC<DelayedFallbackProps> = ({ children, delay = 500, minDuration = 500 }) => {
  const [showFallback, setShowFallback] = useState(false);
  const [minDurationElapsed, setMinDurationElapsed] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShowFallback(true);
    }, delay);

    const minDurationTimer = setTimeout(() => {
      setMinDurationElapsed(true);
    }, delay + minDuration);

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(minDurationTimer);
    };
  }, [delay, minDuration]);

  if (!showFallback) {
    return null;
  }

  return minDurationElapsed ? <>{children}</> : <>{children}</>;  // Fallback component remains visible for the specified minimum duration
};

export default DelayedFallback;

