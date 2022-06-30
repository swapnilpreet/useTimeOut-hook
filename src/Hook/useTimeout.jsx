import { useEffect, useState } from "react"; 

const useTimeout = (delay) => { // fot timer
  // we make this function as universal now we can
  // use this functn in diffent pages and components
  //it will save the code and time also this know as custom hook
  const [ready, setReady] = useState(false);  // // fot timer

  useEffect(() => {  //// fot timer
    let timer = setTimeout(() => {
      setReady(true);
    }, delay);
    return () => {
      clearTimeout(timer);  
    };
  }, [delay]);

  return ready;
};

export { useTimeout };
