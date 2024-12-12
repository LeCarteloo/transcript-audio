/* eslint-disable no-restricted-syntax */
import { useMemo, useRef } from 'react';
import AudioTracker from './AudioTracker/AudioTracker';

function computeWordPositions(ref) {
  const textRef = ref.current;

  if (!textRef) return;

  const positions = [];

  let currentIndex = 0;

  const { childNodes } = textRef;

  for (const node of childNodes) {
    const { textContent } = node;
    const textNode = node.firstChild;
    const words = textContent.split(/\s+/);

    for (const word of words) {
      if (!word) continue;

      const range = document.createRange();

      range.setStart(textNode, currentIndex);
      range.setEnd(textNode, currentIndex + word.length);

      const rect = range.getBoundingClientRect();

      positions.push({
        word,
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      });

      if (word === words[words.length - 1]) {
        currentIndex += word.length;
        continue;
      }

      const value =
        word === words[words.length - 1] ? word.length : word.length + 1;

      currentIndex += value; // +1 for the space
    }

    currentIndex = 0;
  }

  return positions;
}

const App = () => {
  const ref = useRef<HTMLParagraphElement>(null);

  const data = useMemo(() => computeWordPositions(ref), [ref]);

  console.log(data);

  return (
    <div
      className="app"
      style={{
        position: 'relative',
        isolation: 'isolate',
        padding: '5em',
      }}
    >
      <div>
        <div ref={ref} />
      </div>
      <AudioTracker data={data} />
    </div>
  );
};

export default App;
