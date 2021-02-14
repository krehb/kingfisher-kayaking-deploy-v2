import React from 'react';
import SelectionFrom from '../Componets/SelectionForm/SelectionForm'


function FormPage({routeSelected, kayaks, route, value, kayaksInStock, setViewing, setFormView, setFormData, bookingId }) {


    
    
    
    
    return (
        <div className='RoutesList'>
          <SelectionFrom
              setFormView={setFormView}
              setViewing={setViewing}
              routeSelected={routeSelected}
              route={routeSelected}
              bookingId={bookingId}
              value={value}
              kayaks={kayaks}
              kayaksInStock={kayaksInStock}
              setFormData={setFormData}
          />
        </div>
    )
}

export default FormPage;