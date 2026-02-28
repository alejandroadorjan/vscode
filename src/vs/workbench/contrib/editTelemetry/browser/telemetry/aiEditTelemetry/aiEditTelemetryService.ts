/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// AI edit telemetry has been removed. This stub exists to satisfy build references.

import { createDecorator } from '../../../../../../platform/instantiation/common/instantiation.js';
import { InstantiationType, registerSingleton } from '../../../../../../platform/instantiation/common/extensions.js';
import { EditSuggestionId } from '../../../../../../editor/common/textModelEditSource.js';

export const IAiEditTelemetryService = createDecorator<IAiEditTelemetryService>('aiEditTelemetryService');

export interface IAiEditTelemetryService {
	readonly _serviceBrand: undefined;
	createSuggestionId(_info: unknown): EditSuggestionId | undefined;
	handleCodeAccepted(_info: unknown): void;
}

class NullAiEditTelemetryService implements IAiEditTelemetryService {
	declare readonly _serviceBrand: undefined;
	createSuggestionId(_info: unknown): EditSuggestionId | undefined { return undefined; }
	handleCodeAccepted(_info: unknown): void { }
}

registerSingleton(IAiEditTelemetryService, NullAiEditTelemetryService, InstantiationType.Delayed);
