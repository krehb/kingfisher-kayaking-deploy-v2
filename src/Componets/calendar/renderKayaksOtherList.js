export default function renderKayaksOther(value, stock, booked, otherCalendarDataList) {


    //rendering nonBooked days
      let stockOfKayaks = stock
      let OtherCalendarStock = stock
  
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
  
  
      //rendering other list if selecting both in the afternoon
      otherCalendarDataList.forEach(booking => {
          if (value.isSame(booking.date, 'day') ) {
              let parsedKayaks = JSON.parse(booking.numOfKayaks)
              datesBookArray.push(parsedKayaks)
  
  
  
              if(datesBookArray.length > 1){
                  // muliple bookings on single date
                  let kayaksBookedTotal = datesBookArray.reduce(reducer)
                  let calculatedLeft = stock - kayaksBookedTotal
                  OtherCalendarStock = calculatedLeft +1
  
              } else if (datesBookArray.length === 1){
                  // single booking on single date
                  let calculatedLeft = stock - parsedKayaks
                  OtherCalendarStock = calculatedLeft + 1
              }
          }
      });
  

  
      return  OtherCalendarStock
  }