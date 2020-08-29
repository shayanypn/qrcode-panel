<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand sticky-top">
        <a class="navbar-brand" href="#">
          <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/egoditor/logo-icon-blue.svg">
          <span class="text">
            QR Code Generator
            <span class="tag">PRO</span>
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="nav-item nav-item-divider"></div>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="icon-g-arrow-left">
                  <i class="far fa-chevron-left"></i>
                  <i class="far fa-bars"></i>
                </span>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="far fa-bell"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="far fa-question-circle"></i>
              </a>
            </li>
            <div class="nav-item nav-item-divider"></div>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="far fa-user"></i>
                Account
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="row pt-4 pb-4">
          <div class="col text-left d-flex align-items-center">
            <h1>Egoditor GmbH</h1>
            <span class="pl-4 pr-1 d-flex align-self-center text-action">
              Edit
              <i class="far fa-pencil-alt"></i>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">Account</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">User Management</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">White Label</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">API Keys</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Billing</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
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


.text-action {

}
</style>
