import React from 'react';
import PayForm from '../Componets/Paypal/payForm';


function PaymentPage({ kayaks, routeSelected, value, kayaksInStock, setViewing, setFormView, formData, routeCost,bookingId, canoeCost }) {


    
    
    
    
    return (
        <div className='RoutesList'>
        <PayForm
            setFormView={setFormView}
            setViewing={setViewing}
            route={routeSelected}
            value={value}
            kayaks={kayaks}
            kayaksInStock={kayaksInStock}
            canoeCost={canoeCost}
            formData={formData}
            routeCost={routeCost}
            bookingId={bookingId}
        />
        </div>
    )
}

export default PaymentPage;