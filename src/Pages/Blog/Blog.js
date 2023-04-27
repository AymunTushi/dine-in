import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Blog- Dine-In</title>
            </Helmet>
            <h4 className='text-start mt-4 px-5 '>Difference Between Authorization and Authentication</h4>
            <ul className='text-start mt-4 px-5'>
                <li>
                    In authentication process identity of user is checked to provide access to the system while in authorization process<br></br> user's 
                    authority is checked to access the resources.
                </li>
                <li>
                    Authentication is done before the authorization process, while authorization is done after the authentication process
                </li>
                <li>
                    Authentication determines whether the person user or nor,whereas autorization determines which permission the user have
                </li>
            </ul>

            <h4 className='text-start mt-4 px-5 '>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <ul className='text-start mt-4 px-5'>
                <li>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users. 
                    It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook 
                    and Twitter, and more.
                </li>
                <li>
                It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                </li>
                <li>
                Google Firebase uses dedicated cloud-based NoSQL databases, Firestore, and a real-time database, to store information.
                Some of the advantages of using Firestore over Realtime Database is its ability to handle complex and hierarchy-based data at scale, and its ability to run queries at a faster rate.
                </li>
                <li>
                    Optios of Firebase: Microsoft, Okta, Oracle, 
                </li>
            </ul>
            
            <h4 className='text-start mt-4 px-5'> What other services does firebase provide other than authentication</h4>
            <ul className='text-start mt-4 px-5'>
            <li>
            Cloud Firestore
            </li>
            <li>
            Cloud Functions
           </li>
           <li>
           Authentication
           </li>
           <li>
           Hosting
           </li>
           <li>
           Cloud Storage
           </li>
           <li>
           Google Analytics
           </li>
           <li>
           Cloud Messaging
           </li>
            </ul>
        </div>
    );
};

export default Blog;