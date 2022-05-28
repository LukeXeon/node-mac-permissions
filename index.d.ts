// Type definitions for node-mac-permissions
// Project: node-mac-permissions

export function askForAccessibilityAccess(): undefined

export function askForCalendarAccess(): Promise<Omit<PermissionType, 'restricted'>>

export function askForCameraAccess(): Promise<PermissionType>

export function askForContactsAccess(): Promise<Omit<PermissionType, 'restricted'>>

export function askForFoldersAccess(): Promise<Omit<PermissionType, 'restricted'>>

export function askForFullDiskAccess(): undefined

export function askForInputMonitoringAccess(): Promise<Omit<PermissionType, 'restricted'>>

export function askForMicrophoneAccess(): Promise<PermissionType>

export function askForPhotosAccess(): Promise<PermissionType>

export function askForRemindersAccess(): Promise<Omit<PermissionType, 'restricted'>>

export function askForSpeechRecognitionAccess(): Promise<Omit<PermissionType, 'restricted'>>

export function askForScreenCaptureAccess(): undefined

export function getAuthStatus(authType: AuthType): PermissionType | 'not determined'

export function openURL(url: string)

export type AuthType =
    | 'accessibility'
    | 'bluetooth'
    | 'calendar'
    | 'camera'
    | 'contacts'
    | 'full-disk-access'
    | 'input-monitoring'
    | 'location'
    | 'microphone'
    | 'music-library'
    | 'photos'
    | 'reminders'
    | 'speech-recognition'
    | 'screen'

export type PermissionType = 'authorized' | 'denied' | 'restricted'
