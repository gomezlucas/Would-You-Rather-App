import React from 'react';
import Container from 'react-bootstrap/Container'

function My404Component() {

    return (
        <Container className='text-center mt-5' >
            <h1> Sorry, the page you are trying to access does not exist, please try again</h1>
            <h2 className='mt-4'>404 Page Not Found </h2>
        </Container>

    )
}

export default My404Component