import { expect, describe, it } from 'vitest'
import { render, screen } from '../../../utils/test-utils'
import { index as Login } from './index'
import { MemoryRouter } from 'react-router-dom'

describe('Login page', () => {
	it('should render login page inputs', () => {
		render(<Login />, {
			wrapper: MemoryRouter,
		})

		expect(screen.getByRole('textbox')).toBeInTheDocument()
	})

	it('should render login page title', () => {
		render(<Login />, {
			wrapper: MemoryRouter,
		})

		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
	})

	it('should render login page submit button', () => {
		render(<Login />, {
			wrapper: MemoryRouter,
		})

		expect(screen.getByRole('button')).toBeInTheDocument()
	})
})
