import React from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  themeKey: string;
  themeName: string;
};

const themeItem: React.FC<Props> = ({ themeKey, themeName }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/theme/${themeKey}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {themeName}
    </div>
  );
};

export default themeItem;
