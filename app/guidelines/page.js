import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
        <Header />
        <div className ="container"   dangerouslySetInnerHTML={{ __html : `  <h1>The Blog Guest - Guidelines</h1>
    <p>Hello! Thank you for your interest in our blog! We're excited to have you here.</p>
    <p>If you have exceptional writing skills and a passion for sharing your expertise with a broad audience, we’d love to hear from you. Let’s collaborate and make an impact together!</p>

    <h2>Overview</h2>
    <p>The Blog Guest intends to make you familiar with the guidelines for posting your content on our site. Read the detailed policy for a hassle-free experience.</p>

    <h2>Ensure that Submissions Meet Our Quality Standards</h2>
    <p>All submissions must adhere to our quality standards to be considered for publication. HubSpot has clear guidelines regarding the types of blog posts we accept and reject. Editors hold the discretion to decline contributions that do not meet our editorial criteria.</p>

    <h2>Blogs Must Be Published Exclusively on The Blog Guest</h2>
    <p>Once your article is published on The Blog Guest, it will remain exclusive to our platform. We encourage you to share the post with your network and include a link back to it.</p>
    <p>Please note that you are not permitted to republish the article on any other site. Additionally, we do not accept guest articles that have already been published elsewhere.</p>

    <h2>The Importance of Editorial Integrity</h2>
    <p>It is essential for a site to gain the trust of visitors to reach the maximum number of its audience. We believe that we can be the voice of the people by being transparent with them. Therefore, we believe in the power of editorial integrity. At The Blog Guest, we strive to maintain that connection with our audience.</p>

    <h2>Posts We Do Not Accept</h2>
    <p>We do not accept submissions on topics already covered on our blog. Please conduct a site search before submitting your article.</p>
    <p>We also do not accept content that:</p>
    <ul>
        <li>Could be perceived as a link-building strategy.</li>
        <li>Is excessively promotional for your organization.</li>
        <li>Contains inaccurate or offensive information.</li>
        <li>Is overly critical of individuals or companies.</li>
    </ul>

    <h2>Formatting Tips</h2>
    <ul>
        <li>Always include an introduction and a conclusion.</li>
        <li>Use H2, H3, and H4 headings to structure your content clearly.</li>
        <li>Use bulleted lists whenever possible.</li>
        <li>Keep paragraphs short.</li>
        <li>Use any editor app to identify run-on sentences and improve sentence clarity.</li>
        <li>Check your post into Grammarly to check for spelling and grammar.</li>
        <li>When using images from other sources, be sure to credit the source with “Image source” and link to the page where the image is from.</li>
    </ul>

    <h2>How to Submit the Blog?</h2>
    <p>Ready to share your blog on The Blog Guest?</p>
    <p>Sign up, and click on the “Submit Article” button on the homepage.</p>
    <p>Make sure that your content aligns with our content strategy and meets our quality standards.</p>
`}}/>
        <Footer /> 
    </>
  )
}

export default page
