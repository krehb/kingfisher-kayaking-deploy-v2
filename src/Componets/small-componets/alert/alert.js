import React  from 'react';
import { Alert} from 'react-bootstrap';



function AlertDismissibleExample({show}) {
  
    let alert = null

    if (show === 1) {    
        alert = (
        <Alert variant="info"  >
          <Alert.Heading>Oh snap! You got an error</Alert.Heading>
            <p>CheckBox to agree to waiver</p>
        </Alert>);
      } else if (show === 2){
        alert = (
          <Alert variant="danger"  >
            <Alert.Heading>Oh snap! You got an error</Alert.Heading>
              <p>CheckBox to agree to waiver</p>
          </Alert>);
    }else {alert = (null)}


  return(
      <div>
        {alert}
      </div>
  );
};

export default AlertDismissibleExample;