import React from "react";
import s from "./Preloader.module.css";
import preloader from "../../assets/images/200.gif";

let Preloader = (props) => {
    return <img className={s.preloader} src={preloader} />
}

export default Preloader;