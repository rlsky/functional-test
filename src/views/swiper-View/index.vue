<template>
  <div id="swiperView">
    <div class="logistics-Tracking">
      <div class="one-Info" v-for="(item, index) in tracesData" :key="index">
        <div class="drop" :class="index === 0 ? 'drop-First' : ''"></div>
        <div class="drop-Wrap" v-show="index === 0"></div>
        <div class="text-Time">
          <p class="text">
            {{ item.context }}
          </p>
          <span class="time">{{ item.ftime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'swiperView',
  data() {
    return {
      tracesData: [
        {
          context: '哈哈哈',
          ftime:
            '我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去我去'
        },
        {
          context: '哈哈哈',
          ftime: '我去'
        },
        {
          context: '哈哈哈',
          ftime: '我去'
        },
        {
          context: '哈哈哈',
          ftime: '我去'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.logistics-Tracking {
  padding: 52px 32px 32px 58px;
  background: rgba(255, 255, 255, 1);
  .one-Info {
    position: relative;
    border-left: 2px solid rgba(225, 226, 233, 1);
    padding: 0 0 56px 32px;
    &:last-child {
      border: none;
      padding-bottom: 0;
    }
    .drop {
      height: 10px;
      width: 10px;
      background: rgba(225, 226, 233, 1);
      position: absolute;
      left: -6px;
      top: 0;
      border-radius: 50%;
      z-index: 9;
    }
    .drop-First {
      background: rgba(255, 60, 60, 1);
    }
    .drop-Wrap {
      position: absolute;
      left: -11px;
      top: -4.5px;
      width: 20px;
      height: 20px;
      background: rgba(253, 161, 155, 1);
      opacity: 0.3;
      border-radius: 50%;
    }
    .text-Time {
      .text {
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        transform: translateY(-18px);
        color: rgba(51, 51, 51, 1);
        word-break: break-all;
        .name-PhoneNum {
          color: #ff3c3c;
        }
      }
      .time {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
}
</style>
