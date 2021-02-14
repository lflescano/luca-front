import React from 'react';

import Icon from '.';

export default {
    title: 'Atoms/Icons'
}


const icons = [
    'email',
    'lock'
  ];
  
  export const Icons = () => {
    return (
      <div>
        {icons.map((icon) => (
          <div className="color-sample-container">
            <Icon
              className={icon}
              name={icon}
              width={'45'}
              height={'45'}
              fill={"#000000"}
            />
            <small>{`${icon}`}</small>
          </div>
        ))}
      </div>
    );
  };