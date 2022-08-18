import { expect, describe, it, afterAll, beforeAll } from 'vitest'
import { fireEvent, render, screen } from '../../../utils/test-utils'
import { index as Register } from './index'
import { MemoryRouter } from 'react-router-dom'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

// mocked server
const server = setupServer(
	rest.get('https://goscrum-api.alkemy.org/auth/data', (_req, res, ctx) => {
		return res(
			ctx.json({
				result: {
					continente: ['America', 'Europa', 'Otro'],
					region: ['Otro', 'Latam', 'Brasil', 'America del Norte'],
					Rol: ['Team Member', 'Team Leader'],
				},
			})
		)
	})
)

beforeAll(() => server.listen())
afterAll(() => server.close())

describe('Register page', () => {
	it('should render register page loader', () => {
		render(<Register />, {
			wrapper: MemoryRouter,
		})

		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
	})

	it('should render register page title', () => {
		render(<Register />, {
			wrapper: MemoryRouter,
		})

		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
	})

	it('should render register page input fields', async () => {
		render(<Register />, {
			wrapper: MemoryRouter,
		})

		expect(await screen.findByLabelText('Username')).toBeInTheDocument()
		expect(await screen.findByLabelText('Email')).toBeInTheDocument()
		expect(await screen.findByLabelText('Password')).toBeInTheDocument()
	})

	it('should render register page select fields', async () => {
		render(<Register />, {
			wrapper: MemoryRouter,
		})

		expect(await screen.findByLabelText('Role')).toBeInTheDocument()
		expect(await screen.findByLabelText('Continent')).toBeInTheDocument()

		fireEvent.change(screen.getByLabelText('Continent'), {
			target: { value: 'America' },
		})
		expect(await screen.findByLabelText('Region')).toBeInTheDocument()
	})

	it('should render register page submit button', async () => {
		render(<Register />, {
			wrapper: MemoryRouter,
		})

		expect(
			await screen.findByRole('button', { name: 'Sign In' })
		).toBeInTheDocument()
	})
})
