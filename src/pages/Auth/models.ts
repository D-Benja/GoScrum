type Role = 'Team Member' | 'Team Leader' | ''

type Continent = 'America' | 'Europa' | 'Otro' | ''
export interface User {
	userName: string
	email: string
	password: string
	role: Role
	continent: Continent
	region: string
	teamId: string
}

export interface Credentials extends Pick<User, 'userName' | 'password'> {}

export interface SelectOptions {
	value: string
	label: string
}

export interface OptionData {
	Rol: []
	Continente: []
	Region: []
}
