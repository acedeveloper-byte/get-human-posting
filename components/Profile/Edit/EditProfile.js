import { HOST } from '@/utils/static';
import axios from 'axios';
import React, { useEffect } from 'react'
import { Button, Col, FloatingLabel, Form, Table } from 'react-bootstrap';

const EditProfile = ({ username, name  , setContentActiveTabs , setActiveTabs}) => {

    const [bio, setBio] = React.useState("")
    const [website, setWebsite] = React.useState("")
    const [user_data, setuser_data] = React.useState(null)
    const  [ disabled , setDisbaled] = React.useState(false)
         useEffect(() => {

            if (localStorage.getItem("auth_data")) {
                setuser_data(JSON.parse(localStorage.getItem("auth_data")))

            }

        }, [])

    const handleSubmit = async (e) => {
        let data = JSON.stringify({
            "bio": bio,
            "website": website
        });

        let config = {
            method: 'PUT',
            url: `${HOST}auth/update-details/${user_data._id}`,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

            if  (response.data.baseResponse.status === 1) {
                setDisbaled(true)
                setContentActiveTabs("View")
                setActiveTabs("Profile")
            }
             })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="view-profile">
            <h2>Edit Profile</h2>

            <div className="section">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <td>{name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Bio</th>
                            <td>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    onChange={(e) => setBio(e.target.value)}
                                    disabled={disabled}

                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Website</th>
                            <td>
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Website"
                                        onChange={(e) => setWebsite(e.target.value)}
                                        disabled={disabled}

/>
                                </Form.Group>
                            </td>
                        </tr>
                    </tbody>

                </Table>
                <Form.Group as={Col} md="10" controlId="validationCustom01">
                    <Button onClick={() => handleSubmit()}>Submit form</Button>
                </Form.Group>
            </div>

        </div>
    );
};


export default EditProfile
