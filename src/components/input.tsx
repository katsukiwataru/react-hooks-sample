import React, { useState, useCallback } from 'react';

const Checkbox = ({ value, onClick }: { value: boolean; onClick: () => void }) => {
  // eslint-disable-next-line no-console
  console.log('Checkbox is renderd!', value);
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      {value ? '☑' : '□'}
      <p>Checkbox click</p>
    </div>
  );
};

export const Wrap = () => {
  const [isChecked, setIsChecked] = useState(false);
  // const toggleChecked = () => setIsChecked(!isChecked);
  const toggleChecked = useCallback(() => setIsChecked(!isChecked), [isChecked]);

  // eslint-disable-next-line no-console
  console.log('Wrap is renderd!', isChecked);

  return (
    <div>
      <Checkbox value={isChecked} onClick={toggleChecked} />
      <p>hoge</p>
    </div>
  );
};
