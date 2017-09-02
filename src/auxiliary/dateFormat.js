const prependZero = (num) => num > 9 ? num : `0${num}`

export const formatTime = (hours, minutes) => {
	const isPastTwelve = hours > 12
	const period = isPastTwelve || hours === 12 ? "PM" : "AM"

	const _hours   = prependZero(isPastTwelve ? hours - 12 : hours)
	const _minutes = prependZero(minutes)
	return `${_hours}:${_minutes} ${period}`
}


export default (DateInstance) => {
	// DATE
	const month  = DateInstance.getMonth() + 1
	const day    = DateInstance.getDate()
	const year   = DateInstance.getFullYear()
	const _month = prependZero(month)
	const _day   = prependZero(day)


	// TIME
	const hours   = DateInstance.getHours()
	const minutes = DateInstance.getMinutes()
	const time = formatTime(hours, minutes)

	const dateString = `${_month}/${_day}/${year} ${time}`
	return dateString
}
