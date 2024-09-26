import { useRef, useEffect } from 'react';

const useOutSideClick = (handler) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener('click', handleClick, true);

    return () => document.removeEventListener('click', handleClick);
  }, [handler]);

  return ref;
};

export default useOutSideClick;
