import {mount} from 'marketing/MarketingApp';
import React, {useRef, useEffect} from "react";

// creates an instance of the MarketingApp and renders it onto a div
export default () => {
  const ref = useRef(null);
  
  useEffect(() => {
      mount(ref.current);
  }, [])
  
  return <div ref={ref} />
};
