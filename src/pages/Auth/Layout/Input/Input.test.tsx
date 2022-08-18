import { describe, expect, it } from 'vitest'
import { render, screen } from '../../../../utils/test-utils'
import Input from './Input'

describe('Input component', () => {
	it('should render input', () => {
		const someHandler = () => {}

		render(
			<Input
				inputId="someName"
				handler={someHandler}
				label="someLabel"
				type="text"
			/>
		)

		expect(screen.getByRole('textbox', {})).toBeInTheDocument()
	})
})
