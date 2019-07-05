<template>
  <div id="menuList">
    <div class="main-Header">
      <div class='imgClass'>
        <img :src="require('../../assets/FMS.png')" style="height:10%;width:95%;">
      </div>
      <!-- :title="roleName+' - '+userName" -->
      <van-panel :title="roleName+' - '+userName" style="font-weight: bold;">
      </van-panel>
    </div>
    <br>
    <div class="oftenMenu">
      <van-row>
        <van-col v-for="(btn,index) in zuijinArr" :key="index" span="6">
          <button id="testButton" @click="handleUrl(btn.url)" v-html="btn.title"></button>
        </van-col>
      </van-row>
    </div>
    <br>
    <div class="menu-list">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item v-show="isshow.shenqing" title="业 务 申 请" name="1" class="item-title" icon="records">
          <van-cell-group>
            <van-cell v-show="rightList.right1" title="项目立项申请" @click="handleUrl(urlList.url11)" is-link icon="add" />
            <van-cell v-show="rightList.right3" title="项目报销申请" @click="handleUrl(urlList.url12)" is-link icon="add" />
            <van-cell v-show="rightList.right2" title="中心报销申请" @click="handleUrl(urlList.url13)" is-link icon="add" />
          </van-cell-group>
        </van-collapse-item>
        <br>
        <van-collapse-item v-show="isshow.daiban" title="待 办 工 作" name="2" class="item-title" icon="pending-orders">
          <van-cell-group id="myCell">
            <van-cell v-show="rightList.right34" title='项目立项待办' :value="'('+infoList.projectNumber+')'" @click="handleUrl(urlList.url21)" is-link icon="description" />
            <van-cell v-show="rightList.right35" title='项目报销待办' :value="'('+infoList.projectCostNumber+')'" @click="handleUrl(urlList.url22)" is-link icon="description" />
            <van-cell v-show="rightList.right44" title='中心报销待办' :value="'('+infoList.centerNumber+')'" @click="handleUrl(urlList.url23)" is-link icon="description" />
            <van-cell v-show="rightList.right16" title='项目延期结项待办' :value="'('+infoList.projectDelayNumber+')'" @click="handleUrl(urlList.url24)" is-link icon="description" />
          </van-cell-group>
        </van-collapse-item>
        <br>

        <van-collapse-item v-show="isshow.jingban" title="经 办 工 作" name="3" class="item-title" icon="pending-deliver">
          <van-cell-group>
            <van-cell v-show="rightList.right45" title="项目立项经办" @click="handleUrl(urlList.url31)" is-link icon="underway" />
            <van-cell v-show="rightList.right47" title="项目报销经办" @click="handleUrl(urlList.url32)" is-link icon="underway" />
            <van-cell v-show="rightList.right55" title="项目结项经办" @click="handleUrl(urlList.url34)" is-link icon="underway" />
            <van-cell v-show="rightList.right46" title="中心报销经办" @click="handleUrl(urlList.url33)" is-link icon="underway" />
          </van-cell-group>
        </van-collapse-item>
        <br>
        <van-collapse-item v-show="isshow.zonghe" title="综 合 查 询" name="4" class="item-title" icon="search">
          <van-cell-group>
            <van-cell v-show="rightList.right30" title="综合统计查询" @click="handleUrl(urlList.url48)" is-link icon="browsing-history" />
            <van-cell v-show="rightList.right31" title="收支月表查询" @click="handleUrl(urlList.url44)" is-link icon="browsing-history" />
            <van-cell v-show="rightList.right32" title="经费到账月表" @click="handleUrl(urlList.url45)" is-link icon="browsing-history" />
            <van-cell v-show="rightList.right32" title="员工项目查询" @click="handleUrl(urlList.url46)" is-link icon="browsing-history" />
            <van-cell v-show="rightList.right33" title="中心项目查询" @click="handleUrl(urlList.url47)" is-link icon="browsing-history" />
            <van-cell v-show="rightList.right59" title="我的项目查询" @click="handleUrl(urlList.url41)" is-link icon="browsing-history" />
            <van-cell v-show="rightList.right56" title="个人工资查询" @click="handleUrl(urlList.url42)" is-link icon="browsing-history" />
            <van-cell v-show="rightList.right61" title="工资统计查询" @click="handleUrl(urlList.url43)" is-link icon="browsing-history" />
          </van-cell-group>
        </van-collapse-item>
        <br>
        <van-collapse-item v-show="isshow.zichan" title="资产管理" name="5" class="item-title">
          <!-- <van-cell-group>
                    <van-cell v-show="rightList.right1" title="项目立项申请" :to="urlList.url1" is-link/>
                    <van-cell v-show="rightList.right1" title="项目报销申请" :to="urlList.url1" is-link/>
                    <van-cell v-show="rightList.right1" title="中心报销申请" :to="urlList.url1" is-link/>
                </van-cell-group> -->
        </van-collapse-item>
      </van-collapse>
    </div>
    <br>
    <div v-if='role'>
      <p>未获取到权限，请您稍后再试！</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "gyh",

  data() {
    return {
      zuijinArr: [],
      oftenRightList: {
        oftenRight1: false,
        oftenRight2: false,
        oftenRight3: false,

        oftenRight4: false,
        oftenRight5: false,
        oftenRight6: false,
        oftenRight7: false,

        oftenRight8: false,
        oftenRight9: false,
        oftenRight10: false,
        oftenRight11: false,

        oftenRight12: false,
        oftenRight13: false,
        oftenRight14: false,
        oftenRight15: false,
        oftenRight16: false,
        oftenRight17: false,
        oftenRight18: false,
        oftenRight19: false
      },
      roleName: "",
      userName: "",
      and: "-",
      infoList: {},

      isshow: {
        shenqing: false,
        daiban: false,
        jingban: false,
        zonghe: false
      },
      role: false,
      rightList: {},
      urlList: {
        url11: "/projectEstablishApplication",
        url12: "/projectExpenseApplication",
        url13: "/centerExpenseApplication",

        url21: "/projectEstablishSchedule",
        url22: "/projectExpenseSchedule",
        url23: "/centerExpenseSchedule",
        url24: "/projectExtensionFinishSchedule",

        url31: "/projectEstablishHandling",
        url32: "/projectExpenseHandling",
        url33: "/centerExpenseHandling",
        url34: "/projectFinishHanding",

        url41: "/myprojectQuery",
        url42: "/personalSalaryQuery",
        url43: "/wageStatisticsQuery",
        url44: "/monthlyIncomeQuery",
        url45: "/fundsReceivedQuery",
        url46: "/employeeProjectQuery",
        url47: "/centerProjectQuery",
        url48: "/allStatisticsQuery"
      },
      activeName: 1 // 当前展开面板的name
    };
  },
  created() {
    this.getZuijin(); // 从localStorage取出
    this.handleCreate();
  },
  mounted() {},
  methods: {
    handleCreate() {
      var that = this;
      that
        .$http({
          url: "/FMS/dd/projectIndexServlet"
        })
        .then(function(res) {
          that.rightList = res.data.data;
          that.infoList = res.data.data.listNumber;
          that.userName = res.data.data.userName;
          that.roleName = res.data.data.roleName;
          // 申请
          if (
            that.rightList.right1 === true ||
            that.rightList.right2 === true ||
            that.rightList.right3 === true ||
            that.rightList.right4 === true ||
            that.rightList.right5 === true ||
            that.rightList.right6 === true ||
            that.rightList.right7 === true ||
            that.rightList.right8 === true ||
            that.rightList.right9 === true ||
            that.rightList.right10 === true
          ) {
            that.isshow.shenqing = true;
          }
          // 待办
          if (
            that.rightList.right34 === true ||
            that.rightList.right35 === true ||
            that.rightList.right36 === true ||
            that.rightList.right37 === true ||
            that.rightList.right38 === true ||
            that.rightList.right39 === true ||
            that.rightList.right40 === true ||
            that.rightList.right41 === true ||
            that.rightList.right42 === true ||
            that.rightList.right43 === true ||
            that.rightList.right44 === true
          ) {
            that.isshow.daiban = true;
          }
          // 经办
          if (
            that.rightList.right45 === true ||
            that.rightList.right46 === true ||
            that.rightList.right47 === true ||
            that.rightList.right48 === true ||
            that.rightList.right49 === true ||
            that.rightList.right50 === true ||
            that.rightList.right51 === true ||
            that.rightList.right52 === true ||
            that.rightList.right53 === true ||
            that.rightList.right54 === true ||
            that.rightList.right55 === true
          ) {
            that.isshow.jingban = true;
          }
          // 综合查询;
          if (
            that.rightList.right30 === true ||
            that.rightList.right31 === true ||
            that.rightList.right32 === true ||
            that.rightList.right33 === true ||
            that.rightList.right56 === true ||
            that.rightList.right58 === true ||
            that.rightList.right59 === true ||
            that.rightList.right61 === true
          ) {
            that.isshow.zonghe = true;
          }
          that.$nextTick(() => {
            if (
              that.isshow.shenqing === false &&
              that.isshow.daiban === false &&
              that.isshow.jingban === false &&
              that.isshow.zonghe === false
            ) {
              that.role = true;
            } else {
              that.role = false;
            }
          });
        })
        .catch(function(error) {
          console.log(error);
          that.role = true;
        });
    },
    handleUrl(url) {
      this.$router.push(url);
      var repeat = false;
      var title = "";
      if (this.zuijinArr.length === 4) {
        // 长度为4
        for (var i = 0; i < this.zuijinArr.length; i++) {
          if (url === this.zuijinArr[i].url) {
            repeat = true;
          }
        }
        if (!repeat) {
          // 无重复
          this.zuijinArr.pop(); // 删除第一个元素
          title = this.setTitle(url);
          this.zuijinArr.unshift({
            url,
            title
          }); // 存入data
        }
      } else {
        for (var j = 0; j < this.zuijinArr.length; j++) {
          if (url === this.zuijinArr[j].url) {
            repeat = true;
          }
        }
        if (!repeat) {
          title = this.setTitle(url);
          this.zuijinArr.unshift({
            url,
            title
          }); // 存入data
        }
      }
      this.setZuijin(); // 存入localStorage
    },
    getZuijin() {
      var zuijinStr = localStorage.getItem("zuijin");
      if (zuijinStr) {
        this.zuijinArr = JSON.parse(zuijinStr);
      }
      console.log(this.zuijinArr);
      console.log(localStorage.zuijin);
    },
    setZuijin() {
      localStorage.setItem("zuijin", JSON.stringify(this.zuijinArr));
    },
    setTitle(url) {
      var title;
      switch (url) {
        case this.urlList.url11:
          title = "立项<br>申请";
          break;
        case this.urlList.url12:
          title = "报销<br>申请";
          break;
        case this.urlList.url13:
          title = "中心<br>申请";
          break;

        case this.urlList.url21:
          title = "立项<br>待办";
          break;
        case this.urlList.url22:
          title = "报销<br>待办";
          break;
        case this.urlList.url23:
          title = "中心<br>待办";
          break;
        case this.urlList.url24:
          title = "延期<br>待办";
          break;

        case this.urlList.url31:
          title = "立项<br>经办";
          break;
        case this.urlList.url32:
          title = "报销<br>经办";
          break;
        case this.urlList.url34:
          title = "结项<br>经办";
          break;
        case this.urlList.url33:
          title = "中心<br>经办";
          break;

        case this.urlList.url48:
          title = "综合<br>查询";
          break;
        case this.urlList.url44:
          title = "收支<br>月表";
          break;
        case this.urlList.url45:
          title = "经费<br>月表";
          break;
        case this.urlList.url46:
          title = "员工<br>项目";
          break;
        case this.urlList.url47:
          title = "中心<br>项目";
          break;
        case this.urlList.url41:
          title = "我的<br>项目";
          break;
        case this.urlList.url42:
          title = "个人<br>工资";
          break;
        case this.urlList.url43:
          title = "工资<br>统计";
          break;
      }
      return title;
    }
  }
};
</script>

<style scoped>
#menuList {
  background-color: #fff;
}
.item-title >>> .van-collapse-item__title {
  font-weight: bold;
  width: 90%;
  margin: 0 auto;
  height: 80px;
  padding-top: 25px;
}
.imgClass {
  text-align: center;
}

.menu-list >>> .van-cell {
  width: 90%;
  margin: 0 auto;
}
/* .menu-list >>> .van-collapse-item__content {
  background-color: rgba(0, 0, 0, 0);
} */
/* .position {
  padding-left: 3.5%;
} */
/* #myCell >>> .van-cell__value {
  color: #ff0000;
} */
/* .oftenMenu {
  background: #fff;
} */
#testButton {
  color: rgb(0, 0, 0);
  font-size: 14px;
  margin-top: 10px;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
  border-width: 1px;
  border-color: rgb(0, 0, 0);
  border-style: solid;
  border-radius: 14px;
  background-color: rgb(255, 255, 255);
}
#testButton:hover {
  color: #ffffff;
  background-color: #dcdcdc;
  border-color: #000;
}
/* #myCell {
  color: yellow;
} */
</style>
  <div class="menu-list">
            <div class="menu" v-if="isshow.shenqing">
                <hr>
                <div class="span-title">
                    <span>
                        业 务 申 请
                    </span>
                </div>
                <div>
                    <van-row>
                        <van-col span="6" class="col" v-if="rightList.right1">
                            <a @click="handleUrl(urlList.url11)">
                                <icon name="lixiangshenqing"></icon>
                            </a>
                            <span style="font-size:10px">立项申请</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right3">
                            <a @click="handleUrl(urlList.url12)">
                                <icon name="baoxiaoshenqing"></icon>
                            </a>
                            <span style="font-size:10px">报销申请</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right2">
                            <a @click="handleUrl(urlList.url13)">
                                <icon name="zhongxinshenqing"></icon>
                            </a>
                            <span style="font-size:10px">中心申请</span>
                        </van-col>
                    </van-row>
                </div>
                <hr>
            </div>
            <div class="menu" v-if="isshow.daiban">
                <div class="span-title">
                    <span>
                        待 办 工 作
                    </span>
                </div>
                <div>
                    <van-row>
                        <van-col span="6" class="col" v-if="rightList.right34">
                            <a @click="handleUrl(urlList.url11)">
                                <icon name="lixiangdaiban"></icon>
                            </a>
                            <span style="font-size:10px">立项待办</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right35">
                            <a @click="handleUrl(urlList.url12)">
                                <icon name="baoxiaodaiban"></icon>
                            </a>
                            <span style="font-size:10px">报销待办</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right44">
                            <a @click="handleUrl(urlList.url13)">
                                <icon name="zhognxindaiban"></icon>
                            </a>
                            <span style="font-size:10px">中心待办</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right16">
                            <a @click="handleUrl(urlList.url13)">
                                <icon name="yanqidaiban"></icon>
                            </a>
                            <span style="font-size:10px">延期待办</span>
                        </van-col>
                    </van-row>
                </div>
                <hr>
            </div>
            <div class="menu" v-if="isshow.jingban">
                <div class="span-title">
                    <span>
                        经 办 工 作
                    </span>
                </div>
                <div>
                    <van-row>
                        <van-col span="6" class="col" v-if="rightList.right45">
                            <a @click="handleUrl(urlList.url31)">
                                <icon name="lixiangjingban"></icon>
                            </a>
                            <span style="font-size:10px">立项经办</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right47">
                            <a @click="handleUrl(urlList.url32)">
                                <icon name="baoxiaojingban"></icon>
                            </a>
                            <span style="font-size:10px">报销经办</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right55">
                            <a @click="handleUrl(urlList.url34)">
                                <icon name="jiexiangjingban"></icon>
                            </a>
                            <span style="font-size:10px">结项经办</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right46">
                            <a @click="handleUrl(urlList.url33)">
                                <icon name="zhongxinjingban"></icon>
                            </a>
                            <span style="font-size:10px">中心经办</span>
                        </van-col>
                    </van-row>
                </div>
                <hr>
            </div>
            <div class="menu" v-if="isshow.zonghe">
                <div class="span-title">
                    <span>
                        综 合 查 询
                    </span>
                </div>
                <div>
                    <van-row>
                        <van-col span="6" class="col" v-if="rightList.right30">
                            <a @click="handleUrl(urlList.url48)">
                                <icon name="zonghechaxun"></icon>
                            </a>
                            <span style="font-size:10px">综合查询</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right31">
                            <a @click="handleUrl(urlList.url44)">
                                <icon name="shouzhiyuebiao"></icon>
                            </a>
                            <span style="font-size:10px">收支月表</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right32">
                            <a @click="handleUrl(urlList.url45)">
                                <icon name="jingfeiyuebiao"></icon>
                            </a>
                            <span style="font-size:10px">经费月表</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right32">
                            <a @click="handleUrl(urlList.url46)">
                                <icon name="yuegongxiangmu"></icon>
                            </a>
                            <span style="font-size:10px">员工项目</span>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="6" class="col" v-if="rightList.right33">
                            <a @click="handleUrl(urlList.url47)">
                                <icon name="zhognxinxiangmu"></icon>
                            </a>
                            <span style="font-size:10px">中心项目</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right59">
                            <a @click="handleUrl(urlList.url41)">
                                <icon name="wodexiangmu"></icon>
                            </a>
                            <span style="font-size:10px">我的项目</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right56">
                            <a @click="handleUrl(urlList.url42)">
                                <icon name="gerengongzi"></icon>
                            </a>
                            <span style="font-size:10px">个人工资</span>
                        </van-col>
                        <van-col span="6" class="col" v-if="rightList.right61">
                            <a @click="handleUrl(urlList.url43)">
                                <icon name="gongzitongji"></icon>
                            </a>
                            <span style="font-size:10px">工资统计</span>
                        </van-col>
                    </van-row>
                </div>
            </div>
            <br>
            <br>
            <br>
        </div>
