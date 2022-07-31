type Role = 'Team Member' | 'Team Leader' | ''

type Continent = 'America' | 'Europa' | 'Otro' | ''

type Region =
	| 'United States'
	| 'Latam'
	| 'Brasil'
	| 'Australia'
	| 'Japan'
	| 'Other'
	| ''

export interface User {
	uuid: string
	username: string
	email: string
	password: string
	role: Role
	continent: Continent
	region: Region
}

export interface Credentials extends Pick<User, 'email' | 'password'> {}

export interface SelectOptions {
	value: string
	label: string
}
