import React, { useState } from 'react';
import './ToggleSwitch.css'; // Optional: Add your own styles here

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className={`switch ${isOn ? 'on' : 'off'}`}>
        <div className="toggle-handle" />
      </div>
      
    </div>
  );
};

export default ToggleSwitch;
