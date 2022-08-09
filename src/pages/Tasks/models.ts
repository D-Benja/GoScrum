interface User {
	email: string
	role: string
	userName: string
	teamId: string
	userId: string
	iat: number
	exp: number
}
export interface Task {
	_id: string
	title: string
	status: string
	importance: string
	createdAt: number
	modifiedAt: number
	deletedAt: string
	deleted: boolean
	teamId: string
	description: string
	user: User
}
