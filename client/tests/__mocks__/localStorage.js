/**
 * LocalStorageMock serve as a mock of the localStorage for testing in Jest
 * @class LocalStorageMock
 */
export default class LocalStorage {
  /**
   * @description creates a new instance of this class
   *
   * @constructor
   *
   * @memberof LocalStorageMock
   */
  constructor() {
    /** @type { Object } */
    this.store = {};
  }

  /**
   * @description clears the store
   *
   * @method
   *
   * @memberof LocalStorageMock
   *
   * @returns { * } null
   */
  clear() {
    this.store = {};
  }

  /**
   * @description returns the value stored on the supplied key
   *
   * @method
   *
   * @memberof LocalStorageMock
   *
   * @param { string } key The item's key to retrieve from
   *
   * @returns { * } null
   */
  getItem(key) {
    return this.store[key] || null;
  }

  /**
   * @description sets the store with the supplied key
   *
   * @method
   *
   * @memberof LocalStorageMock
   *
   * @param { Object } key The key to store
   * @param { string } value The value to set the key to
   *
   * @returns { * } null
   */
  setItem(key, value) {
    this.store[key] = value;
  }

  /**
   * @description removes the item from the store corresponding to the key
   *
   * @method
   *
   * @memberof LocalStorageMock
   *
   * @param { Object } key The key to remove
   *
   * @returns { * } null
   */
  removeItem(key) {
    delete this.store[key];
  }
}
