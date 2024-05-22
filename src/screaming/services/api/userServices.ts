import { User } from '../../typescript/models/types'

const BASE_URL = 'https://api.example.com/users'

export async function getUsers(): Promise<User[]> {
	try {
		const response = await fetch(BASE_URL)
		if (!response.ok) {
			throw new Error(`Failed to fetch users: ${response.statusText}`)
		}
		return await response.json()
	} catch (error) {
		console.error('Error fetching users:', error)
		throw error
	}
}
