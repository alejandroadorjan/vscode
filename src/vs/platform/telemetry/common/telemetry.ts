/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createDecorator } from '../../instantiation/common/instantiation.js';

export const ITelemetryService = createDecorator<ITelemetryService>('telemetryService');

export interface ITelemetryData {
	from?: string;
	target?: string;
	[key: string]: string | unknown | undefined;
}

export const enum TelemetryLevel {
	NONE = 0,
	CRASH = 1,
	ERROR = 2,
	USAGE = 3
}

export interface ITelemetryService {

	readonly _serviceBrand: undefined;

	readonly telemetryLevel: TelemetryLevel;

	readonly sessionId: string;
	readonly machineId: string;
	readonly sqmId: string;
	readonly devDeviceId: string;
	readonly firstSessionDate: string;
	readonly msftInternal?: boolean;

	readonly sendErrorTelemetry: boolean;

	/** @deprecated */
	publicLog(eventName: string, data?: ITelemetryData): void;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	publicLog2<E = unknown, T = unknown>(eventName: string, data?: Record<string, any>): void;

	/** @deprecated */
	publicLogError(errorEventName: string, data?: ITelemetryData): void;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	publicLogError2<E = unknown, T = unknown>(eventName: string, data?: Record<string, any>): void;

	setExperimentProperty(name: string, value: string): void;
}

export interface ITelemetryEndpoint {
	id: string;
	aiKey: string;
	sendErrorTelemetry: boolean;
}

export const firstSessionDateStorageKey = 'telemetry.firstSessionDate';
export const lastSessionDateStorageKey = 'telemetry.lastSessionDate';
export const currentSessionDateStorageKey = 'telemetry.currentSessionDate';

export const ICustomEndpointTelemetryService = createDecorator<ICustomEndpointTelemetryService>('customEndpointTelemetryService');

export interface ICustomEndpointTelemetryService {
	readonly _serviceBrand: undefined;

	publicLog(endpoint: ITelemetryEndpoint, eventName: string, data?: ITelemetryData): void;
	publicLogError(endpoint: ITelemetryEndpoint, errorEventName: string, data?: ITelemetryData): void;
}
