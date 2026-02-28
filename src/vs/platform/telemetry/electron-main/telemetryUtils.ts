/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ILogService } from '../../log/common/log.js';
import { IStateService } from '../../state/node/state.js';

/**
 * Stub: returns an empty string since machine IDs are no longer used for telemetry.
 */
export async function resolveMachineId(_stateService: IStateService, _logService: ILogService): Promise<string> {
	return '';
}

/**
 * Stub: returns an empty string since SQM IDs are no longer used for telemetry.
 */
export async function resolveSqmId(_stateService: IStateService, _logService: ILogService): Promise<string> {
	return '';
}

/**
 * Stub: returns an empty string since dev device IDs are no longer used for telemetry.
 */
export async function resolveDevDeviceId(_stateService: IStateService, _logService: ILogService): Promise<string> {
	return '';
}

/**
 * Stub: no-op since device ID validation is no longer needed.
 */
export function validateDevDeviceId(_stateService: IStateService, _logService: ILogService): void {
	// noop
}
