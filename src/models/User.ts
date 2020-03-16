export class User {
	constructor(
		public name: string,
		public email: string,
		// tslint:disable-next-line: trailing-comma
		public id: number = 0
	) {}
}
