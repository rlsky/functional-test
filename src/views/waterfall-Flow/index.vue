<template>
  <div class="container-water-fall" ref="wrap">
    <goBack></goBack>
    <waterfall
      :col="col"
      :width="itemWidth"
      :gutterWidth="gutterWidth"
      :data="data"
      @scroll="scroll"
    >
      <template>
        <div class="cell-item" v-for="(item, index) in data" :key="index">
          <img
            class="bigImg"
            v-if="item.img"
            :src="item.img"
            alt="加载错误"
            :style="{ height: item.height }"
          />
          <div class="item-body">
            <div class="item-desc">{{ item.title }}</div>
            <div class="item-footer">
              <div
                class="avatar"
                :style="{ backgroundImage: `url(${item.avatar})` }"
              ></div>
              <div class="name">{{ item.user }}</div>
              <div class="like" :class="item.liked ? 'active' : ''">
                <i></i>
                <div class="like-total">{{ item.liked }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>
<script>
import goBack from "components/goback";
import { waterfall } from "@/request/api";

export default {
  name: "waterfall-Flow",
  components: { goBack },
  data() {
    return {
      flag: 0,
      data: [
        {
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1841795178,886331890&fm=26&gp=0.jpg",
          title: "标题",
          avatar:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
          user: "华为荣耀x200",
          liked: "",
          height: "200px",
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2329215547,2317247593&fm=26&gp=0.jpg",
          title: "哦哦哦哦哦哦哦",
          avatar:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
          user: "鲨鱼小孩",
          liked: "",
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1841795178,886331890&fm=26&gp=0.jpg",
          title: "啥",
          avatar:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
          user: "华为荣耀x200",
          liked: "",
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2329215547,2317247593&fm=26&gp=0.jpg",
          title: "哦哦哦哦哦哦哦",
          avatar:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
          user: "鲨鱼小孩",
          liked: "",
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1841795178,886331890&fm=26&gp=0.jpg",
          title: "啥",
          avatar:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
          user: "华为荣耀x200",
          liked: "",
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2329215547,2317247593&fm=26&gp=0.jpg",
          title: "哦哦哦哦哦哦哦",
          avatar:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
          user: "鲨鱼小孩",
          liked: "",
        },
      ],
      col: 2,
    };
  },
  created() {},
  mounted() {
    this.getwaterfallInfo();
  },
  methods: {
    scroll(scrollData) {
      let zongGaoDu = scrollData.scrollHeight + scrollData.scrollTop;
      this.flag++;
      if (this.flag > 1) {
        return;
      }
      if (this.$refs.wrap.clientHeight - 10 <= zongGaoDu) {
        this.data = this.data.concat([
          {
            img:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1841795178,886331890&fm=26&gp=0.jpg",
            title: "啥",
            avatar:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
            user: "华为荣耀x200",
            liked: "",
          },
          {
            img:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2329215547,2317247593&fm=26&gp=0.jpg",
            title: "哦哦哦哦哦哦哦",
            avatar:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
            user: "鲨鱼小孩",
            liked: "",
          },
          {
            img:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1841795178,886331890&fm=26&gp=0.jpg",
            title: "啥",
            avatar:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
            user: "华为荣耀x200",
            liked: "",
          },
          {
            img:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2329215547,2317247593&fm=26&gp=0.jpg",
            title: "哦哦哦哦哦哦哦",
            avatar:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
            user: "鲨鱼小孩",
            liked: "",
          },
          {
            img:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1841795178,886331890&fm=26&gp=0.jpg",
            title: "啥",
            avatar:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
            user: "华为荣耀x200",
            liked: "",
          },
          {
            img:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2329215547,2317247593&fm=26&gp=0.jpg",
            title: "哦哦哦哦哦哦哦",
            avatar:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
            user: "鲨鱼小孩",
            liked: "",
          },
        ]);
      }
      this.flag = 0;
    },
    getwaterfallInfo() {
      waterfall().then((res) => {
        console.log(res);
      });
    },
  },
  computed: {
    itemWidth() {
      return document.documentElement.clientWidth / 2 - 5;
    },
    gutterWidth() {
      return 10;
    },
  },
};
</script>
<style lang="scss" scoped>
.container-water-fall {
  background: gray;
  .vue-waterfall {
    margin-top: 38px;
  }
  .cell-item {
    background: cornsilk;
    margin-bottom: 10px;
    border-radius: 10px;
    .bigImg {
      width: 182px;
      border-radius: 10px;
    }
    .item-body {
      .item-desc {
        font-size: 18px;
        margin-left: 10px;
      }
      .item-footer {
        margin-left: 10px;
        display: flex;
        padding: 10px 0;
        .avatar {
          height: 28px;
          width: 28px;
          border-radius: 50%;
          font-size: 12px;
          background-size: 100% 100%;
          vertical-align: middle;
          margin-right: 10px;
        }
        .name {
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
