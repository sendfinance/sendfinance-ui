<template>
  <header class="header">
    <section class="h-container">
      <!-- logo -->
      <section class="h-logo">
        <div class="send-logo" >
              <img src="@/assets/img/send-logo.png" alt="" />
            </div>
        <section class="h-logo-text">
        </section>
      </section>
      <!-- nav -->
      <nav class="h-nav">
        <router-link
          :to="{ name: 'Home' }"
          :class="$route.name === 'Home' && 'active'"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'Stake' }"
          :class="$route.name === 'Stake' && 'active'"
          >Stake</router-link
        >
        <router-link
          :to="{ name: 'Deliver' }"
          :class="$route.name === 'Deliver' && 'active'"
          >Deliver</router-link
        ><!--
        <router-link
          :to="{ name: 'Tokenomics' }"
          :class="$route.name === 'Tokenomics' && 'active'"
          >Tokenomics</router-link
        >
        -->
      </nav>
      <!-- connect button -->
      <section class="h-wallet">
        <!-- show account -->
        <template v-if="$auth.isAuthenticated && !wrongNetwork && web3.account">
          <el-button @click="showDialog">
            <div class="account">
              <Avatar :address="web3.account" size="16" />
              <span v-text="_shorten(web3.account)" />
            </div>
          </el-button>
        </template>
        <!-- network wrong -->
        <el-button v-if="web3.injectedLoaded && wrongNetwork" class="text-red">
          Wrong network
        </el-button>
        <!-- connect wallet -->
        <el-button
          v-if="showLogin || !web3.account"
          @click="showDialog"
          :loading="loading"
        >
          Connect wallet
        </el-button>
      </section>
    </section>
  </header>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  data() {
    return {
      accountDialogVisible: false,
      loading: false,
    }
  },
  computed: {
    wrongNetwork() {
      // console.log('wrongNetwork', this.config, this.web3)
      return this.config.chainId !== this.web3.injectedChainId
    },
    showLogin() {
      return (
        (!this.$auth.isAuthenticated && !this.web3.injectedLoaded) ||
        (!this.$auth.isAuthenticated && !this.wrongNetwork)
      )
    },
  },
  methods: {
    showDialog() {
      this.$store.commit('SET_LOGIN_MODAL_SHOW', true)
    }
  },
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  .h-container {
    display: flex;
    padding: 12px 24px 0;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .send-logo {
    img {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 1%;
      top:  1%;
    }
  }

  .h-logo {
    display: flex;
    min-width: 270px;
    align-items: center;
    span {
      font-size: 50px;
      width: 50px;
      height: 50px;
      display: inline-block;
      margin-right: 10px;
    }
  }
  .h-logo-text {
    h1 {
      margin: 0;
      padding: 0;

      display: block;
      font-size: 1.3em;
      font-weight: 700;
      letter-spacing: 0.3px;
      color: #001f3f;
    }
    p {
      color: #001f3f;
      margin: 0;
      padding: 0;
    }
  }

  .h-nav {
    display: flex;
    flex-wrap: wrap;
    a {
      color: #071F3D;
      margin: 0 15px;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      font-weight: 500;
      &.active {
        color: #618a22;
        font-size: 800;
      }
    }
  }
  .h-wallet {
    min-width: 270px;
    text-align: right;
    button {
      color: #001f3f;
      // box-shadow: #17191b 4px 4px 8px, rgb(20 28 37) -8px -8px 16px;
      background-color: rgba(154, 154, 154, 0.2);
      padding: 10px 24px;
      font-size: 0.875rem;
      min-width: 64px;
      box-sizing: border-box;
      // transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      //   box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      //   border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: "Open Sans", Roboto, Arial, sans-serif;
      font-weight: 500;
      line-height: 1.75;
      border-radius: 50px;
      border: 0;
      cursor: pointer;
      margin: 0;
      display: inline-flex;
      outline: 0;
      position: relative;
      align-items: center;
      user-select: none;
      vertical-align: middle;
      -moz-appearance: none;
      justify-content: center;
      text-decoration: none;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
}
  .send-logo {
    img {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 1%;
      top:  1%;
    }
  }

.account {
  display: flex;
  align-items: center;
  span {
    margin-left: 6px;
  }
}

.wallet-title {
  font-size: 22px;
  padding: 0;
  margin: 0 0 40px 0;
  text-align: center;
  color: #000;
  font-weight: bold;
}

.wallet-list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  cursor: pointer;
  border: 1px solid #071F3D;
  background-color: transparent;
  border-radius: 23px;
  padding: 0 24px;
  outline: none;
  line-height: 46px;
  height: 46px;

  &:hover {
    background-color: rgba(154, 154, 154, 0.2);
    // background-color: rgb(247, 242, 244);
  }

  span {
    color: #111111;
    font-size: 16px;
    font-weight: 400;
  }

  img {
    margin-right: 4px;
    height: 28px;
  }
}

/deep/ .wallet-dialog {
  .el-dialog__header {
    padding: 0;
  }
}

.sign-out {
  color: #ff3856;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
}
.wallet-account {
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.text-red {
  color: #ff3856;
}
@media screen and (max-width: 800px) {
  .header {
    .h-logo {
      min-width:inherit;
    }
    .h-wallet {
      min-width: inherit;
    }
  }
}
</style>
