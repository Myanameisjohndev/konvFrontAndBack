import React from "react";
import AppRoutesAplication from "./app.routes";
import AuthRoutesAplication from "./auth.routes";

const loged = true;

const RoutesAplication = () => {
    return (
       <>
        {loged ? <AppRoutesAplication/> : <AuthRoutesAplication/>}
       </>
    )
}

export default RoutesAplication;