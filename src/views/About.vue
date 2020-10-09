<template>
  <div class="about">
    <Footer class="footer"/>
    <div class="circle-btm">
    </div>
    <div class="circle-top">
    </div>
    <div class="circle-right">
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  position: absolute;
  bottom: 0;
}
.circle-btm {
  position: absolute;
  bottom: -400px;
  right: 100px;
  z-index: 1;
  overflow: hidden;
  .circle-l {
    width: 800px;
  }
  .circle-x {
    width: 50px;
    position: absolute;
    left: 150px;
  }
}
.circle-top {
  position: absolute;
  top: -200px;
  left: -100px;
  z-index: 1;
  img {
    width: 400px;
  }
}
.circle-right {
  position: absolute;
  top: 100px;
  right: 100px;
  img {
    width: 142px;
  }
}
.about {
  background: rgb(254, 200, 76);
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  .about-inner {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    padding-left: 200px;
    padding-bottom: 200px; 
    z-index: 10;
  }
  .slogan {
    width: 500px;
    margin-bottom: 20px;
  }
  .app-btn {
    padding: 20px 10px 10px;
    img {
      width: 200px;
    }
  }
  .arrow {
    width: 180px;
  }
  .triangle {
    width: 13px;
  }
  .about-btm {
    display: flex;
    flex-direction: row;
    align-items: center;
    .app-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 20px;
    }
    .token-wrap {
      display: flex;
      flex-direction: row;
      .token-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
      }
    }
  }
}
.slogan {
  font-family:'ArialRoundedMTBold', 'Arial Rounded MT Bold', sans-serif;
  font-size:8.676px;
}
</style>
