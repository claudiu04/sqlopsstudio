/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IConnectionManagementService, IConnectableInput, IConnectionCompletionOptions, IConnectionCallbacks, IConnectionResult, INewConnectionParams }
	from 'sql/parts/connection/common/connectionManagement';
import { IConnectionProfileGroup, ConnectionProfileGroup } from 'sql/parts/connection/common/connectionProfileGroup';
import { IConnectionProfile } from 'sql/parts/connection/common/interfaces';
import { ConnectionProfile } from 'sql/parts/connection/common/connectionProfile';
import { ConnectionManagementInfo } from 'sql/parts/connection/common/connectionManagementInfo';
import data = require('data');
import Event, { Emitter } from 'vs/base/common/event';

// Test stubs for commonly used objects

export class TestConnectionManagementService implements IConnectionManagementService {
	_serviceBrand: any;
	onAddConnectionProfile = undefined;
	onDeleteConnectionProfile = undefined;
	onConnectionChanged = undefined;
	onLanguageFlavorChanged = undefined;

	public get onConnect(): Event<any> {
		let conEvent = new Emitter<any>();
		return conEvent.event;
	}

	public get onDisconnect(): Event<any> {
		let conEvent = new Emitter<any>();
		return conEvent.event;
	}

	registerProvider(providerId: string, provider: data.ConnectionProvider): void {

	}

	showConnectionDialog(params?: INewConnectionParams, model?: IConnectionProfile, error?: string): Promise<void> {
		return undefined;
	}

	showCreateServerGroupDialog(): Promise<void> {
		return undefined;
	}

	showEditServerGroupDialog(group: ConnectionProfileGroup): Promise<void> {
		return undefined;
	}

	onConnectionComplete(handle: number, connectionInfoSummary: data.ConnectionInfoSummary): void {

	}

	onIntelliSenseCacheComplete(handle: number, connectionUri: string): void {

	}

	public onConnectionChangedNotification(handle: number, changedConnInfo: data.ChangedConnectionInfo): void {

	}

	getCurrentConnectionSummary(): data.ConnectionSummary {
		return undefined;
	}

	getConnectionGroups(): ConnectionProfileGroup[] {
		return [];
	}

	getActiveConnections(): ConnectionProfile[] {
		return [];
	}

	saveProfileGroup(profile: IConnectionProfileGroup): Promise<string> {
		return undefined;
	}

	getRecentConnections(): ConnectionProfile[] {
		return [];
	}

	public clearRecentConnectionsList(): void {
		return;
	}

	getUnsavedConnections(): ConnectionProfile[] {
		return [];
	}

	changeGroupIdForConnectionGroup(source: IConnectionProfileGroup, target: IConnectionProfileGroup): Promise<void> {
		return Promise.resolve();
	}

	changeGroupIdForConnection(source: ConnectionProfile, targetGroupId: string): Promise<void> {
		return Promise.resolve();
	}

	deleteConnection(connection: ConnectionProfile): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			resolve(true);
		});
	}

	deleteConnectionGroup(group: ConnectionProfileGroup): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			resolve(true);
		});
	}

	getAdvancedProperties(): data.ConnectionOption[] {
		return [];
	}

	getConnectionId(connectionProfile: ConnectionProfile): string {
		return undefined;
	}

	getFormattedUri(uri: string, connectionProfile: ConnectionProfile): string {
		return undefined;
	}

	isConnected(fileUri: string, connectionProfile?: ConnectionProfile): boolean {
		return false;
	}

	isRecent(connectionProfile: ConnectionProfile): boolean {
		return false;
	}

	isProfileConnected(connectionProfile: IConnectionProfile): boolean {
		return false;
	}

	isProfileConnecting(connectionProfile: IConnectionProfile): boolean {
		return false;
	}

	findExistingConnection(connection: IConnectionProfile, purpose?: 'dashboard' | 'insights' | 'connection'): ConnectionProfile {
		return undefined;
	}

	connect(connection: IConnectionProfile, uri: string, options?: IConnectionCompletionOptions, callbacks?: IConnectionCallbacks): Promise<IConnectionResult> {
		return new Promise<IConnectionResult>((resolve, reject) => {
			resolve({ connected: true, errorMessage: undefined, errorCode: undefined });
		});
	}

	connectAndSaveProfile(connection: IConnectionProfile, uri: string, options?: IConnectionCompletionOptions, callbacks?: IConnectionCallbacks): Promise<IConnectionResult> {
		return new Promise<IConnectionResult>(() => true);
	}

	disconnectEditor(owner: IConnectableInput): Promise<boolean> {
		return new Promise<boolean>(() => true);
	}

	disconnect(connection: IConnectionProfile);
	disconnect(uri: string);
	disconnect(input: any): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			resolve(true);
		});
	}

	getConnectionProfile(fileUri: string): IConnectionProfile {
		return undefined;
	}

	getConnectionInfo(fileUri: string): ConnectionManagementInfo {
		return undefined;
	}

	addSavedPassword(connectionProfile: IConnectionProfile): Promise<IConnectionProfile> {
		return new Promise<IConnectionProfile>(() => connectionProfile);
	}

	public listDatabases(connectionUri: string): Thenable<data.ListDatabasesResult> {
		return Promise.resolve(undefined);
	}

	cancelConnection(connection: IConnectionProfile): Thenable<boolean> {
		return undefined;
	}

	cancelEditorConnection(owner: IConnectableInput): Thenable<boolean> {
		return undefined;
	}

	showDashboard(connection: ConnectionProfile): Promise<boolean> {
		return new Promise(() => true);
	}

	closeDashboard(uri: string): void {
	}

	changeDatabase(connectionUri: string, databaseName: string): Thenable<boolean> {
		return new Promise(() => true);
	}

	editGroup(group: ConnectionProfileGroup): Promise<void> {
		return Promise.resolve();
	}

	getProviderIdFromUri(ownerUri: string): string {
		return undefined;
	}
	hasRegisteredServers(): boolean {
		return true;
	}

	getCapabilities(providerName: string): data.DataProtocolServerCapabilities {
		return undefined;
	}

	canChangeConnectionConfig(profile: ConnectionProfile, newGroupID: string): boolean {
		return true;
	}

	doChangeLanguageFlavor(uri: string, language: string, flavor: string): void {

	}
	ensureDefaultLanguageFlavor(uri: string): void {

	}

	public getProviderNames(): string[] {
		return [];
	}

	connectIfNotConnected(connection: IConnectionProfile, purpose?: 'dashboard' | 'insights' | 'connection'): Promise<string> {
		return undefined;
	}

	rebuildIntelliSenseCache(uri: string): Thenable<void> {
		return undefined;
	}
}