import React from 'react';

import { Button, Header, Icon, Modal } from 'semantic-ui-react';
//import styled from 'styled-components';

export default function ModalBasic({type}) {
  
  const [open, setOpen] = React.useState(false);


  return (
    <>
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button className="btn">{type}</Button>}
    >
      <Header icon>
        <Icon name='archive' />

      </Header>
      <Modal.Content>
      Stuff goes here...
    
      </Modal.Content>
 
    </Modal>
    </>
  )
}//end ModalBasic