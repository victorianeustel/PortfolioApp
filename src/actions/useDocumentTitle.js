
/*================================= 
Changing Document Title (Tab Title)
================================= */
import { useRef, useEffect } from 'react'

function useDocumentTitle(title) {

  const defaultTitle = useRef(document.title);
  const prevailOnUnmount = false;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [])
  
}

export default useDocumentTitle