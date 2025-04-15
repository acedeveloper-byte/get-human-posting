import { HOST } from '@/utils/static';
import axios from 'axios';
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';

const ViewProfile = ({ username = "mayank@work", name = "mayank@work" }) => {
    const  [user_info, setuser_info] = React.useState(null)

    useEffect(() =>{
        if (localStorage.getItem("auth_data")) {
         const  user_data =  JSON.parse(localStorage.getItem("auth_data"))
         let config = {
            method: 'GET',
            url: `${HOST}auth/get-user-details/${user_data._id}`,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };

        axios.request(config)
            .then((response) => {

                console.log(response.data)
            if  (response.data.baseResponse.status === 1) {
                setuser_info(response.data.data)
            }
             })
            .catch((error) => {
                console.log(error);
            });
        }
        
    } , [])

    return (
        <div className="view-profile">
            <h2>View Profile</h2>
            <div className="section">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Your Username</th>
                            <td>{username}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{name} </td>
                        </tr>
                        <tr>
                            <th>Bio</th>
                            <td>{user_info?.bio} </td>
                        </tr>
                        <tr>
                            <th>Website</th>
                            <td> <a href={`${user_info?.website}`} _target="blank">{user_info?.website}</a> </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};


export default ViewProfile
