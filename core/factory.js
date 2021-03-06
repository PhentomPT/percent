const Factory = {
  /**
   * get the percentage of a value
   * @param {number} value 
   * @param {number} percentage 
   * @returns number
   */
  getPercentageAsValue (value, percentage) {
    return this.getBaseValue(value, percentage) * (percentage / 100)
  },

  /**
   * Get base value without the percentage
   * @param {number} value 
   * @param {number} percentage 
   * @returns number
   */
  getBaseValue (value, percentage) {
    return value / (1 + (percentage / 100))
  }
}

export default Factory