import { ChangeEventHandler } from 'react'
import { SelectOptions } from '../models'

type Props = {
	inputId: string
	label: string
	handler: ChangeEventHandler<HTMLSelectElement>
	options: Array<SelectOptions>
	defaultValue: string
}

const Select = ({ inputId, label, handler, options, defaultValue }: Props) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={inputId} className="text-sm">
				{label}
			</label>
			<select
				id={inputId}
				className="rounded-lg border p-1 outline-none"
				onChange={handler}
				defaultValue="selected"
			>
				<option value="selected" disabled>
					{defaultValue}
				</option>
				{options?.map((element: any, index: number) => (
					<option key={index} value={element}>
						{element}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
