<!--
  功能：支付宝转账订单录入
  作者：gyh
  时间：2019年12月24日 15:41:33
  版本：v1.0
-->
<template>
  <div class="p-alipay">
    <div class="m-form">
      <div class="input-item">
        <div class="m-text">订单号 :</div>
        <input placeholder="请输入订单号" v-model="baseForm.tradeNo" />
      </div>
      <div class="input-item">
        <div class="m-text">购买人学号 :</div>
        <input placeholder="请输入购买人学号" v-model="baseForm.studentNo" />
      </div>
      <div class="input-item">
        <div class="m-text">课程 :</div>
        <input
          placeholder="请选择课程"
          v-model="baseForm.prefix"
          @click="handleShowPopup"
        />
      </div>
      <div class="input-item">
        <div class="m-text">期数 :</div>
        <input placeholder="请输入课程期数" v-model="baseForm.term" />
      </div>
      <mt-button size="large" plain class="my-button" @click="handleToAdd"
        >添加</mt-button
      >
    </div>

    <mt-popup
      v-model="popupVisible"
      position="right"
      pop-transition="popup-fade"
    >
      <mt-picker
        class="my-picker"
        :slots="solts"
        :visibleItemCount="15"
        @change="handlePickerChange"
      ></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import base from '@/pages/base';
import api from '@/js/api';

export default {
  components: {},
  extends: base,
  props: {},
  data() {
    return {
      baseForm: {
        tradeNo: '',
        studentNo: '',
        prefix: '',
        term: ''
      },
      popupVisible: false,
      solts: [
        {
          values: [],
          defaultIndex: 0
        }
      ],
      allCourseList: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.handleQueryPrefix();
  },
  mounted() {},
  methods: {
    async handleQueryPrefix() {
      try {
        this.showLoading();
        let formData = new FormData();
        formData.append('openid', localStorage.user_token || '');
        const res = await api.post({
          url: '/binfen/wechat/listCourses',
          params: formData
        });
        this.allCourseList = res;

        this.allCourseList.forEach(element => {
          this.solts[0].values.push(element.title);
        });
      } catch (error) {
        this.showMessage(error.message);
      } finally {
        this.hideLoading();
      }
    },
    handleShowPopup() {
      this.popupVisible = true;
    },
    handlePickerChange(picker, values) {
      this.baseForm.prefix = values[0];
    },
    async handleToAdd() {
      const that = this;

      if (that.baseForm.tradeNo === '') {
        this.showMessage('请输入订单号');
        return;
      }
      if (that.baseForm.studentNo === '') {
        this.showMessage('请输入购买人学号');
        return;
      }
      if (that.baseForm.prefix === '') {
        this.showMessage('请选择课程');
        return;
      }
      if (that.baseForm.term === '') {
        this.showMessage('请输入期数');
        return;
      }

      let prefix;
      that.allCourseList.forEach(item => {
        if (item.title === that.baseForm.prefix) {
          console.log(item.prefix);
          prefix = item.prefix;
        }
      });
      console.log('that.baseForm', that.baseForm);

      try {
        this.showLoading();
        let formData = new FormData();
        formData.append('openid', localStorage.user_token || '');
        formData.append('prefix', prefix);
        formData.append('term', that.baseForm.term);
        formData.append('tradeNo', that.baseForm.tradeNo);
        formData.append('studentNo', that.baseForm.studentNo);
        const res = await api.post({
          url: '/binfen/order/insertOutAliPayOrderAndOpenCourse',
          params: formData
        });
        this.totalMap = res.totalMap;
        this.rtList = res.rtList;
      } catch (error) {
        this.showMessage(error.message);
      } finally {
        this.hideLoading();
      }
    }
  }
};
</script>

<style scoped lang="less" type="text/css">
.mint-popup {
  height: 100%;
  width: 80%;
}
.p-alipay {
  padding: 10px;
}
.m-form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .input-item {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    .m-text {
      margin-right: 6px;
      font-size: 15px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 50px;
    }
    input {
      flex: 1;
      height: 40px;
      border: none;
      border-bottom: 1px #eceff1 solid;
    }
  }
  .my-button {
    margin-top: 10px;
  }
}
</style>
