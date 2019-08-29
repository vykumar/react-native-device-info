/**
 * Empty default export functions.
 */

module.exports = {
  uniqueId: '',
  instanceId: '',
  serialNumber: '',
  getIpAddress: () => new Promise((resolve, reject) => resolve('')),
  getMacAddress: () => new Promise((resolve, reject) => resolve('')),
  deviceId: '',
  systemManufacturer: '',
  model: '',
  brand: '',
  systemName: '',
  systemVersion: '',
  buildId: '',
  apiLevel: 0,
  bundleId: '',
  appName: '',
  buildNumber: 0,
  appVersion: 0,
  deviceName: '',
  userAgent: '',
  fontScale: 0,
  isEmulator: false,
  isTablet: false,
  isPinOrFingerprintSet: callback => callback && callback(false),
  firstInstallTime: 0,
  installReferrer: '',
  lastUpdateTime: 0,
  phoneNumber: '',
  carrier: '',
  totalMemory: 0,
  maxMemory: 0,
  totalDiskCapacity: 0,
  freeDiskStorage: 0,
  getBatteryLevel: () => Promise.resolve(0),
  isLandscape: false,
  deviceType: 'Unknown',
  getPowerState: () => Promise.resolve({}),
  hasSystemFeature: () => Promise.resolve(false),
  getSystemAvailableFeatures: () => Promise.resolve([]),
  getCameraPresence: () => Promise.resolve(false),
  isLocationEnabled: () => Promise.resolve(false),
  getAvailableLocationProviders: () => Promise.resolve({}),
};
