// ADD APPOINTMENT
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// library
import moment from "moment";
import { toast } from "react-toastify";
// firebase
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
// hooks
import useClickOutside from "../hooks/OnClickOutside";
// utils
import { generateHourlySlotsForDate } from "../utils/slots";

const AddBooking = ({
	slotDate,
	availability,
	appointments,
	closeModal,
	uid,
	uName,
	classId,
}) => {
	const [loading, setLoading] = useState(false);
	// for closing modal
	const modalRef = useRef();
	useClickOutside(modalRef, closeModal);

	// for displaying available slots
	const [hourlySlots, setHourlySlots] = useState([]);
	useEffect(() => {
		const getSlots = () => {
			setLoading(true);
			const slots = generateHourlySlotsForDate(
				slotDate,
				availability,
				appointments,
				true
			);
			setHourlySlots(slots);
			setLoading(false);
		};

		getSlots();
	}, []);

	// for adding new appointment
	const initialState = {
		owner: uid,
		title: uName,
		class: classId,
		start: null,
		end: null,
	};
	const [newAppointment, setNewAppointment] = useState(initialState);

	const handleTime = (start, end) => {
		setNewAppointment({ ...newAppointment, start: start, end: end });
	};

	const handleAddAppointment = () => {
		try {
			setLoading(true);
			addDoc(collection(db, "appointments"), newAppointment).then(() => {
				toast.success("Appointment added !", {
					toastId: "apSuccess",
				});
				setLoading(false);
				closeModal();
			});
		} catch (error) {
			setLoading(false);
			console.warn(error);
			toast.error("Appointment adding error !", {
				toastId: "apError2",
			});
		}
	};

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300`}
		>
			{loading || hourlySlots?.length < 24 ? (
				<section className="flex justify-center items-center min-h-[100vh]">
					<Image src="/Rolling-1s-200px.svg" width={"60px"} height={"60px"} />
				</section>
			) : (
				<div
					ref={modalRef}
					className={`bg-white rounded-2xl p-8 md:px-12 w-[90%] sm:w-3/4 max-w-[1000px] transform transition-transform duration-300 ease-in-out shadow-xl`}
				>
					<div className="flex items-center justify-between flex-wrap">
						<h1 className="text-gray-700 font-bold text-2xl">
							Add Appointment
						</h1>
						{slotDate && (
							<h1 className="text-logo-red font-bold text-xl">
								{moment(slotDate).format("MMMM D, YYYY")}
							</h1>
						)}
					</div>

					{hourlySlots?.some((s) => s.isAvailable) ? (
						<div className="flex flex-col w-full mt-6">
							{/* slots */}
							<div className="mt-6 w-full">
								<h1 className="w-full text-center text-gray-700 font-bold text-xl">
									Select a slot
								</h1>

								<div className="mt-3 flex justify-center flex-wrap max-h-[300px] overflow-y-auto smallScrollbar">
									{hourlySlots?.map?.((slot) => {
										const isSelected =
											moment(newAppointment.start).isSame(slot.start) &&
											moment(newAppointment.end).isSame(slot.end);

										const handleClick = () => {
											isSelected
												? handleTime(initialState.start, initialState.end)
												: handleTime(slot.start, slot.end);
										};

										return (
											<button
												key={slot.label}
												onClick={handleClick}
												className={`py-2 px-4 border rounded-lg m-1 min-w-[190px] md:min-w-[210px] flex-1
											${isSelected ? "bg-logo-red text-white" : "bg-gray-50 text-gray-700"}
											disabled:bg-gray-300 disabled:opacity-20 disabled:cursor-default`}
												disabled={!slot.isAvailable}
											>
												{slot.label}
											</button>
										);
									})}
								</div>
							</div>

							{/* add btn */}
							<div className="mt-6 mx-auto">
								<button
									onClick={handleAddAppointment}
									className="bg-logo-red text-white py-2 px-8 rounded-lg opacity-80 hover:opacity-100 duration-150 ease-in-out disabled:grayscale-[50%] disabled:!opacity-80"
									disabled={!newAppointment.start || !newAppointment.end}
								>
									Confirm Appointment
								</button>
							</div>
						</div>
					) : (
						<div className="flex items-center justify-center w-full h-48 m-6">
							<h1 className="text-gray-400 font-bold text-2xl">
								No slot available
							</h1>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default AddBooking;
