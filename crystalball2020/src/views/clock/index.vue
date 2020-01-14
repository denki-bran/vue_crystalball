<template>
	<div class="clock-container">
		<div class="header-content clearfix" id="_afPoint">
	        <p class="header"><span class="year">2020</span></p>
	        <p class="header">左翼大反攻</p>
	        <p class="header">已进行：</p>
		</div>
		<ul class="time-clock time-clock-dh">
			<li><span>{{days}}</span>days</li>
			<li><span>{{hours}}</span>Hours</li>
		</ul>
		<ul class="time-clock time-clock-ms">
			<li><span>{{mins}}</span>Minutes</li>
			<li><span>{{secs}}</span>Seconds</li>
		</ul>
	</div>
</template>
<script>
	export default {
	  name: 'leftwing-clock',
	  data(){
	  	return{
	  		days:'',
	  		hours:'',
	  		mins:'',
	  		secs:'',
	  		standardTime:new Date('Jan 1, 2020 00:00:00').getTime()
	  	}
	  },
	  created(){
	  	this.setClock();
	  },
	  methods:{
	  	setClock(){
	  		const that = this;
			const _second = 1000,
			_minute = _second * 60,
			_hour = _minute * 60,
			_day = _hour * 24;
			let x = setInterval(function() {
	        let now = new Date().getTime(),
				distance= now - that.standardTime;
				that.days =  that.padZero(Math.floor(distance / (_day)));
				that.hours = that.padZero(Math.floor((distance % (_day)) / (_hour)));
				that.mins = that.padZero(Math.floor((distance % (_hour)) / (_minute)));
				that.secs = that.padZero(Math.floor((distance % (_minute)) / (_second)));
			}, _second)
	  	},
	  	padZero(number){
			if (number < 10) {
			    return "0" + number;
			  }
			return number;
	  	}
	  }
	}
</script>

<style lang="scss" scoped>
	.clock-container{
		margin-top:1rem;
	}
	li {
      display: inline-block;
      font-size: 1.5em;
      list-style-type: none;
      padding: 1rem;
      text-transform: uppercase;
    }

    li span {
      display: block;
      font-size: 4.5rem;
    }

    .time-clock{
      padding-left:0!important;
    }
    @media only screen and (max-width: 365px){
      .output{
        padding: 3rem 1rem;
      }
      .content{
        li{
          padding:0.8rem;
        }
      }
    }

    @media only screen and (max-width: 768px){
      .content{
        h1{
          font-size: 7rem;
        }
        li{
          font-size: 2rem;
          span{
            font-size:2.6rem;
          }
        }
      }
    }


    @media only screen and (min-width: 769px){
      .header-content{
        line-height: 4rem;
        .header{
          float:left;
          font-size:4rem;
        .year{
          font-size:4rem;
        }
        }
      }
    }
    .header-content{
      .header{
        font-size:2rem;
        .year{
          font-size:2.3rem;
        }
      }
    }
    .clearfix{overflow:auto;_height:1%}
</style>