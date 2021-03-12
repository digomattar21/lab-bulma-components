import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = ({isDanger, isSmall, isSuccess, className,children}) =>{
  let cn = `button ${className?className:''} ${isDanger?'is-danger':''} ${isSmall?'is-small':''} ${isSuccess?'is-success':''}`;
  return (
    <button className={cn}>{children}</button>
  )
}

export default CoolButton;