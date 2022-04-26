//////////////////////////////// React Imports

import React, { useState } from "react";
import ReactDOM from "react-dom";

///////////////////////////////// Component Imports

ReactDOM.render(
  <div>
    <h1>Splitter</h1>
    <div>
      <div>
        <form>
          <label>Bill</label>
          <input></input>
        </form>
      </div>
      <div>
        <form>
          <label>Select Tip %</label>
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
        </form>
      </div>
      <div>
        <form>
          <label>Number of People</label>
          <input></input>
        </form>
      </div>
    </div>

    <div>
      <div>
        <form>
          <label>Tip Amount</label>
          <h3>/Person</h3>
          <span>$0.00</span>
          <label>Total</label>
          <h3>/person</h3>
          <span>$0.00</span>
          <button>reset</button>
        </form>
      </div>
    </div>
  </div>,

  document.getElementById("root")
);
