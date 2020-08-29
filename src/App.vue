<template>
  <div id="app">
    <Header title="Egoditor GmbH" />
    <Account />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header";
import Account from "@/containers/Account";

@Component({
  components: {
    Header,
    Account,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
:root {
  --color-base: #f5f8fa;
  --color-white: #ffffff;
  --color-blue-lightest: #afbfc7;
  --color-blue: #00bfff;
  --color-blue-dark: #294270;
  --color-blue-darkest: #1974d2;
  --color-gray-light: #c7ced0;
  --color-gray: #707f86;
  --color-gray-darkest: #1B294B;

  --shadow-default: rgba(0,0,0,.125);
  --radius-default: 0.5em;
}

#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--color-base);
  font-weight: 400;
  min-height: 100vh;
}

h1, h2, h3, h4 {
  font-weight: 900;
}

i.far {
  font-style: Regular;
}

/**
 *
 * Override bootsrap
 * 
*/
@media (min-width: 114px) {
  .col-mdlg {
    flex: 0 0 20%;
    max-width: 20%;
  }
}

.btn {
  box-shadow: none !important;
  outline: none !important;

  i {
    position: absolute;
    right: -5px;
    top: 7px;
  }
}

.btn-xs {
  position: relative;
  font-size: 12px;

  i {
    font-size: 11px;
  }
}

.card {
  box-shadow: 0 0 0.25em var(--shadow-default);
  border: none;
}


/**
 *
 * Custom Styles
 * 
*/
header {
  border-bottom: 2px solid #e6edf0;
  background: #fff;

  .navbar {
    box-shadow: 0 2px 5px 0 #d9dbe3;
    background: var(--color-white);
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
      color: var(--color-blue-darkest);
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
    .btn {
      color: var(--color-blue-darkest);
      font-weight: 700;

      i {
        color: var(--color-blue);
      }
    }
  }
}

.bx {
  background: var(--color-white);
  border-radius: var(--radius-default);
  padding: 1rem;

  &.bx-who-are {
    text-align: center;
    color: var(--color-blue);
    box-shadow: 0.25em 0.25em 0.75em var(--shadow-default);
    margin-bottom: 1rem;

    i {
      color: var(--color-blue);
      font-size: 1.5em;
      padding: 0.5rem 0;
    }
    p {
      text-transform: uppercase;
      font-weight: 700;
      color: var(--color-blue-darkest);
      margin: 0px;
      font-size: 0.8rem;
    }
  }
  &.bx-statics {
    background: transparent;
    border: 1px solid var(--color-gray-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    position: relative;

    p {
      color: var(--color-blue-lightest);
      opacity: .7;
      text-transform: uppercase;
      font-weight: 700;
      font-size: .8rem;
      margin-bottom: 0.5rem;
    }
    strong {
      color: var(--color-blue-dark);
      font-weight: 700;
      font-size: 1.5rem;
    }
    em {
      color: var(--color-blue-lightest);
      font-size: 1rem;
    }
    span {
      color: var(--color-gray-light);
      transform: rotate(45deg);
      line-height: 0.5;
    }
    .btn {
      background: var(--color-blue);
      border-color: var(--color-blue);
      color: var(--color-white);
      font-weight: 700;
      font-size: .8rem;
      border: none;
      padding: .3rem .5rem;
      text-transform: uppercase;
      border-radius: 1rem;
      position: absolute;
      bottom: -14px;
    }
  }
}

</style>