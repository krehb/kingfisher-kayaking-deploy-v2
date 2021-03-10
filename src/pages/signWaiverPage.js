import React, {useState} from 'react'
import { Container, Button, Alert, Spinner } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';
import moment from 'moment';


function WaiverPage() {
    
    let history = useHistory();
    function handleClick() {
        history.push("/waiver");
    }

    const [data, setData] = useState('');

    const [waiver1, setwaiver1] = useState('');
    const [waiver2, setwaiver2] = useState('');
    const [waiverFirstName, setWaiverFirstName] = useState('');
    const [waiverLastName, setWaiverLastName] = useState('');
    const [waiverAge, setWaiverAge] = useState(0);
    const [signature, setSignature] = useState('')
    const [date, setDate] = useState('')
    

    const [alert, setAlert] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault()

        if(waiver1 === '' || waiver2 === '' || waiverFirstName === '' || waiverLastName === '' || signature === '' || waiverAge === 0){
            setAlert('error')
            console.log('eererroor')
        } else {
            console.log('adding....')
            try {
                const response = await fetch(`https://v1.nocodeapi.com/kingfisher/google_sheets/${process.env.REACT_APP_WAIVER_SHEET_ID}?tabId=Sheet1`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([[waiverFirstName, waiverLastName,waiverAge, signature, waiver1, waiver2, new Date().toLocaleString()]])
                });
                await response.json()
                setwaiver1('')
                setwaiver2('')
                setWaiverFirstName('')
                setWaiverLastName('')
                setWaiverAge(0)
                setSignature('')

                handleClick()
                setAlert('success')
            } catch (err) {
                console.log(err)
            }
        }
    }

    let renderAlert = null
    let renderSpinner = null
    if (alert === 'success'){
        renderAlert = (
            <Alert variant='success' >
                Submitted Waiver!
            </Alert>
        )
        renderSpinner = (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
        setTimeout(function(){setAlert('')}, 4000);
    } else if (alert === 'error'){
        renderAlert = (
            <Alert variant='warning' >
                Enter Your Full Name
            </Alert>
        )
        renderSpinner = (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
        setTimeout(function(){setAlert('')}, 4000);
    } else {
        renderAlert = null
        renderSpinner = (
            <Button style={{marginTop: '20px'}} type="submit" value="Submit">Submit</Button>
        )
    }



    return (
        <div className='waiver' >
            <Container className='waiver-container' >
                <h3 className='waiver-title' >Waiver</h3>
                <p>The risk of injury from the activities involved in this program is significant, including the potential for permanent paralysis and death. <span style={{fontWeight: 600}} > I KNOWINGLY AND FREELY ASSUME ALL SUCH RISKS,</span> both known and unknown, <span style={{fontWeight: 600}}>EVEN IF ARISING FROM THE NEGLIGENCE OF THE RELEASEES</span> or others and assume full responsibility for my participation.</p>
                <p>If I observe any unusual significant hazard during my presence or participation, I will remove myself from participation and bring such to the attention of the nearest official immediately.</p>
                <p>I, for myself and on behalf of my heirs, assigns, personal representatives and next of kin, HEREBY RELEASE, INDEMNIFY, AND HOLD HARMLESS Kingfisher Kayaking Inc., its officers, officals, agents and/ or employees, other participants, sponsors, advertisers, and if applicable, owners and lessors of premises used to conduct the event, from any and all claims, demands, losses, and liability arising out of related to any INJURY, DISABILITY OR DEATH I may suffer, or loss or damage to person or property, WEATHER ARISING FROM THE NEGLIGENCE OF THE RELEASEES OR OTHERWISE, to the fullest extent permitted by law.</p>
                <p>I HAVE READ THIS RELEASE OF LIABILITY AND ASSUMPTION OF RISK AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND SIGN IT FREELY AND VOLUNTARILLY WITHOUT ANY INDUCEMENT.</p>
                <p><span style={{fontWeight: 600}}>FOR PARENTS/GUARDIANS OF PARTICIPANT OF MINOR AGE (UNDER AGE 18 AT TIME OF REGISTRATION)</span> This is to certify that I, as parent/guardian with legal responsibility for this participant, do consent and agree to his/her release as provided above of all the Releasees, and, for myself, my heirs, assigns and next of kin, I release and agree to indemnify and hold harmless the Releasees from any and all liabiliy incidents to my minor child's involvement or participation in these programs as provided above, EVEN IF ARISING FROM THE NEGLIGENCE OF THE RELEASEES, to the fullest extent permitted by law.</p>
                <div className='waiver-form' >
                <label>
                    <h4>Participant's Signature / Parent/Guardian Signature</h4>
                    Full Name
                    {' '}<input placeholder='Legally Binding Signature' onChange={(e) => {setwaiver1(e.target.value)}} type="text" value={waiver1} name="name" />
                </label>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <h6 style={{fontWeight: 600}}>KINGFISHER KAYAKING INC. - RULES AND REGULATIONS</h6>

                <ul>
                    <li>Kayaks can be rented only to persons 13 years of age or older (participants of minor age must have parent or guardian signature)</li>
                    <li>Children 12 and under must be accompanied by a parent or guardian at all times</li>
                    <li>One person per seat. Children may not ride on an adult's lap</li>
                    <li>Please refrain from splashing other participants</li>
                    <li>Please refrain from colliding with other kayaks</li>
                    <li>All damages must be reported immediately after trip</li>
                    <li>Please wait for an attendant to help you in and out of your boat</li>
                    <li>Any misuse of boats or equipment by the renters or their guests will cause a suspension or revocation of privileges</li>
                    <li>Kingfisher Kayaking Inc. is not responsible for lost, stolen, or damaged belongings.</li>
                    <li>The following are prohibited when renting a kayak: alcohol, smoking, swimming or diving, abusive language, standing in kayak, racing, kayaking beyond designated route, removing, loosening, or untying straps or buckles from life vest.</li>
                    <li>Each participant must have the ability to:</li>
                    <ul>
                        <li>Wear all protective equipment recommended/required by industry standards</li>
                        <li>Enter and exit the kayak independently or with the assistance of a companion</li>
                        <li>Remain seated and balanced using adaptive equipment if necessary</li>
                        <li>Get out from under the watercraft, remain face up in the water with the aid of a life jacket, and make progress to the shoreline, in the event of a capsize</li>
                        <li>Move the watercraft independently or with the assistance of a companion - through the water in a stable manner and return it to the rental area.</li>
                        <li>Pay attention to and monitor the weather and take shelter if necessary</li>
                    </ul>  
                </ul>  
                <h6 style={{fontWeight: 600}}>IN THE EVENT OF A THUNDERSTORM WHILE ON THE WATER</h6>
                <ul>
                    <li>Get off the water – A boat is the tallest object on the water making lightning strikes more likely.</li>
                    <li>Seek shelter – If possible, get in a vehicle. Otherwise, take shelter near a dense group of trees or shrubs. Don’t stay near tall or isolated objects like a single tree.</li>
                    <li>If no shelter is available, crouch down, feet close together on the balls of your feet with your head tucked down and your hands over your ears. Spread out, keeping people several yards apart. Minimize your contact with the ground.</li>
                    <li>Don’t lie down. Lightning causes electric currents along the top of the ground that can be deadly over 100 feet away. Crouching down is the best combination of being low and touching the ground as little as possible.</li>
                    <li>Avoid objects that conduct electricity. Leave your paddle with the boat.</li>
                    <li>Monitor the storm – Stay off the water until at least 30 minutes have passed since seeing lightning or hearing thunder.</li>

                </ul>
                <h6 style={{fontWeight: 600}}>CONDITIONS OF RENTAL:</h6>
                <p>Whenever used herein, the term “equipment” shall include any equipment rented from Kingfisher Kayaking Inc., The customer understands and agrees that the equipment described in this contract remains the property of Kingfisher Kayaking Inc., and that the failure by the customer to return said equipment to Kingfisher Kayaking Inc. within the time provided in this contract may constitute a crime and subject the customer to criminal prosecution</p>

                <h6 style={{fontWeight: 600}}>EQUIPMENT AND RENTAL RATES</h6>
                <p>www.kingfisherkayaking.org</p>

                <h6 style={{fontWeight: 600}}>RESPONSIBILITY FOR DAMAGE OR LOSS:</h6>
                <p>Customer agrees that he/she will return the equipment in the same good condition as when received, ordinary wear and tear accepted, and to repair and replace any and all lost, stolen, damaged, or broken parts or to reimburse Kingfisher Kayaking Inc. for said equipment. Therefore, regardless of the party at fault, Customer understands and agrees to be responsible for the damage to said equipment. Customer accepts use of the equipment AS IS, in good condition, and accepts full responsibility for care of the equipment while under his/her possession.</p>
                <p>Customer agrees to return the equipment in UNDAMAGED condition to avoid any ADDITIONAL charges for repair, maintenance or replacement. It is the responsibility of the customer to check the equipment at the shop BEFORE setting out on any ride, and to advise the staff or any staff of any perceived problems with the condition of the equipment prior to departing the shop with the equipment.</p>
                <h6 style={{fontWeight: 600}}>CUSTOMER LIABILITY:</h6>
                <p>Customer shall assume liability for any and all damage or loss to personal property, accident/injury to other persons related to the rental equipment. It is the Customer’s responsibility to prevent the theft of the equipment and, if any of the equipment is stolen while in the Customer’s possession, Customer agrees to pay the replacement cost of same. Customer shall properly secure or lock all rental equipment in legal locations when not in the Customer’s possession</p>

                <h6 style={{fontWeight: 600}}>COVID-19</h6>
                <p>By signing this agreement, you are acknowledging that an inherent risk of exposure to COVID-19 exists in any public place where people are present. By participating, you and any guests voluntarily assume all risks related to exposure to COVID-19 and agree not to hold Kingfisher Kayaking Inc or any of their affiliates, directors, officers, employees, agents, contractors, or volunteers liable for any illness or injury.</p>
            
                <h6 style={{fontWeight: 600}}>COMPLIANCE WITH LOCAL LAWS:</h6>
                <p>The Customer hereby agrees to obey all Illinois traffic laws and regulations while kayaking, as well as the traffic laws and regulations of any other local, state, or federal jurisdiction into which the customer takes the equipment. The Customer shall not use cellular telephones or cameras while kayaking.</p>

                <h6 style={{fontWeight: 600}}>OTHER TERMS AND CONDITIONS:</h6>
                <p>This Agreement, and any rights, duties, and obligations as between the parties to this Agreement, shall be governed by and interpreted solely in accordance with the laws of the State of Illinois and no other jurisdiction. Any litigation involving the parties to this Agreement shall be brought solely within the State of Illinois and shall be within the exclusive jurisdiction of the state courts of the State of Illinois, and the venue for such litigation shall be within the City of Urbana.</p>

                <p>I ACKNOWLEDGE FULL RESPONSIBILITY FOR THE SAFETY OF MY GROUP AND AGREE THAT ALL MEMEBERS WILL PARTICIPATE SAFELY AND RESPONSIBLY.</p>
                <p>I UNDERSTAND THAT I AM RESPONSIBLE FOR RETURNING ALL EQUIPMENT LISTED BELOW AND THE COST OF ANY LOST OR REPAIRED EQUIPMENT WILL BE CHARGED TO MY CARD.</p>
                <p>FINALLY, I AGREE TO COMPLY WITH ALL OF THE TERMS AND CONITIONS OUTLINED IN THIS AGREEMENT.</p>
                <div className='waiver-form' >
                <label>
                    <h4>Participant's Signature / Parent/Guardian Signature</h4>
                    Full Name
                    {' '}<input placeholder='Legally Binding Signature' onChange={(e) => {setwaiver2(e.target.value)}} type="text" value={waiver2} name="name" />
                </label>
                </div>
                <br></br>
                <br></br>
                <br></br>

                <h6 style={{fontWeight: 600}}>ASSUMPTION OF RISK</h6>
                <p>I understand and accept that renting this kayak and participating in kayaking exposes me to many hazards and entails unavoidable risk of death, personal injury (including but not limited to severe spinal or head injury) and loss of or damage to property. I understand and acknowledge that kayaking is a hazardous activity and entails known and unanticipated risks which could result in physical or emotional injury, paralysis, death, or damage to myself, to property, or to third parties. The risks include among other things, without limitation: drowning, collision with water vessels or water vehicles; striking obstructions or other person; equipment failure; adverse weather conditions, being struck by lightning, moisture, terrain, and the like including temperature exposure (hypothermia, sunstroke, sunburn, heat exhaustion and dehydration); changing weather conditions; mechanical and structural failure of the equipment; difficulty or inability to control ones’ speed and direction; loss of balance; collision with exposed rock, snow, ice, earth, trees, or other natural or man-made objects; collision with other kayakers or animals; failure to participate within one’s own ability; and the negligence or willful misconduct of other participants.</p>
                <p>I understand that such risks cannot be eliminated by Kingfisher Kayaking Inc., or its officers, agents, employees, and affiliates, without jeopardizing the essential qualities of this activity.
I also understand I should be in good physical health to participate.
My participation in this activity is purely voluntary, and I elect to participate in spite of the risks.
I choose to participate in spite of these risks and herby assume all risk or injury or loss of like to myself and loss or of damage to property arising out of renting the equipment and participating.
</p>

                <h6 style={{fontWeight: 600}}>WAIVER AND RELEASE:</h6>
                <p>In consideration of Kingfisher Kayaking Inc. renting me this equipment, I specifically release and forever discharge Kingfisher Kayaking Inc., and its officers, agents, employees, and affiliates from any and all liability, claims, demands, and causes of action of any nature whatsoever for injury, illness, death, or loss of or damage to property which I or any member of my family may suffer while renting this kayak and participating, and I hereby waive any rights to sue or assert such claims or causes of action against Kingfisher Kayaking Inc. And its officers, agents, employees, and affiliates.</p>
                <p>This discharge and release specifically includes, but is not limited to, liability or claims for injury, illness, death or damage caused by the negligence of Kingfisher Kayaking Inc. or its officers, agents, employees, and affiliates</p>
                <p>It is my intent by this Assumption of Risk, Waiver and Release Agreement to release Kingfisher Kayaking Inc. and hold it harmless from all liability for any such property loss or damage, personal injury or loss of life, whether caused by the negligence of Kingfisher Kayaking Inc. or its officers, agents, employees, and affiliates, or whether based upon breach of contract, breach of warranty, or any other legal theory.</p>
                <p>In signing this document, I fully recognize that if injury, illness, death or damage occurs to me while I am engaged in kayaking or being transported by Kingfisher Kayaking Inc., I will have no right to make a claim or file a lawsuit against Kingfisher Kayaking Inc. or its officers, agents, employees, and affiliates, even if they or any of them negligently cause my injury, illness, death or damage.</p>
                <p>I certify that I have adequate insurance to cover any injury or damage I may cause or suffer while participating, or else I agree to bear the costs of such injury or damage myself. I understand and agree that any insurance coverage I maintain, whether liability, casualty, personal or health, shall constitute the primary coverage in the event of any loss, injury, death or damage to person or property while using or operating the rented equipment.</p>
                <p>I hereby agree to defend, protect, indemnify and hold harmless Kingfisher Kayaking Inc. or its officers, agents, employees, and affiliates, from all claims, actions, proceedings, costs, damages, and liabilities, including attorney’s fees, arising out of, in any way connected with, or resulting from my participation in this activity and/or my use of the rented equipment, including without limitation the possession, use, operating, or return of the equipment, including any such claims which allege negligent acts or omissions on the part of Kingfisher Kayaking Inc. or its officers, agents, employees, and affiliates.</p>
                <p>Should Kingfisher Kayaking Inc. or anyone acting on its behalf, be required to incur attorney’s fees and costs to enforce this Agreement, I agree to indemnify and hold them harmless for all such fees and costs.</p>
                <p>I agree that Kingfisher Kayaking Inc. is and shall not be responsible if I cause injury to another person or if I damage another kayak, vessel or other personal property of another. I hereby agree to protect, defend, indemnify, and hold harmless Kingfisher Kayaking Inc. or its officers, agents, employees, and affiliates, and to pay claim, including attorneys’ fees, brought by a third party arising out of my use of the equipment and for any liability associated with any personal accident and/or injury as a result of my use of the equipment.</p>
                <p>I further certify that I have adequate medical or health insurance to cover any medical assistance I may require, and that any passengers or persons for whom I am responsible also have adequate medical or health insurance to cover any medical assistance they may require.</p>
                <p>I further certify that I have no medical or physical conditions which could interfere with my safety in this activity, or else I am willing to assume all liability, damages or costs that may be created, directly or indirectly, by any such condition.</p>
                <p>I understand that this activity may result in severe injury, including but not limited to spinal or head injury. I acknowledge that the staff of Kingfisher Kayaking Inc. have answered any questions I have had.</p>
                <p>This Agreement, and any rights, duties, and obligations as between the parties to this agreement, shall be governed by and interpreted solely in accordance with the laws of the State of Illinois and no other jurisdiction. Any litigation involving parties to this Agreement shall be brought solely within the State of Illinois and shall be within the exclusive jurisdiction of the state courts of the state of Illinois, and the venue for such litigation shall be within the City of Urbana.</p>
                <p>This Agreement shall be effective and binding upon my heirs, next of kin, executors, administrators, legal representatives, and assigns, as well as upon me.</p>
                <p>I have read this entire Assumption of Risk, Waiver and Release Agreement. I fully understand the entire Agreement and acknowledge that I have had the opportunity to review this Agreement with an attorney of my choosing if I so desire, and I agree to be legally bound by the agreement.</p>
                
                <h6 style={{fontWeight: 600}}>Kingfisher Kayaking Inc. Photo Release:</h6>
                <p>I hereby grant the Kingfisher Kayaking Inc.  permission to use my likeness in a photograph, video, or other digital media (“photo”) in any and all of its publications, including web-based publications, without payment or other consideration.
I understand and agree that all photos will become the property of the Kingfisher Kayaking Inc. and will not be returned.
I hereby irrevocably authorize Kingfisher Kayaking Inc. to edit, alter, copy, exhibit, publish, or distribute these photos for any lawful purpose. In addition, I waive any right to inspect or approve the finished product wherein my likeness appears. 
Additionally, I waive any right to royalties or other compensation arising or related to the use of the photo.
I hereby hold harmless, release, and forever discharge Kingfisher Kayaking Inc. from all claims, demands, and causes of action which I, my heirs, representatives, executors, administrators, or any other persons acting on my behalf or on behalf of my estate have or may have by reason of this authorization.
</p>
                <p>I HAVE READ AND UNDERSTAND THE ABOVE PHOTO RELEASE. I AFFIRM THAT I AM AT LEAST 18 YEARS OF AGE, OR, IF I AM UNDER 18 YEARS OF AGE, I HAVE OBTAINED THE REQUIRED CONSENT OF MY PARENTS/ GUARDIANS AS EVIDENCED BY THEIR SIGNATURES BELOW. I ACCEPT:</p>
                <p>I HAVE CAREFULLY READ THIS AGREEMENT AND UNDERSTAND ITS CONTENTS.
I AM AWARE THAT BY SIGNING THIS AGREEMENT, I AM WAIVING CERTAIN LEGAL RIGHTS WHICH I OR MY HEIRS, NEXT OF KIN, EXECUTORS, ADMINISTRATORS, AND/OR REPRESENTATIVES MAY HAVE AGAINST THE RELEASEES.
I AM AWARE THIS IS AN ASSUMPTION OF RISK, WAIVER AND RELEASE OF LIABILITY AND I SIGN IT VOLUNTARILY.
I ALSO UNDERSTAND THAT I SHOULD NOT, AND MAY NOT PARTICIPATE IN THIS ACTIVITY IF I AM UNDER THE INFLUENCE OF ALCOHOL OR DRUGS.</p>
                <p>FURTHERMORE, I AGREE TO THE TERMS OF THE ABOVE RENTAL AGREEMENT WITH Kingfisher Kayaking Inc</p>

                <div className='waiver-form' >
                {renderAlert}
                <form onSubmit={submitHandler} >
                <label>
                    <h4>Participant's Signature / Parent/Guardian Signature</h4>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input placeholder='First Name' onChange={(e) => {setWaiverFirstName(e.target.value)}} type="text" value={waiverFirstName}  name="first-name" />
                        <input placeholder='Last Name' onChange={(e) => {setWaiverLastName(e.target.value)}} type="text" value={waiverLastName} name="last-name" />
                        <input placeholder="Participant's Date of Birth" onChange={(e) => {setWaiverAge(e.target.value)}} type="number" value={waiverAge} name="age" />
                        <input placeholder='Legally Binding Signature' onChange={(e) => {setSignature(e.target.value)}} type="text" value={signature}  name="signature" />
                        <input type="hidden"  name="date" value={moment().format('MMMM Do YYYY, h:mm:ss a')} />
                        <input type="hidden"  name="parent/part1" value={waiver1} />
                        <input type="hidden"  name="parent/part2" value={waiver2} />
                        <div>
                            {renderSpinner}
                        </div>
                    </div>
                </label>
                </form>
                </div>


            </Container>
        </div>
    )
}

export default WaiverPage;