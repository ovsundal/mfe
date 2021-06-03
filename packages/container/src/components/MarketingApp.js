import {mount} from 'marketing/MarketingApp';
import React, {useRef, useEffect} from "react";
import {useHistory} from 'react-router-dom';

// creates an instance of the MarketingApp and renders it onto a div
export default () => {
  const ref = useRef(null);
  const history = useHistory();
  
  useEffect(() => {
      const {onParentNavigate} = mount(ref.current, {
          initialPath: history.location.pathname,
          onNavigate: ({pathname: nextPathname}) => {
              
              const {pathname} = history.location;
              
              // prevent infinite calls
              if(pathname !== nextPathname) {
                history.push(nextPathname);
              }
          },
      });
      
      history.listen(onParentNavigate);
  }, [])
    
  
  return <div ref={ref} />
};
