declare module 'react-typing-effect' {
  import * as React from 'react';

  interface ReactTypingEffectProps {
    text?: string[] | string;
    speed?: number;
    eraseSpeed?: number;
    eraseDelay?: number;
    typingDelay?: number;
    staticText?: string;
    cursor?: string;
    className?: string;
    
    cursorRenderer?: (cursor: string) => React.ReactNode;
    displayTextRenderer?: (text: string, i: number) => React.ReactNode;

    onTypingDone?: () => void;
  }

  const ReactTypingEffect: React.FC<ReactTypingEffectProps>;
  export default ReactTypingEffect;
}
