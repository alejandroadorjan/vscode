/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Event } from '../../../base/common/event.js';
import { createDecorator } from '../../../platform/instantiation/common/instantiation.js';
import { TelemetryLevel } from '../../../platform/telemetry/common/telemetry.js';
import { ExtHostTelemetryShape } from './extHost.protocol.js';
import { ExtensionIdentifier } from '../../../platform/extensions/common/extensions.js';
import type * as vscode from 'vscode';

export const IExtHostTelemetry = createDecorator<IExtHostTelemetry>('IExtHostTelemetry');

export interface IExtHostTelemetry extends ExtHostTelemetryShape {
	readonly _serviceBrand: undefined;
	getTelemetryConfiguration(): boolean;
	getTelemetryDetails(): vscode.TelemetryConfiguration;
	onDidChangeTelemetryEnabled: Event<boolean>;
	onDidChangeTelemetryConfiguration: Event<vscode.TelemetryConfiguration>;
	onExtensionError(extension: ExtensionIdentifier, error: Error): boolean;
	instantiateLogger(extension: any, sender: vscode.TelemetrySender, options?: vscode.TelemetryLoggerOptions): vscode.TelemetryLogger;
}

export function isNewAppInstall(firstSessionDate: string): boolean {
	const firstSessionDateObj = new Date(firstSessionDate);
	const today = new Date();
	const diffMs = today.getTime() - firstSessionDateObj.getTime();
	return diffMs < (1000 * 60 * 60 * 24);
}

export class ExtHostTelemetry implements IExtHostTelemetry {

	readonly _serviceBrand: undefined;

	readonly onDidChangeTelemetryEnabled: Event<boolean> = Event.None;
	readonly onDidChangeTelemetryConfiguration: Event<vscode.TelemetryConfiguration> = Event.None;

	constructor(_isWorkerProcess: boolean) { }

	getTelemetryConfiguration(): boolean {
		return false;
	}

	getTelemetryDetails(): vscode.TelemetryConfiguration {
		return { isUsageEnabled: false, isErrorsEnabled: false, isCrashEnabled: false };
	}

	onExtensionError(_extension: ExtensionIdentifier, _error: Error): boolean {
		return false;
	}

	instantiateLogger(_extension: any, _sender: vscode.TelemetrySender, _options?: vscode.TelemetryLoggerOptions): vscode.TelemetryLogger {
		return ExtHostTelemetryLogger.noopLogger();
	}

	$initializeTelemetryLevel(_level: TelemetryLevel): void { }

	$onDidChangeTelemetryLevel(_level: TelemetryLevel): void { }
}

export class ExtHostTelemetryLogger {

	static validateSender(_sender: vscode.TelemetrySender): void { }

	static noopLogger(): vscode.TelemetryLogger {
		return {
			logUsage: () => { },
			logError: () => { },
			isUsageEnabled: false,
			isErrorsEnabled: false,
			onDidChangeEnableStates: Event.None as vscode.Event<vscode.TelemetryLogger>,
			dispose: () => { }
		};
	}
}
