import React, {useContext, useEffect, useState} from "react";

// import AppContext
import { AppContext } from "../App";

const LandingPage =() => {

    const {initState} = useContext(AppContext)

    return(
        <div>
            {initState}
        </div>
    )
}

export default LandingPage