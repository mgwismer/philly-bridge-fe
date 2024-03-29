import React from "react";
import './headercontent.scss'

export const HeaderContent: React.FC = () => {

    return (
        <div
          className="header-container"
        >
          <div className="header-container-header">
            <h1 className="header-container-heading"> 
              <p className='header-container-top'>Philly Party Bridge</p>
              <p className='header-container-sub'>An active community of Bridge players</p>
            </h1>
          </div>
        </div>
      );
    }