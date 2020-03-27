import React, { useState, useMemo } from 'react';
import { Wrap } from './components/input';
import { Test } from './components/test';

export const App: React.FC = () => {
  const [text, setText] = useState('');
  // eslint-disable-next-line no-console
  console.log(text);
  const wrap = useMemo(() => <Test wrap={<Wrap />} />, []);

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      {wrap}
    </>
  );
};
