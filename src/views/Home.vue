<template>
  <section class="home theme-dark">
    <Header></Header>
    <section class="container">
      <SEND />
      <div class="notice-container">
        <el-alert
          title="💌💌 The preferred token of your best courier 💌💌"
          type="warning"
          :closable="false">
        </el-alert>
      </div>
      <!-- <h3 class="h-title">
        💌 You have&nbsp;<span>{{ balance }}&nbsp;SEND</span> 💌
      </h3> -->
            <section class="h-total">
        <section class="h-total-block">
          <div class="p2">
            <p class="total-title">Your SEND  Balance</p>
            <div class="price">
              <b>{{ formatUnitBalance(balance) }}</b>
            </div>
          </div>
          <div class="line"></div>
          <div class="p1 total">
            <span>Are you rich enough ?</span>
          </div>
        </section>

        <section class="h-total-block">
          <div class="p2">
            <p class="total-title">Total SEND Supply</p>
            <div class="price">
              <b>1881.99</b>
            </div>
          </div>
          <div class="line"></div>
          <div class="p1 total">
            <span>low supply coin, right ?</span>
            <span></span>
          </div>
        </section>

      </section>
    </section>
    <Landtree />
    <Footer></Footer>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Landtree from '@/components/Landtree'
import contract from '@/contract.json'
import { formatUnitBalance } from '@/helpers/utils'

console.log('contract', contract)

export default {
  name: 'Home',
  components: {
    Landtree
  },
  data() {
    return {
      balance: '0.0000',
      pendingHarvest: '0.0000',
      loading: true
    }
  },
  computed: {
    ...mapState(['web3']),
        // get address to route params
  },
  watch: {
    'web3.account': {
      deep: true,
      handler(val) {
        if (val) {
          this.getDataFunc()
        }
      }
    }
  },
  mounted() {
    this.getDataFunc()
  },
  methods: {
    ...mapActions(['init', 'getBalance', 'balanceOf', 'earned']),

    formatUnit(unit) {
      return unit === 0 ? '0.0000' : unit 
    },

    formatUnitBalance(val) {
      return formatUnitBalance(val)
    },

    async harvestSENDSum() {
      let sum = 0
      for (const key in contract.pool) {
        let earnedRes = await this.earned({
          contract: contract.pool[key].address,
          abiName: contract.pool[key].symbol,
          account: this.web3.account,
        })
        sum += Number(earnedRes)
      }
      return sum
    },

    async getDataFunc() {
      // SEND balance
      if (!this.web3.account) return
      this.loading = true
      let balance = await this.balanceOf({
        contract: contract.harvest.SEND.address,
        abiName: 'ERC20',
        account: this.web3.account,
      })
      console.log('balance', balance)
      this.balance = this.formatUnit(balance)

      // harvest SEND
      let pendingHarvest = await this.harvestSENDSum()
      this.pendingHarvest = this.formatUnit(pendingHarvest)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  width: 100%;
  display: flex;
  max-width: 1100px;
  align-items: center;
  flex-direction: column;
  margin: 50px auto 3rem;
  z-index: 12;
}

.h-title {
  margin-top: 80px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  padding: 0;
}

.h-total {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-bottom: 2rem;
  justify-content: center;
  &-block {
    margin: 10px 15px;
    max-width: 100%;
    min-width: 360px;
    overflow: hidden;
    box-shadow: none;
    border-radius: 10px;
    color: #001f3f;
    border-radius: 20px;
    box-shadow:  5px 5px 10px #a9ccc8, 
             -5px -5px 10px #bbe2dd;
    // border: 1px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    .p1 {
      padding: 8px 16px;
    }
    .p2 {
      padding: 16px;
    }
    .total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      line-height: 20px;
    }
    .total-title {
      padding: 0;
      margin: 0;
      font-size: 16px;
      line-height: 22px;
    }
    .price {
      display: flex;
      flex-wrap: wrap;
      font-size: 20px;
      align-items: center;
      line-height: 48px;
      margin-top: 10px;
      b {
        font-size: 36px;
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background-color: #36166d;
    }
  }
}

.h-more {
  color: #001f3f;
  text-decoration: none;
  margin-top: 20px;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
}


.logo {
  width: 120px;
  height: 120px;
  margin-right: 10px;
  font-size: 120px;
  margin: 0 auto;
}
.introduction {
  font-family: KaushanScript-Regular;
  font-size: 40px;
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 60px;
}
.notice-container {
  margin: 60px 0 20px;
}
</style>

