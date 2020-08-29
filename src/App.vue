<template>
  <div id="app">
    <Header title="Egoditor GmbH" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.ts";

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
:root {
  --color-base: #f5f8fa;
  --color-white: #ffffff;
  --color-blue: #00bfff;
  --color-blue-dark: #1974d2;
  --color-gray: #707f86;
  --color-gray-darkest: #1B294B;
}

#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--color-base);
  text-align: center;
  font-weight: 400;
  min-height: 100vh;
}

h1 {
  font-weight: 900;
}

header {
  border-bottom: 2px solid #e6edf0;
  background: #fff;

  .navbar {
    box-shadow: 0 2px 5px 0 #d9dbe3;
  }
  .navbar-brand {
    display: flex;
    position: relative;

    img {
      height: 24px;
    }
    .text {
      color: var(--color-gray-darkest);
      font-weight: 700;
      font-size: 22px;
      line-height: 1;
      letter-spacing: -0.02em;
      padding-left: 0.5em;
      margin-right: 0.75em;
      position: relative;
    }
    .tag {
      font-size: 10px;
      line-height: 12px;
      text-transform: uppercase;
      color: var(--color-white);
      padding: 0 2px;
      font-weight: 700;
      position: absolute;
      background: var(--color-blue);
      border-radius: 4px;
      right: -24px;
      top: 0px;
    }
  }
  .nav-item {
    &-divider {
      position: relative;
      padding-right: 0.5rem;
      padding-left: 0.5rem;

      &:before {
        height: 16px;
        width: 2px;
        content: " ";
        top: calc(50% - 8px);
        left: calc(50% - 1px);
        background: #e6edf0;
        position: absolute;
      }
    }
    .nav-link {
      font-weight: bold;
      color: var(--color-blue-dark);
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;

      i.far {
        color: var(--color-blue);
        padding: 0 0.125em;
      }
    }
  }
  .nav-tabs {
    border-bottom: none;

    .nav-item {
      .nav-link {
        color: var(--color-gray);
        &:hover,
        &.active {
          background: transparent;
          border-color: transparent;
          border-bottom: 2px solid var(--color-blue);
        }
        &.active {
          color: var(--color-blue);
        }
      }
    }
  }
  .icon-g-arrow-left {
    display: flex;
    align-items: center;

    .fa-chevron-left {
      font-size: 12px;
    }
  }
  .box-title {
    h1 {
      padding-left: 0.75rem;
    }
    .form-control {
      width: auto;
      font-weight: 900;
      font-size: 2.5rem;
      height: calc(1.125em + .5rem + 2px);
      position: relative;
      top: -4px;
    }
    .text-action {
      color: var(--color-blue-dark);
      position: relative;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;

      i {
        color: var(--color-blue);
        font-size: 11px;
        position: absolute;
        right: -10px;
        top: 2px;
      }
    }
  }
}


.text-action {

}
</style>
