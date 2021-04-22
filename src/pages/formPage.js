import React, { useEffect} from 'react';
import SelectionFrom from '../Componets/SelectionForm/SelectionForm'


function FormPage({routeSelected, kayaks, route, value, kayaksInStock,kayaksLeft, setViewing, setFormView, setFormData, bookingId, routesList }) {


    
    useEffect(() => {
        window.scroll(0,100)
    },[]);
    
    
    return (
        <div className='RoutesList'>
          <SelectionFrom
            
              kayaksLeft={kayaksLeft}
              setFormView={setFormView}
              setViewing={setViewing}
              routeSelected={routeSelected}
              route={routeSelected}
              routesList={routesList}
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