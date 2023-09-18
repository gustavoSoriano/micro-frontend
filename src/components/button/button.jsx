import React from 'react';
import Button from '@andes/button';
import './styles.scss';

const Component = ({ onClick }) => {
    return (
        <>
            <Button onClick={onClick}>Button</Button>
        </>
    )
};

export default Component;