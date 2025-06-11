import { useState } from "react";

function InfoToggle() {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggle = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <button onClick={handleToggle} style={{
        backgroundColor: 'darkorange',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        borderColor: 'darkorange'
      }}>
        {showInfo ? "Hide Info" : "Show Info"}
      </button>

      {showInfo && <p>This is some extra information! ✨</p>}
    </div>
  );
}

export default InfoToggle;
