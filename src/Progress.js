import React, { useState, useEffect } from 'react';

const Progress = ({ percent }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const diff = percent - prevProgress;
        const step = Math.ceil(diff / 10);
        if (diff <= step) {
          clearInterval(timer);
          return percent;
        }
        return prevProgress + step;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [percent]);

  const circumference = 2 * Math.PI * 45;
  const progressOffset = (365 - progress) * (circumference / 365);

  const progressStyle = {
    strokeDashoffset: `${progressOffset}px`,
  };

  return (
    <svg className="progress-bar" width="100" height="100">
      <circle className="progress-bar-trail" cx="50" cy="50" r="45" />
      <circle className="progress-bar-fill" cx="50" cy="50" r="45" style={progressStyle} />
      <text className="progress-bar-text" x="50" y="55" dominantBaseline="middle" textAnchor="middle">{progress}/365</text>
    </svg>
  );
};

export default Progress;
