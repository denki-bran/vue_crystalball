<template>
	<div class="bits-wrapper">
		<div class="emblem"><span class="icon-information"></span></div>
	    <div class="frame">
  	    <div class="piece output content" style="padding-top: 0;">
          <router-view></router-view>
  	    </div>
  	    <div class="piece scanlines noclick"></div>
  	    <div class="piece glow noclick"></div>
	    </div>
	</div>
</template>

<script>
import '@/styles/layout/bitslayout.scss'
export default {
  name: 'bitsLayout'
}
</script>

<style lang="scss" scoped>
</style>
