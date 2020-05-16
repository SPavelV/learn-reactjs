import React, { useState } from "react";

import "./App.css";
import { Transition, CSSTransition } from "react-transition-group";

function App() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setToggle2(!toggle2)}>Toggle 2</button>
      <hr />
      
      <div className={"blocks"}>
        <Transition
          in={toggle}
          timeout={{ enter: 1000, exit: 500 }}
          mountOnEnter
          unmountOnExit
          onEnter={()=>console.log("onEnter")}
          onEntering={()=>console.log("onEntering")}
          onEntered={()=>console.log("onEntered")}
          onExit={()=>console.log("onExit")}
          onExiting={()=>console.log("onExiting")}
          onExited={()=>console.log("onExited")}
        >
          {(state) => <div className={`square blue ${state}`}>{state}</div>}
        </Transition>

        <CSSTransition
          in={toggle2}
          timeout={1000}
          classNames="os"
          mountOnEnter
          unmountOnExit
        >
        <div className="square orange">
          {toggle2.toString()}
        </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
