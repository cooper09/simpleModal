import React, {useState, useEffect} from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

function SimpleModal() {

  const [open, setOpen]= useState(false);


//  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";


  return (
    <>
    <h3>Modal</h3>
    <Modal 
               trigger={<Button classNAme='ui button yellow create_btn'>Show Modal</Button>}
               header='GeeksforGeeks'
               content='Semantic UI is a modern framework 
               used in developing seamless designs for the 
               website, Its gives the user a lightweight 
               experience with its components. It uses 
               the predefined CSS, JQuery language to 
               incorporate in different frameworks..'
               actions={['Cancel', 'OK']}
    />
    </>
  )
}

export default SimpleModal