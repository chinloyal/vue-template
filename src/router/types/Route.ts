export interface Route {
	name: string;
	path: string;
	component: () => Promise<typeof import('*.vue')>;
	meta?: object;
}
