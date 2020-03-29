import React from 'react';

interface Props {
  wrap: JSX.Element;
}

export const Test: React.FC<Props> = ({ wrap }) => {
  // eslint-disable-next-line no-console
  console.log('wrap', 'Test');
  return (
    <div>
      {wrap}
      <div>hogehoge</div>
    </div>
  );
};
