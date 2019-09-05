<template>
  <div class="informationCollection">
    <Form>
      <Row style="margin-top: 5px;">
        <Col span="8">
          <Card style="width:97%;margin-left:8px;text-align: center;">
            <p class="card-title">信息采集</p>
            <Form :model="inforCollec" :rules="ruleInfor" ref="inforCollec" :label-width="98" inline>
                  <FormItem label="姓名：" prop="name">
                    <Input type="text" v-model="inforCollec.name" style="width: 70px;"></Input>
                  </FormItem>
                  <FormItem label="年龄：" prop="age">
                    <Input type="text" v-model="inforCollec.age" style="width: 70px;"></Input>
                  </FormItem>
                  <FormItem label="性别：" prop="sex">
                    <Select v-model="inforCollec.sex" style="width: 70px;">
                      <Option value="男">男</Option>
                      <Option value="女">女</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="民族：" prop="nation">
                    <Select v-model="inforCollec.nation" style="width: 70px;">
                      <Option v-for="(item,index) in nationList" :key="index" :value="item.value">{{item.value}}</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="户籍地址：" prop="location" >
                    <Input type="textarea" v-model="inforCollec.location" style="width: 250px;"></Input>
                  </FormItem>
                  <FormItem label="身份证号：" prop="cardNum">
                    <Input type="text" v-model="inforCollec.cardNum" style="width: 250px;"></Input>
                  </FormItem>
                  <FormItem label="出生日期：" prop="birth">
                    <Date-picker style="width: 250px;" placeholder="选择日期"
                                  size="large"
                                  type="datetime"
                                  v-model="inforCollec.birth"

                                  format="yyyy-MM-dd"
                                  @on-change="inforCollec.birth=$event" >
                    </Date-picker>
                  </FormItem>
              <p style="color:#24A766 ">身份证阅读器已连接！</p>
            </Form>
            <Button size="large"  type="primary" class="btn-hover" id="read" @click="handleRead()">读取</Button>
          </Card>
        </Col>
        <Col span="8">
          <Card  style="width:97%;margin-left:6px;text-align: center;">
            <div style="text-align:center">
              <p class="card-title">照片采集</p>
              <Row>
                <Col span="13">
                  <div class="photo">
                    <img src="../../../public/images/noCamera.png" v-show="photoOk==''" style="padding: 56px 0;"  alt="">
                    <video muted ref="video" style="width: 100%;padding: 10px 0;" v-show="photoOk!==''"  autoplay></video>
                  </div>
                </Col>
                <Col span="11" style="text-align: center;margin:0 auto" >
                  <Button size="small" type="primary" id="reconnection" @click="handleReconnection()">重连</Button>
                  <Button size="small" type="primary" id="photo" @click="handleCatchCode()">拍照</Button>
                  <div class="photoed">
                    <canvas v-show="hasImage!==''" ref="canvas" style="width: 100%;height:100%;"></canvas>
                  </div>
                </Col>
              </Row>
              <Row style="border-bottom: 1px solid #eeeeee;margin: 7px 0;"></Row>
              <Row>
                <Col span="15" style="line-height: 54px;position: relative" >
                  <span>签名区</span>
                  <span class="signatureArea">
                  </span>
                  <Button size="large" type="primary" @click="handleSignature()" id="signature">签名</Button>
                </Col>
                <Col span="8" style="text-align: center">
                  <i class="iconfont icon-zhiwen" :class="{haveFingerprint:fingerprintGet==1}"></i>
                  <Button size="large" type="primary" @click="handleFingerprintGet()" id="fingerprintGet">指纹采集</Button>
                </Col>
              </Row>
              <Row style="border-bottom: 1px solid #eeeeee;margin-top: 5px;"></Row>
              <Button size="large" type="success" id="createBarcode" @click="handleCreateBarcode()">生成条码</Button>
            </div>
          </Card>
        </Col>
        <Col span="8">
          <Card  style="width:97%;margin-left:6px;text-align: center; ">
            <div style="text-align:center">
              <p class="card-title">资料完善</p>
              <Form :model="inforCollec" :rules="ruleInfor" ref="inforCollec" :label-width="97" inline>
                <FormItem label="本人电话：" prop="Iphone">
                  <Input type="text" v-model="inforCollec.Iphone" style="width: 110px;"></Input>
                </FormItem>
                <FormItem label="责任医生：" prop="dutyDoctor">
                  <Input type="text" v-model="inforCollec.dutyDoctor" style="width: 70px;"></Input>
                </FormItem>
                <FormItem label="现住地址：" prop="nowLocation">
                  <Input type="textarea" v-model="inforCollec.nowLocation" style="width: 290px;"></Input>
                </FormItem>
                <FormItem label="紧急联系人：" :label-width="102">
                  <Row>
                    <Col span="11">
                      <FormItem prop="emergencyName" >
                        <Input type="text" v-model="inforCollec.emergencyName" style="width: 80px;" placeholder="联系人姓名"></Input>
                      </FormItem>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                      <FormItem label="" prop="emergencyPhone">
                        <Input type="text" v-model="inforCollec.emergencyPhone" style="width: 110px;" placeholder="联系人电话"></Input>
                      </FormItem>
                    </Col>
                  </Row>
                </FormItem>
                <p style="font-size: 16px;text-align: left;line-height: 30px;border-top: 1px solid #eeeeee">选择类型</p>
                <div class="typeCheck">
                  <FormItem prop="PersonnelType">
                    <CheckboxGroup v-model="inforCollec.PersonnelType" size="large">
                      <Checkbox v-for="item,index in PersonnelTypeConfig" :key="index" :label="item"></Checkbox>
                    </CheckboxGroup>
                  </FormItem>
                </div>
          </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
import dataConfig from './config/dataConfig'
import { Read, Signature, FingerprintGet, CreateBarcode } from './informationCollecFun'
export default {
  name: 'InformationCollection',
  data () {
    return {...dataConfig}
  },
  created () {
    // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
    clearInterval(this.timer)
    this.timer = null
    this.setTimer()
  },
  mounted () {
    this.localUpload = false
    this.cameraUpload = true
    this.cameraInit()
  },
  beforeDestroy () {
    // clearInterval(timer)
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    // 定时器
    setTimer () {
      if (this.timer == null) {
        this.timer = setInterval(() => {
          this.handleRead()
        }, 1000)
      }
    },
    // 摄像头调起拍照
    handleCameraUpload () {
      alert('摄像头调起拍照')
    },
    handleRead () {
      console.log('读取')
    },
    // 重连方法
    handleReconnection () {
      this.cameraInit()
    },
    // 签名方法
    handleSignature () {
      Signature()
    },
    // 指纹采集
    handleFingerprintGet () {
      FingerprintGet()
    },
    // 生成条码
    handleCreateBarcode () {
      CreateBarcode()
    },
    // 相机初始化
    cameraInit () {
      this.video = this.$refs.video
      this.canvas = this.$refs.canvas
      this.handleUserCamera()
    },
    // 启动相机
    handleUserCamera () {
      const video = this.video
      this.photoOk = '1'
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          // 首先，如果有getUserMedia的话，就获得它
          var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia
          // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
          if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented'))
          }
          // 否则，为老的navigator.getUserMedia方法包裹一个Promise
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject)
          })
        }
      }
      navigator.mediaDevices.getUserMedia({ video: { width: 280, height: 280 }, audio: false })
        .then(stream => {
          video.srcObject = stream
          video.onloadedmetadata = function (e) {
            video.play()
          }
          this.mediaStream = stream
        })
        .catch(err => {
          console.log(err.name + ': ' + err.message)
        })
    },
    // 将拍的照片画下来
    handleCatchCode () {
      this.hasImage = '1'
      const video = this.video
      const canvas = this.canvas
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const context = canvas.getContext('2d')
      context.drawImage(video, 0, 0)
      this.handleCameraSave()
    },
    // 存储照片实现
    handleCameraSave () {
      // 获取浏览器页面的画布对象
      this.imageUrl = this.canvas.toDataURL('image/jpg')
      console.log(this.imageUrl)
      this.$emit('imageUrl', this.imageUrl)
      this.cameraUpload = false
    }
  }

}
</script>

<style scoped>
  .ivu-checkbox-wrapper {
    font-size:14px!important;
  }
  .ivu-checkbox-group {
    margin-top: 10px;
    font-size: 16px;
  }
  .ivu-card-head {
    padding: 10px 16px;
  }
  .card-title{
    font-size: 16px;
    padding-bottom:6px ;
    border-bottom:1px solid #eeeeee;
    margin-bottom:5px;

  }
  .informationCollection p{
    font-weight: 900;
  }
  #read{
    font-size: 16px;
    width:60%;
    height:30%;
    margin: 22px 0;
    border-radius:20px;
  }
  #photo{
    font-size: 16px;font-size: 16px;
    width:85px;
    height:30px;
    border-radius:19px;
    margin: 5px 20px;
  }
  #reconnection{
    font-size: 16px;
    margin: 5px 20px;
    width:85px;
    height:30px;
    border-radius:19px;
  }
  .photo{
    width:215px;
    height: 236px;
    border:1px solid rgba(6,169,237,1);
    border-radius:4px;
  }
  .photoed{
    margin-left: 26px;
    width:150px;
    height:158px;
    padding: 13px 0;
    border:1px solid rgba(6,169,237,1);
    border-radius:4px;
  }
  .signatureArea{
    display: inline-block;
    line-height: 42px;
    width:50px;
    height:40px;
    border:1px solid rgba(6,169,237,1);
    border-radius:4px;
    position: relative;
    top: 10px;
    margin: 0px 20px;
  }
  #signature{
    font-size: 16px;
    width:30%;
    height:20%;
    border-radius:19px;
    margin: 0 10px;
    position: relative;
    top: -2px;
  }
  .icon-zhiwen{
    font-size: 34px;
  }
  #fingerprintGet{
    font-size: 16px;
    width:70%;
    height:50%;
    border-radius:19px;
    position: relative;
    top: -10px;
    left: 18px;
  }
  #createBarcode{
    font-size: 16px;
    margin: 29px 0;
    width:50%;
    height:40%;
    border-radius:16px;
  }
  .typeCheck{
    width:100%;
    height:100%;
    background:rgba(233,245,255,1);
    border-radius:4px;
    text-align: left;
  }
  .haveFingerprint{
    color:#278AEF
  }
</style>
