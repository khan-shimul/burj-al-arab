import React from 'react';
import useAuth from '../../hooks/useAuth';

const About = () => {
    const { user } = useAuth();
    return (
        <div>
            <h3>Hello {user.displayName}</h3>
            <h5>Want to know about us?</h5>
        </div>
    );
};

export default About;