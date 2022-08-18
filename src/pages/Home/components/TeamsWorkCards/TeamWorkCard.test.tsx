import { expect, describe, it } from 'vitest'
import { render, screen } from '../../../../utils/test-utils'
import { TeamWorkCard } from './TeamWorkCard'

describe('TeamWorkCard', () => {
	it('should render UX/UI Desing Team Card', () => {
		render(<TeamWorkCard />)

		expect(screen.getByText('UX/UI Desing Team')).toBeInTheDocument()
	})
	it('should render Front-end Team Card', () => {
		render(<TeamWorkCard />)

		expect(screen.getByText('Front-end Team')).toBeInTheDocument()
	})
	it('should render Back-end Team Card', () => {
		render(<TeamWorkCard />)

		expect(screen.getByText('Back-end Team')).toBeInTheDocument()
	})
})
