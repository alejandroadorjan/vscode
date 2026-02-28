/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Merge editor telemetry has been removed. This stub exists to satisfy build references.

import { Disposable } from '../../../../base/common/lifecycle.js';

export class MergeEditorTelemetry extends Disposable {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	constructor(..._args: any[]) {
		super();
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reportNavigationToNextConflict(..._args: any[]): void { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reportNavigationToPreviousConflict(..._args: any[]): void { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reportSmartCombinationInvoked(..._args: any[]): void { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reportMergeEditorOpened(..._args: any[]): void { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reportLayoutChange(..._args: any[]): void { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reportMergeEditorClosed(..._args: any[]): void { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reportAcceptInvoked(..._args: any[]): void { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reportRemoveInvoked(..._args: any[]): void { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reportResetToBaseInvoked(..._args: any[]): void { }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reportConflictCounterClicked(..._args: any[]): void { }
}
