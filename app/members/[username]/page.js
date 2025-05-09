'use client'

import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '@/components/Profile/Banner'
import Categories_widget from '@/components/Categories_widget'
import RecentPosts from '@/components/RecentPosts'
import ProfileTabs from '@/components/Profile/ProfileTabs'
import ViewProfile from '@/components/Profile/View/ViewProfile'
import "bootstrap/dist/css/bootstrap.min.css";
import EditProfile from '@/components/Profile/Edit/EditProfile'
import EmailPasswordForm from '@/components/Profile/SettingsChangeDetails'
import { HOST } from '@/utils/static'
import axios from 'axios'
import UserBlog from '@/components/Profile/UserBlog'


const Page = () => {

  const [getActiveTabs, setActiveTabs] = React.useState("Profile")
  const [contentActiveTabs, setContentActiveTabs] = React.useState(getActiveTabs === "Settings" ? "General" : "View")
  const [auth, setAuth] = useState({})
  const [info, setinfo] = useState(null)
  useEffect(() => {
    if (localStorage.getItem("auth_data")) {
      setAuth(JSON.parse(localStorage.getItem("auth_data")))
      const auth = JSON.parse(localStorage.getItem("auth_data"))


      let config = {
        method: 'GET',
        url: `${HOST}auth/get-user-details/${auth._id}`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
      };

      axios.request(config)
        .then((response) => {

          console.log(response.data)
          if (response.data.baseResponse.status === 1) {
            setinfo(response.data.data)
          }
        })
        .catch((error) => {
          console.log(error);
        });

    }
  }, [])



  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={8}>
            <Banner username={auth.user_name} />
            <ProfileTabs setActiveTabs={setActiveTabs} contentActiveTabs={contentActiveTabs} setContentActiveTabs={setContentActiveTabs} />
            <div className="profile-content-container">
              {getActiveTabs === "Profile" && contentActiveTabs === "View" && (

                <div className="profile-view-content">
                  <ViewProfile username={auth.user_name} name={auth.user_name} />
                  <UserBlog />
                </div>
              )}
              {getActiveTabs === "Profile" && contentActiveTabs === "Edit" && (

                <div className="profile-view-content">
                  <EditProfile username={auth.user_name} bio={info.bio} website={info.website} name={auth.user_name} setActiveTabs={setActiveTabs} setContentActiveTabs={setContentActiveTabs} />
                </div>
              )}

              {getActiveTabs === "Settings" && (
                <div className="profile-view-content">
                  <EmailPasswordForm />
                </div>
              )}
            </div>
          </Col>
          <Col md={4}>
            <div id="sidebar"
              className="penci-sidebar-right penci-sidebar-content style-15 pcalign-left pcsb-boxed-widget pciconp-right pcicon-right penci-sticky-sidebar">
              <div
                className="theiaStickySidebar">
                <RecentPosts />
              </div>
            </div>

          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Page
