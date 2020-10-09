<template>
    <div class="land-container">
    <body><img src="@/assets/img/oldman2.gif" /></body>
    <div class='land'></div>
   </div>
</template>


<style scoped>
img {
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
  
  /* Set up positioning */
  position: fixed;
  top:  9%;
  left: 0%;
  z-index: 3;
  
}

.land {
    background: #a0ae8b;
    height: 26%;
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    left: 0;
    z-index: 2;
}
.land:before {
  content: "";
  display: block;
  width: 75%;
  height: 25%;
  background: #80856e;
  position: absolute;
  top: -13%;
  right: 0;
  border-radius: 200% 10% 0 0;
}
.land:after {
  content: "";
  display: block;
  width: 75%;
  height: 25%;
  background: #a0ae8b;
  position: absolute;
  top: -7%;
  left: 0;
  border-radius: 10% 200% 0 0;
}

@media screen and (max-width: 750px) { /* Specific to this particular image */
  img {
    left: 50%;
    margin-left: -768px;   /* 50% */
  }
}
</style>

