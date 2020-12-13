function isSelected(day, value) {
    return value.isSame(day, 'day');
}

export function beforeToday(day) {
    return day.isBefore(new Date(), 'day');
}

function isToday(day) {
    return day.isSame(new Date(), 'day');
}


function isBooked(day) {
    let classes = null

    booked.forEach(bookedDate => {
        if (day.isSame(bookedDate, 'day')) {
            classes = bookedDate
        }
    })

    return day.isSame(classes, 'day')
}

export default function dayStyles(day, value) {
    if (beforeToday(day)) return 'before'
    if (isSelected(day, value)) return 'red'
    if (isToday(day)) return 'today'
    if (isBooked(day)) return 'kayaks-2'
    return ''
}