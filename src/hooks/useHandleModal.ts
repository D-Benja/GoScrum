import { useEffect, useRef } from 'react'

export default function useHandleModal(handler: Function) {
	const domNode = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const maybeHandler = (event: any) => {
			if (!domNode.current?.contains(event.target)) {
				handler()
			}
		}

		document.addEventListener('mousedown', maybeHandler)

		return () => {
			document.removeEventListener('mousedown', maybeHandler)
		}
	})

	return domNode
}
