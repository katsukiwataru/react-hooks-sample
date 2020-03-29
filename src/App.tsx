import React, { useState, useMemo, useCallback } from 'react';
import { Wrap } from './components/input';
import { Test } from './components/test';

export const App: React.FC = () => {
  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // eslint-disable-next-line no-console
  console.log(text, isChecked);
  const test = useMemo(() => <Test wrap={<Wrap />} />, []);
  const toggleChecked = useCallback(() => setIsChecked(!isChecked), [isChecked]);
  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      {test}
      <div style={{ cursor: 'pointer' }} onClick={toggleChecked}>
        {isChecked ? '☑' : '□'}
        <p>App click</p>
      </div>
    </>
  );
};
