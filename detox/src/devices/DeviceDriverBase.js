const _ = require('lodash');
const fs = require('fs');
const path = require('path');

class DeviceDriverBase {
  constructor(client) {
    this.client = client;
  }

  async acquireFreeDevice(name) {
    return await Promise.resolve('');
  }

  async boot() {
    return await Promise.resolve('');
  }

  async launch() {
    return await Promise.resolve('');
  }

  async sendToHome() {
    return await Promise.resolve('');
  }

  async relaunchApp() {
    return await Promise.resolve('');
  }

  async installApp() {
    return await Promise.resolve('');
  }

  async uninstallApp() {
    return await Promise.resolve('');
  }

  async openURL(params) {
    return await Promise.resolve('');
  }

  async setLocation(lat, lon) {
    return await Promise.resolve('');
  }

  async waitUntilReady() {
    return await this.client.waitUntilReady();
  }

  async reloadReactNative() {
    return await this.client.reloadReactNative();
  }

  async sendUserNotification(params) {
    await this.client.sendUserNotification(params);
  }

  createPushNotificationJson(notification) {

  }

  async setPermissions(deviceId, bundleId, permissions) {
    return await Promise.resolve('');
  }

  async terminate(deviceId, bundleId) {
    return await Promise.resolve('');
  }

  async shutdown() {
    return await Promise.resolve('');
  }

  async setOrientation(deviceId, orientation) {
    return await Promise.resolve('');
  }

  async setURLBlacklist(urlList) {
    return await Promise.resolve('');
  }

  async enableSynchronization() {
    return await Promise.resolve('');
  }

  async disableSynchronization() {
    return await Promise.resolve('');
  }

  defaultLaunchArgsPrefix() {
    return '';
  }

  ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }

    this.ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
    return true;
  }

  getBundleIdFromBinary(appPath) {

  }

  validateDeviceConfig(deviceConfig) {

  }

  getPlatform() {

  }

  getLogsPaths(deviceId) {
    return {
      stdout: undefined,
      stderr: undefined
    };
  }
}

module.exports = DeviceDriverBase;
