import React from 'react';
import Users from './Users';


function UserList(props) {

    return (
        <div>

            <Users user={props.avatar_url}
                login={props.login}
                location={props.location}
                followers={props.followers}
            />
        </div>
    )
}


export default UserList;