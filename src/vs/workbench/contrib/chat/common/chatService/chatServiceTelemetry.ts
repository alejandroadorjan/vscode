/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Chat service telemetry has been removed. This stub exists to satisfy build references.

export class ChatServiceTelemetry {
	constructor() { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	notifyUserAction(..._args: any[]): void { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	retrievedFollowups(..._args: any[]): void { }
}

export class ChatRequestTelemetry {
	constructor(_config: unknown) { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	complete(..._args: any[]): void { }
}
