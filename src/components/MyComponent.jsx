//This Component has no role in this project. This is just to understand the primarily the behaviour of useCallback hook
//The reference of the function is stored or preservered for future renders only if we put an empty dependecy array for useCallback hook
//The behaviour of useEffect is also to be noted. Whatever dependency we put for useEffect would indeed trigger the execution of the code inside the useEffect but the user will see it's effect only after the next rendering of the component. So it is inevitable to have a stateChange with the help of useState if the the effect of code inside the useEffect due to the change in dependency must be immediately visible for the user

import React, { useState, useEffect, useCallback } from "react";
/* var val=0; */
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [previousHandleClick, setPreviousHandleClick] = useState(null);
  console.log(count);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);
  useEffect(() => {
    if (previousHandleClick !== handleClick) {
      console.log("handleClick reference changed");
      setPreviousHandleClick(handleClick);
    } else {
      console.log("Reference not changed");
    }
  }, [handleClick, previousHandleClick]);

  const renderAgain = () => {
    let value = count;
    value++;
    setCount(value++);
  };
  // useEffect(() => {
  //  val=val+1;
  //  console.log(val);
  // }, [val]);

  // const renderAgain = () => {
  //   let value = count;
  //   value++;
  //   /*setCount(value++);*/ //if the effect of the code has to visible immediately for the user a stateChange is inevitable to trigger re-render
  // }; 
  
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <button onClick={renderAgain}>Render again</button>
    </>
  );
};

export default MyComponent;
