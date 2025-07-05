import React, { useEffect, useState } from 'react';

const TypingEffect = ({ texts, speed = 100, eraseSpeed = 50, delay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }, eraseSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, texts, speed, eraseSpeed, delay]);

  return (
    <span>
      {displayedText}
      <span className="text-[#8245ec]">|</span>
    </span>
  );
};

export default TypingEffect;
