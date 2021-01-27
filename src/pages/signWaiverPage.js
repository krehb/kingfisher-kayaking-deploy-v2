import React, {useState} from 'react'
import { Container, Button, Alert } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';

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
                const response = await fetch('https://v1.nocodeapi.com/kingfisher/google_sheets/RUGlrHmPQgzMJrkW?tabId=Sheet1', {
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
                <p> The rights and remedies of the parties to this Agreement are cumulative and not alternative. Neither the failure nor any delay by any party in exercising any right, power, or privilege under this Agreement or the documents referred to in this Agreement will operate as a waiver of such right, power, or privilege, and no single or partial exercise of any such right, power, or privilege will preclude any other or further exercise of such right, power, or privilege or the exercise of any other right, power, or privilege. To the maximum extent permitted by applicable law, (a) no claim or right arising out of this Agreement or the documents referred to in this Agreement can be discharged by one party, in whole or in part, by a waiver or renunciation of the claim or right unless in writing signed by the other party; (b) no waiver that may be given by a party will be applicable except in the specific instance for which it is given; and (c) no notice to or demand on one party will be deemed to be a waiver of any obligation of such party or of the right of the party giving such notice or demand to take further action without notice or demand as provided in this Agreement or the documents referred to in this Agreement.</p>
                <p> The rights and remedies of the parties to this Agreement are cumulative and not alternative. Neither the failure nor any delay by any party in exercising any right, power, or privilege under this Agreement or the documents referred to in this Agreement will operate as a waiver of such right, power, or privilege, and no single or partial exercise of any such right, power, or privilege will preclude any other or further exercise of such right, power, or privilege or the exercise of any other right, power, or privilege. To the maximum extent permitted by applicable law, (a) no claim or right arising out of this Agreement or the documents referred to in this Agreement can be discharged by one party, in whole or in part, by a waiver or renunciation of the claim or right unless in writing signed by the other party; (b) no waiver that may be given by a party will be applicable except in the specific instance for which it is given; and (c) no notice to or demand on one party will be deemed to be a waiver of any obligation of such party or of the right of the party giving such notice or demand to take further action without notice or demand as provided in this Agreement or the documents referred to in this Agreement.</p>
                <div className='waiver-form' >
                <form onSubmit={submitHandler} >
                <label>
                    I, 
                    {' '}<input onChange={(e) => {setData(e.target.value)}} type="text" value={data} name="name" />{' '}
                    agree to the waiver above{' '}
                </label>
                <Button type="submit" value="Submit">Submit</Button>
                </form>
                </div>
            </Container>
        </div>
    )
}

export default WaiverPage;