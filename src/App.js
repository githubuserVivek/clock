import React from "react";
import "./App.css";
function App() {
  setInterval(clockFun, 1000);

  function clockFun() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
  }

  return (
    <div className="Root">
      <h1 className="clock">Clock</h1>
      <div className="Main">
        <div className="Hours">
          <p>Hour</p>
          <h1 id="hours"></h1>
        </div>

        <div className="Minutes">
          <p>Minutes</p>
          <h1 id="minutes"></h1>
        </div>
        <div className="Seconds">
          <p>Seconds</p>
          <h1 id="seconds"></h1>
        </div>
      </div>
    </div>
  );
}

export default App;
