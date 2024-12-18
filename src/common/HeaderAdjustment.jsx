import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HeaderAdjustment = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className=''></div>
  )
}

export default HeaderAdjustment