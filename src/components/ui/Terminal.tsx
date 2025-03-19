
import React, { useState, useEffect } from 'react';

interface TerminalProps {
  lines: string[];
  typingSpeed?: number;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ 
  lines, 
  typingSpeed = 30,
  className = ""
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    // Blink the cursor
    const cursorInterval = setInterval(() => {
      setCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    if (currentChar < lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const updatedLines = [...prev];
          if (currentLine >= updatedLines.length) {
            updatedLines.push(lines[currentLine].substring(0, currentChar + 1));
          } else {
            updatedLines[currentLine] = lines[currentLine].substring(0, currentChar + 1);
          }
          return updatedLines;
        });
        setCurrentChar(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, typingSpeed * 10);

      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, typingSpeed]);

  return (
    <div className={`font-mono bg-cod-black/80 text-cod-green p-4 rounded border border-cod-green/30 shadow-inner max-h-96 overflow-auto ${className}`}>
      {displayedLines.map((line, i) => (
        <div key={i} className="mb-1">
          <span className="mr-2 opacity-50">{'>>'}</span>
          <span>{line}</span>
          {i === currentLine - 1 && cursor && <span className="inline-block w-2 h-4 bg-cod-green/70 ml-1 animate-pulse-slow"></span>}
        </div>
      ))}
      {currentLine < lines.length && (
        <div className="mb-1">
          <span className="mr-2 opacity-50">{'>>'}</span>
          <span>{displayedLines[currentLine] || ''}</span>
          {cursor && <span className="inline-block w-2 h-4 bg-cod-green/70 ml-1 animate-pulse-slow"></span>}
        </div>
      )}
    </div>
  );
};

export default Terminal;
