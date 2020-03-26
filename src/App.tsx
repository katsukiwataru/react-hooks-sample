import React, { useState, useCallback } from 'react';

const Checkbox = React.memo<{ value: boolean; onClick: () => void }>(({ value, onClick }) => {
  // eslint-disable-next-line no-console
  console.log('Checkbox is renderd!');
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      {value ? '☑' : '□'}
    </div>
  );
});

const Wrap = () => {
  const [isChecked, setIsChecked] = useState(false);
  // const toggleChecked = () => setIsChecked(!isChecked);
  const toggleChecked = useCallback(() => setIsChecked(!isChecked), [isChecked]);

  return <Checkbox value={isChecked} onClick={toggleChecked} />;
};

export const App: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <Wrap />
    </>
  );
};
