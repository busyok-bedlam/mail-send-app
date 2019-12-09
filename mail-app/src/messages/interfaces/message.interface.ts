
type User = {
	fullName: string,
	email: string
}
type Users = Array<User>;

export interface MessageInterface {
	theme: string,
	content: string,
	sender: User,
	receiver: User,
	carbonCopy?: Users,
	blindCarbonCopy?: Users
}
