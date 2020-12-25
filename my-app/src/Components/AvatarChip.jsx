import React from 'react'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';


export default function AvatarChip() {

    return (

<Chip avatar={<Avatar>M</Avatar>} label="Clickable" 
// onClick={handleClick}
 />

    )
}