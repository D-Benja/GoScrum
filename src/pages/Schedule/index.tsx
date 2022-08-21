import '@fullcalendar/react/dist/vdom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { addEvents, getEvents } from '../../store/actions/eventsAction'

export const index = () => {
	// const [calendarEvents, setCalendarEvents] = useState<any[]>([])
	const [eventData, setEventData] = useState<any>({
		title: '',
		start: '',
		end: '',
		allDay: false,
		description: '',
	})

	const dispatch = useAppDispatch()

	const { events } = useAppSelector((state) => state.eventsReducer)

	useEffect(() => {
		dispatch(getEvents())
	}, [])

	const handleChange = (e: any) => {
		const { value } = e.currentTarget

		setEventData({
			...eventData,
			[e.currentTarget.name]: value,
		})
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		dispatch(addEvents(eventData))

		// setCalendarEvents([
		// 	...calendarEvents,
		// 	{
		// 		title: eventData.title,
		// 		start: eventData.start,
		// 		ends: eventData.end,
		// 		allDay: eventData.allDay,
		// 		description: eventData.description,
		// 	},
		// ])

		// console.log(calendarEvents)
	}

	return (
		<div className="h-full p-10">
			<div className="h-full w-full">
				<div className="flex h-[73vh] gap-x-10">
					<section className="flex w-96 flex-col border">
						<div className="flex h-16 w-full items-center justify-center gap-4 border-b px-10 text-lg font-medium">
							<button className="w-full border-r border-r-deep_blue text-center">
								Calendar
							</button>
							<button className="w-full text-center">Scheduler</button>
						</div>
						<div className="w-full flex-1 px-4 py-8">
							<div className="mb-6 flex flex-col items-center justify-center gap-6">
								<h2 className="text-lg font-medium">New Schedule Item</h2>
							</div>

							<form onSubmit={handleSubmit} className="flex flex-col gap-6">
								<div className="flex flex-col gap-2">
									<label htmlFor="title" className="font-medium">
										Title
									</label>
									<input
										name="title"
										type="text"
										className="rounded-xl border px-2 py-1"
										onChange={handleChange}
									/>
								</div>
								<div>
									<div className="flex gap-2">
										<label htmlFor="description" className="font-medium">
											Description
										</label>
										<p>(max 50 char.)</p>
									</div>
									<textarea
										name="description"
										className="h-20 w-full rounded-xl border p-2"
										onChange={handleChange}
									/>
								</div>
								<div className="flex w-full flex-col gap-6">
									<div className="flex items-center">
										<label htmlFor="allDay" className="w-32 font-medium">
											All Day
										</label>
										<input
											name="allDay"
											type="checkbox"
											className="rounded-xl border px-2 py-1"
											onChange={handleChange}
										/>
									</div>
									<div className="flex flex-1">
										<label htmlFor="start" className="w-32 font-medium">
											Event Start
										</label>
										<input
											name="start"
											type="datetime-local"
											className="border-b"
											onChange={handleChange}
										/>
									</div>
									<div className="flex flex-1">
										<label htmlFor="end" className="w-32 font-medium">
											Event End
										</label>
										<input
											name="end"
											type="datetime-local"
											className="border-b"
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<label htmlFor="asignees" className="font-medium">
										Assignees
									</label>
									<select
										name="asignees"
										className="mb-8 w-full rounded-xl border px-4 py-2"
									>
										<option>Select Assignees</option>
										<option>Team member 1</option>
										<option>Team member 2</option>
										<option>Team member 3</option>
									</select>
								</div>
								<div className="flex justify-between">
									<button
										type="submit"
										className="w-32 rounded-xl bg-deep_orange px-4 py-2 text-white"
									>
										Confirm
									</button>
									<button className="w-32 rounded-xl bg-deep_orange px-4 py-2 text-white">
										Cancel
									</button>
								</div>
							</form>
						</div>
					</section>
					<section className="flex-1">
						<FullCalendar
							plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
							initialView="dayGridMonth"
							aspectRatio={1.86}
							timeZone="local"
							headerToolbar={{
								left: 'today',
								center: 'title',
								right: 'dayGridMonth dayGridWeek timeGridDay',
							}}
							editable={true}
							events={events}
							dayMaxEvents={true}
						/>
					</section>
				</div>
			</div>
		</div>
	)
}
