import React from 'react'
import Button from '@material-ui/core/Button';


function PageProp(props) {
  
  function alert1() {
      alert("Email: Hossamsulleman@gmail.com 
      Number: 07738646154 ")
  }

    return (
<div>
    <Button>
        ADD SNAPCHAT
    </Button>

    <Button>ADD INSTAGRAM</Button>

    <Button>ADD FACEBOOK</Button>

    <Button>ADD LINKED IN</Button>

    <Button onClick={alert1}>CONTACT ME</Button>
    {/* modal */}
</div>
    )
}

export default PageProp;