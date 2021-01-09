import React from "react";
import s from "./Users.module.css";
import UserPhoto from "../assets/images/avatar.png";
import {NavLink} from "react-router-dom";

let User = (props) => {
    let u = props.user
    return <div>
        {
          <div>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.img}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.following
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.buttons}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.buttons}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>Follow</button>}
                    </div>
                </div>
                <div className={s.friend}>
                    <div className={s.name}>{u.name}</div>
                    <div className={s.status}>{u.status}</div>
                    <div className={s.location}>
                        <div className={s.country}>{'u.location.country'}</div>
                        <div className={s.city}>{'u.location.city'}</div>
                    </div>
                </div>

            </div>
        }

    </div>
}

export default User;