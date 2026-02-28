/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Debug telemetry has been removed. This stub exists to satisfy build references.

import { IDebugModel } from './debug.js';

export class DebugTelemetry {
	constructor(_model: IDebugModel) { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	logDebugSessionStart(..._args: any[]): Promise<void> { return Promise.resolve(); }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	logDebugSessionStop(..._args: any[]): void { }
}
