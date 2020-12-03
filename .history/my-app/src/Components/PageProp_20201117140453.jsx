import React from 'react'
import Button from '@material-ui/core/Button';


function PageProp(props) {
  
  
    return (
<div>
    <Button>
        ADD SNAPCHAT
    </Button>

    <Button>ADD INSTAGRAM</Button>

    <Button>ADD FACEBOOK</Button>

    <Button>ADD LINKED IN</Button>

    <Button onClick={alert("Email: Hossamsulleman@gmail.com Number:" )}>CONTACT ME</Button>
    {/* modal */}
</div>
    )
}

export default PageProp;