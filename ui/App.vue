<template>
  <div id="percent-calculator">
    <div class="title">What's the percentage?</div>
    
    <div class="label">Value</div>
    <input v-model="value"/>

    <div class="label">Percentage %</div>
    <input v-model="percent"/>

    <div v-if="!error" class="results">
      <div>Base Value: {{ baseValue | currency }}</div>
      <div>Percent value: {{ percentValue | currency }}</div>
    </div>
    <div v-else class="results">
      Oopps... could not calculate.
    </div>

    <div class="footer">
      <div>Inspired by: <a href="http://littlebox.pt/percent/" target="_blank">http://littlebox.pt/percent/</a></div>
      <div>Built with: <a href="https://vuejs.org/" target="_blank">https://vuejs.org/</a></div>
    </div>
  </div>
</template>

<script>
import Factory from '../core/factory'

export default {
  data () {
    return {
      percent: 0,
      value: 0
    }
  },
  computed: {
    percentValue () {
      return Factory.getPercentageAsValue(this.value, this.percent)?.toFixed(2)
    },
    baseValue () {
      return Factory.getBaseValue(this.value, this.percent)?.toFixed(2)
    },
    error () {
      if (isNaN(this.percentValue) || isNaN(this.baseValue)) return true

      return false
    }
  },
  filters:  {
    currency(value) {
      return (value / 1).toFixed(2).replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>

<style lang="scss" scoped>
#percent-calculator {
  background: #3b3939;
  height: 100vh;
  width: 100vw;
  margin: -8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'IBM Plex Mono', monospace;
    color: white;
    font-size: 20px;
  }

  .title {
    margin-bottom: 80px;
    font-size: 35px;
  }

  .label {
    margin-top: 20px;
  }

  input {
    background: rgba(255, 255, 255, 0.8);
    color: #3b3939;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 20px;
  }

  .results {
    margin-top: 100px;
  }

  .footer {
    position: absolute;
    padding: 10px;
    bottom: 0;
    left: 0;
  }
}
</style>