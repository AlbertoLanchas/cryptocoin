import React from "react";
import dev from "../assets/worker.jpg";

const DevSection = () => {
  return (
    <div className="dev-section-container">
      <h2 className="dev-section-title">
        POWERFUL FOR <span className="highlighted">DEVELOPERS</span>
      </h2>
      <div className="dev-section-wrapper">
        <div className="dev-section-text">
          <h2>
            FAST FOR <span className="highlighted">EVERYONE</span>
          </h2>
          <p className="dev-section-description">
            Bring blockchain to the people. Solana supports experiences for
            power users, new consumers, and everyone in between.
          </p>
          <div className="btn-wrapper">
            <button className="primary">
              <span>START BUILDING</span>
            </button>
            <button className="secondary">
              <span>READ DOCS</span>
            </button>
          </div>
        </div>
        <div className="dev-section-image">
          <img src={dev} alt="dev tools" />
        </div>
      </div>
    </div>
  );
};

export default DevSection;
