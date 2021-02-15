import React, {useState} from 'react'
import { Container, Button, Alert } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';
import moment from 'moment';

function WaiverPage() {
    
    let history = useHistory();
    function handleClick() {
        history.push("/waiver");
    }

    const [data, setData] = useState('');
    const [alert, setAlert] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault()

        let name = data
        let fullName = name.split(' ')

        if(2 > fullName.length){
            setAlert('error')
        } else {
            try {
                const response = await fetch(`https://v1.nocodeapi.com/kingfisher/google_sheets/${process.env.REACT_APP_WAIVER_SHEET_ID}?tabId=Sheet1`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([[data, new Date().toLocaleString()]])
                });
                await response.json()
                handleClick()
                setData('')
                setAlert('success')
            } catch (err) {
                console.log(err)
            }
        }
    }

    let renderAlert = null
    if (alert === 'success'){
        renderAlert = (
            <Alert variant='success' >
                Submitted Waiver!
            </Alert>
        )
        setTimeout(function(){setAlert('')}, 3000);
    } else if (alert === 'error'){
        renderAlert = (
            <Alert variant='warning' >
                Enter Your Full Name
            </Alert>
        )
        setTimeout(function(){setAlert('')}, 2000);
    } else {
        renderAlert = null
    }



    return (
        <div className='waiver' >
            <Container className='waiver-container' >
                {renderAlert}
                <h3 className='waiver-title' >Waiver</h3>
                <h5>Please Read Carefully — Waiver and Release of Liability — This is an Official Electronic Document</h5>
                <h5>Each person in a group must submit one of these forms. If the person is under the age of 18 then a parent or guardian must sign their form and assume responsibility for the minor.</h5>
                <p>In consideration of Kingfisher Kayaking Inc. furnishing services, The Kingfisher Kayaking Inc. premises and/or equipment to enable me to participate in kayaking, canoeing or paddle boarding, I agree as follows:</p>
                <p>I fully understand and acknowledge that: (a) outdoor recreational activities have inherent risks, dangers, and hazards and such exist in my use of paddle sport equipment and my participation in paddle sport activities. (B) my participation in such activities and/or use of such equipment may result in injury or illness including, but not limited to bodily injury, disease, strains, fractures, partial and/ or total paralysis, death or other ailments that could cause serious disability; (c) these risks and dangers may be caused by the negligence of the owners, employees, officers or agents of Kingfisher Kayaking Inc.; the negligence of participants, the negligence of theirs, accidents, beaches or contract, the forces of nature or other causes. Risks and dangers may arise from foreseeable or unforeseeable causes including, but not limited to, guide decision making, including that a guide may misjudge terrain, weather, trail or ocean conditions, and water level, risk of falling out of or drowning while paddle sporting and such other risks, hazards and dangers that are integral to recreational activities that take place in a wilderness, ocean, outdoor, or recreational environment.</p>
                <p>By my participation in these activities and/ or use of equipment, I hereby assume all risks and dangers and all responsibility for any loses and/ or damages, whether caused in whole or in part by the negligence or other conduct of the owners, agents, officers, or employees of Kingfisher Kayaking Inc., or by any other person including myself. I also verify that I am in good health, Not under the influence of any drugs or alcohol of any kind, nor do I have them in my possession , and am capable of pursuing paddle sports, and that my participation in this activity is voluntary. I/we also agree to a properly secured USCG approved personal floatation device, of type 3 or better, at all times.</p>
                <p>I, on behalf of myself, my personal representatives and my heirs, hereby voluntarily agree to release, discharge, hold harmless, defend and indemnify Kingfisher Kayaking Inc. and its owners, officers, and employees from any and all claims, actions or losses for bodily injury, property damage, wrongful death, loss of services or otherwise which may arise out of my use of paddle sport equipment or premises or my participation in paddle sport activities. I specifically understand that I am releasing, discharging, and waiving any claims or actions that I may have at present time or in the future for the negligent acts or other conduct by the owners, agents, officers or employees of Kingfisher Kayaking Inc.</p>
                <p>I HAVE READ THE WAIVER AND RELEASE AND BY SIGNING IT, AGREE IT IS MY INTENTION TO EXEMPT AND RELIEVE KAYAK JACKS LLC FROM LIABILITY FOR PERSONAL INJURY, PROPERTY DAMAGE OR WRONGFUL DEATH CAUSED BY NEGLIGENCE OR ANY OTHER CAUSE.</p>
                <p>I understand that the electronic signature below shall have the same legal effect as if written manually. I also understand that I will be asked to provide identification prior to receiving equipment and/or service.</p>
                <div className='waiver-form' >
                <form onSubmit={submitHandler} >
                <label>
                    I, 
                    {' '}<input placeholder='Digital Signature' onChange={(e) => {setData(e.target.value)}} type="text" value={data} name="name" />{' '}
                    agree to the waiver above{' '}
                    <input type="hidden"  name="date" value={moment().format('MMMM Do YYYY, h:mm:ss a')} />
                </label>
                <Button type="submit" value="Submit">Submit</Button>
                </form>
                </div>
            </Container>
        </div>
    )
}

export default WaiverPage;