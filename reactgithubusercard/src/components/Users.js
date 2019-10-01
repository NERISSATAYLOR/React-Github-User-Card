import React from 'react';
import UserList from './UserList';
import axios from 'axios';

class Users extends React.Component {

    state = {
        usersData: {},
        followersData: [],
    };
    componentDidMount() {
        axios
            .get('https://api.github.com/users/nerissaj')
            .then(data => {
                console.log(data);
                this.setState({ usersData: data.data })
            })
            .catch(err => console.log(err));
        axios
            .get(`https://api.github.com/users/nerissaj/followers`)

            .then(response => {
                console.log(response.data)
                this.setState({
                    followerData: response.data
                });
            })
            .catch(err => console.log('nooo'))

    }


    render() {
        return (<div className="user">
            <UserList user={this.state.usersData} />
        </div>

        )

    }
}
export default Users;