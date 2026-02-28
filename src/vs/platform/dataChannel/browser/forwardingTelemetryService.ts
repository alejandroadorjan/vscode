/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Telemetry forwarding has been removed. This stub exists to satisfy build references.

export class DataChannelForwardingTelemetryService {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	publicLog2<E = unknown, T = unknown>(_eventName: string, _data?: Record<string, any>): void { }
}

export function forwardToChannelIf(_condition: boolean): Record<never, never> {
	return {};
}

export function isCopilotLikeExtension(_extensionId: string | undefined): boolean {
	return false;
}
