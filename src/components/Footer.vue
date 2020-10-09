<template>
  <footer class="footer">
    <div class="footer-link">
      <a
        href="https://etherscan.io/token/0x14c4d8e57751e083bcd1edcca5b435720166f5e9"
        target="_blank"
        rel="noopener noreferrer"
        >SEND Contract</a
      ><a
        href="https://app.uniswap.org/#/swap?outputCurrency=0x14c4d8e57751e083bcd1edcca5b435720166f5e9&theme=dark"
        target="_blank"
        rel="noopener noreferrer"
        >SEND-ETH Uniswap</a
      >

    </div>
    <div class="footer-icon">
      <a
        href="https://medium.com/@sendfinance"
        target="_blank"
        rel="noopener noreferrer"
        title="Medium"
        ><img src="@/assets/svg/medium.svg" alt=""/></a
      ><a
        href="https://twitter.com/Sendfinance"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        ><img src="@/assets/svg/twitter.svg" alt=""/></a
      ><a
        href="https://discord.gg/Qc9Xn9h"
        target="_blank"
        rel="noopener noreferrer"
        title="Discord"
        ><img src="@/assets/svg/discord.svg" alt=""/></a
      ><a
        href="https://t.me/sendfinancetg"
        target="_blank"
        rel="noopener noreferrer"
        title="Telegram"
        ><img src="@/assets/svg/telegram.svg" alt=""/></a
      >
      <a
        href="https://github.com/sendfinance"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        ><img src="@/assets/svg/github.svg" alt=""/></a
      >
    </div>
  </footer>
</template>

<style lang="less" scoped>
.footer {
  width: 100%;
  // padding: 2rem 0 0.5rem;
  z-index: 10;
  .footer-link {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    margin: 5px 15px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #001f3f;
    }
    img {
      height: 24px;
      transition: all 0.2s;
    }
  }
  .footer-icon {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 16px;
  }
}
</style>
