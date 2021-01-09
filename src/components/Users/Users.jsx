import React from "react";
import Paginator from "../common/Paginator/Paginator"
import User from "./User";

let Users = (props) => {
    return <div>
        {
            props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                                       follow={props.follow} unfollow={props.unfollow}/>)
        }
        <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>
    </div>
}

export default Users;