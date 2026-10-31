export interface InstallTranslations {
  stageStates: Record<string, string>
  oneTimeTitle: string
  unsupportedDesc: (platform: string) => string
  installCommand: string
  copyCommand: string
  viewDocs: string
  installTo: string
  retryAfterRun: string
  setupChoiceTitle: string
  setupChoiceDesc: string
  setupChoiceDescLocal: string
  connectExistingTitle: string
  connectExistingShort: string
  connectExistingDesc: string
  installLocalTitle: string
  installLocalDesc: string
  useLocalTitle: string
  useLocalDesc: string
  bundledLocalDesc: string
  localStartUnavailable: string
  remoteSetupTitle: string
  remoteSetupDesc: string
  remoteUrlTitle: string
  remoteUrlDesc: string
  remoteUrlPlaceholder: string
  probing: string
  probeError: string
  probeErrorDetails: string
  identityProvider: string
  authTitle: string
  authNeedsOauth: (provider: string) => string
  authSignedIn: string
  connected: string
  signIn: string
  signInWith: (provider: string) => string
  enterUrlFirst: string
  signInIncomplete: string
  tokenTitle: string
  tokenDesc: string
  pasteSessionToken: string
  incompleteSignInTest: string
  incompleteTokenTest: string
  testConnection: string
  testSucceeded: (baseUrl: string, version?: string) => string
  applyRemote: string
  backToSetup: string
  failedTitle: string
  settingUpTitle: string
  finishingTitle: string
  failedDesc: string
  activeDesc: string
  progress: (completed: number, total: number) => string
  currentStage: (stage: string) => string
  fetchingManifest: string
  error: string
  hideOutput: string
  showOutput: string
  lines: (count: number) => string
  noOutput: string
  cancelling: string
  cancelInstall: string
  transcriptSaved: string
  copiedOutput: string
  copyOutput: string
  reloadRetry: string
  openLogs: string
  stageLabels: Record<string, string>
  stoppedDuring: (stage: string) => string
  stoppedBeforeFinish: string
  technicalDetails: string
}

export interface QuickEntryTranslations {
  title: string
  ask: string
  disconnected: string
  sendTo: string
  targetSession: string
  currentChat: string
  newSession: string
  deliveryUnconfirmed: string
  deliveryHint: string
}
