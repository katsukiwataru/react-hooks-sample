import React from 'react';

interface Props {
  wrap: JSX.Element;
}

export const Test: React.FC<Props> = ({ wrap }) => {
  console.log(wrap);
  return (
    <div>
      {wrap}
      <div>hogehoge</div>
    </div>
  );
};
