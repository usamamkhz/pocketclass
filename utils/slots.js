import moment from "moment";

export const generateHourlySlotsForDate = (
	slotDate,
	availability,
	appointments,
	check = false
) => {
	const slots = [];
	const selectedDate = moment(slotDate).format("YYYY-MM-DD");
	const startDate = moment(`${selectedDate} 00:00`);
	const endDate = moment(`${selectedDate} 23:59`);

	while (startDate.isBefore(endDate)) {
		const startHour = startDate.toDate();
		const endHour = startDate.isSame(moment(`${selectedDate} 23:00`))
			? startDate.add(59, "minutes").toDate()
			: startDate.add(1, "hour").toDate();

		const slot = {
			label: `${moment(startHour).format("h:mm A")} - ${moment(endHour).format(
				"h:mm A"
			)}`,
			start: startHour,
			end: endHour,
			isAvailable: false,
		};

		if (
			check &&
			!isAppointmentOverlapping(
				getDateList(appointments),
				slot.start,
				slot.end
			) &&
			isAppointmentOverlapping(getFlatList(availability), slot.start, slot.end)
		) {
			slot.isAvailable = true;
		}

		slots.push(slot);
	}

	return slots;
};

export const isAppointmentOverlapping = (appointments, newStart, newEnd) => {
	return appointments?.some?.((appointment) => {
		const appointmentStart = moment(appointment.start);
		const appointmentEnd = moment(appointment.end);
		return (
			(moment(newStart).isSameOrAfter(appointmentStart) &&
				moment(newStart).isBefore(appointmentEnd)) ||
			(moment(newEnd).isSameOrBefore(appointmentEnd) &&
				moment(newEnd).isAfter(appointmentStart)) ||
			moment(newEnd).isBefore(moment())
		);
	});
};

export const alreadyHasAvailability = (availability, newStart) => {
	return availability?.some?.((avl) => {
		const date = moment(avl?.date?.toDate?.());
		return moment(newStart)?.isSame(date);
	});
};

export const getFlatList = (list) => {
	const flattenedList = list?.reduce?.((accumulator, currentValue) => {
		return accumulator?.concat?.(currentValue.availability);
	}, []);
	const finalList = flattenedList?.map?.((a) => ({
		...a,
		start: a.start.toDate(),
		end: a.end.toDate(),
	}));

	return finalList;
};

export const getDateList = (list) => {
	const finalList = list?.map?.((a) => ({
		...a,
		start: a.start.toDate(),
		end: a.end.toDate(),
	}));

	return finalList;
};
