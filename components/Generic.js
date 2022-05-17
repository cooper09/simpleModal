import React, {useState, useEffect} from 'react';
import { List, Icon, Modal, Button, Image, Header } from 'semantic-ui-react';
import SimpleModal from './SimpleModal';

import data from './data/userdata.json';

const Generic = () => {

    const [open, setOpen]= useState(true);

    const openModal=() => {
        console.log("Open Modal window");

    }//end openModal

    return (
        <div>
            <h2>Generic Component</h2>

            <SimpleModal />

    </div>
    )
}//end Generic

export default Generic
