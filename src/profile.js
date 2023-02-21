import { Avatar } from "@mui/material";
import React from "react";

import "./profile.css";

function Profile(){
    return(
        <div className="profile">
            <div className="profile-row">
            <Avatar src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" className="avatar"/>
            <h2>John Smith</h2>
</div>
<div className="profile-row">
    <h4>Faculty of Science --- Forth Semster</h4></div>
   <div className="profile-row"> <h4>Status: Passed All Exams And Upgraded To The Fifth Semster Next Fall</h4></div>

        </div>
    )
}
export default Profile ;