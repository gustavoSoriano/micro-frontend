import React from 'react';
import Modal from '@andes/modal';
import Button from '@andes/button';
import './styles.scss';

const Component = ({ open, setOpen }) => {
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="My demo modal"
        type={'card'}
        actions={{
          fixed: false,
          primary: <Button onClick={console.log}>Submit</Button>,
          secondary: <Button onClick={() => setOpen(false)}>Cancel</Button>          
        }}
      >
        <p>
          Cupidatat esse dolor aliquip adipisicing id aute adipisicing
          enim nisi enim officia anim. Laboris adipisicing in nostrud non
          dolor eu elit.
        </p>
      </Modal>
    );
};

export default Component;