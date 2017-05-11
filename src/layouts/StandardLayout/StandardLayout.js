import React from 'react';
import '../../styles/core.scss';

export const StandardLayout = ({children, ...props}) => (
    <div className="container">
      <div>
        {children}
      </div>
    </div>
);

export default StandardLayout
