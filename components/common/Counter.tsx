import React, { useRef } from "react";
import { useCountUp } from "react-countup";
import { Waypoint } from "react-waypoint";

interface PropTypes {
  end: number;
  text: string;
  icon: string;
}

const Counter = ({ end, text, icon }: PropTypes) => {
  const ref = useRef<null>(null);

  const { start } = useCountUp({ ref, end, duration: 1.5 });

  // ?Trigger Count Start When Visitor Reaches To Element--------------------------->
  const handleWaypointEnter = () => {
    start();
  };
  // !Trigger Count Start When Visitor Reaches To Element--------------------------->

  return (
    <Waypoint onEnter={handleWaypointEnter}>
      <div className="counter text-center">
        <i className={`${icon} text-large text-red-500`}></i>
        <div className="counter-value my-4">
          <span ref={ref} className="text-large start font-bold" />
          <span className="text-large font-bold">+</span>
        </div>
        <span className="text-slate-600">{text}</span>
      </div>
    </Waypoint>
  );
};

export default Counter;
