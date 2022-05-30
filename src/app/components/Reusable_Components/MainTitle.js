import React from 'react';
import * as constants from "../../constants/constants";

const MainTitle = () => {

    return (
        <div className="toptitle">
                        <img
              src={constants.LOGO}
              height="240px"
              width="240px"
              alt="Logo"
            ></img>
        </div>
    );
};

export default MainTitle;