import React from 'react'
import CallIcon from '@material-ui/icons/Call';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import  Chip  from '@material-ui/core/Chip';
import '../Css/CssCustom.css'

function ChipSet() {

    return (
        <div className='flexbox'>

            <div>
            <Chip
        variant="outlined"
        size="large"
        // avatar={<Avatar>M</Avatar>}
        icon={CallIcon}
        label="Call Now"
        // onClick={handleClick}
      />
            </div>

<div>
<Chip
        variant="outlined"
        size="large"
        // avatar={<Avatar>M</Avatar>}
        icon={PhoneCallbackIcon}
        label="Request"
        // onClick={handleClick}
      />
</div>


        </div>
      
    )

}

export default ChipSet;