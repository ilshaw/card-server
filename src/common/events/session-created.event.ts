export class SessionCreatedEvent {
	constructor(public readonly access: string, public readonly refresh: string) {}
}