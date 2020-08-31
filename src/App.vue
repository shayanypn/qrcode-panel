<template>
  <div id="app">
    <AccountPage />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountPage from "@/containers/Account";

@Component({
  components: {
    AccountPage,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@mixin placeholder {
  ::-webkit-input-placeholder {@content}
  :-moz-placeholder           {@content}
  ::-moz-placeholder          {@content}
  :-ms-input-placeholder      {@content}  
}

:root {
  --color-base: #f5f8fa;
  --color-white: #ffffff;
  --color-blue-lightest: #afbfc7;
  --color-blue: #00bfff;
  --color-blue-dark: #294270;
  --color-blue-darkest: #1974d2;
  --color-gray-lightest: #e6edf0;
  --color-gray-light: #c7ced0;
  --color-gray: #707f86;
  --color-gray-dark: #6f7e85;
  --color-gray-darkest: #1B294B;
  --color-red: #d43636;

  --shadow-default: rgba(0, 0, 0, 0.125);
  --shadow-light: rgba(0, 0, 0, 0.05);
  --radius-default: 0.325em;
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
@media screen and (min-width: 1114px) {
  .col-mdlg {
    flex: 0 0 20%;
    max-width: 20%;
  }
}

.btn {
  box-shadow: none;
  outline: none !important;

  i {
    position: absolute;
    right: -5px;
    top: 7px;
  }
  &:focus {
    box-shadow: none;
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

.form-group {
  .formulate-input-errors {
    padding: 0 0 0 0.5rem;
    font-size: 0.8em;
    list-style: none;
    color: var(--color-red);
  }
  .form-control {
    box-shadow: none !important;
  }
}

.form-contact {
  position: relative;
  color: var(--color-gray-dark);
  padding: 0.5rem 0;
  @include placeholder {
    color: var(--color-gray-light);
  }
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
      &.nav-link-flag {
        padding-right: .125rem;
        padding-left: .125rem;
        opacity: 0.3;

        img {
          width: 30px;
          height: 18px;
          border-radius: 3px;
          position: relative;
          top: -2px;
        }
        &.active {
          opacity: 1;
        }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;

  &.bx-who-are {
    text-align: center;
    color: var(--color-blue);
    box-shadow: 0.25em 0.25em 0.75em var(--shadow-light);
    padding: 1rem 0.5rem;

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
    padding: 1.25rem .25rem;

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
      box-shadow: 0 0.25em 0.5em var(--shadow-default);
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
  &.bx-info {
    background: transparent;
    border: 1px solid var(--color-gray-lightest);
    padding: 1rem 0.25rem;
    margin-bottom: 0.5rem;

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
      opacity: .8;
      font-weight: 700;
      font-size: 1rem;
    }
    &.bx-info-complex {
      align-items: flex-start;

      .btn-group {
        position: absolute;
        right: 5px;
        top: 11px;
        width: 150px;

        .btn {
          color: var(--color-blue-darkest);
          font-weight: 700;
          text-align: right;
        }
      }
    }
  }
}

.form-contact {
  .form-group {
    position: relative;
    margin-bottom: 1.25rem;

    label {
      margin: 0;
      position: absolute;
      font-size: 0.725em;
      background: var(--color-white);
      padding: 0 0.5em;
      left: 6px;
      top: -8px;
      color: var(--color-gray-dark);
    }
  }
  .btn {
    background: #e1e4e9;
    border-color: #e1e4e9;
    color: var(--color-gray-dark);
    font-weight: bold;
  }
}

.loading {
  text-align: center;
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  z-index: 2;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: var(--radius-default);
  top: 0px;
  left: 0px;
}

.loading > div {
  width: 18px;
  height: 18px;
  background-color: #333;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.loading .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.loading .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>
