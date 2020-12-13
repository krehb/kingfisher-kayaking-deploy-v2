export default function renderKayaks(value, stock, booked) {


  //rendering nonBooked days
    let stockOfKayaks = stock


  //rendering booked days
  let datesBookArray = []
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

    //when day is selected
    booked.forEach(booking => {
        if (value.isSame(booking.date, 'day') ) {
            let parsedKayaks = JSON.parse(booking.numOfKayaks)
            datesBookArray.push(parsedKayaks)

            if(datesBookArray.length > 1){
                // muliple bookings on single date
                let kayaksBookedTotal = datesBookArray.reduce(reducer)
                let calculatedLeft = stock - kayaksBookedTotal
                stockOfKayaks = calculatedLeft

            } else if (datesBookArray.length === 1){
                // single booking on single date
                let calculatedLeft = stock - parsedKayaks
                stockOfKayaks = calculatedLeft
            }
        }
    });


    return stockOfKayaks
}