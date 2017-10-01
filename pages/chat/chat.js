// chat.js
Page({
  data: {
    scrollTop:1050,
    inputValue:'',
    message:[
      {
        boxType: 'box-left',
        msgTextType: 'msg-text-left',
        msgStatus: 'msg-status-left',
        msgText: 'Hello,What can I do for you :)'
      }
    ]
  },
  onLoad: function () {
    var that = this;
    var message = that.data.message;
    //初始化接口请求保留部分
    // // var scrollTop = that.data.scrollTop;
    // setTimeout(function(){
    //   console.log(scrollTop)   
    //   that.setData({
    //     message: message,
    //     scrollTop: scrollTop
    //   });
    // },100);
  },
  //向页面中添加一个会话框
  addMessage: function(text){
    var message = this.data.message;
    message.push(text);
    return message;
  },
  //获取用户输入字段，双线数据绑定
  getInputValue: function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  //用户点击提交按钮，发送ajax到服务器，完成数据通讯
  submitMessage: function(){
    var that = this;
    var scrollTop = that.data.scrollTop + 40;  
    //展示数据
    var message = this.addMessage({
      boxType: 'box-right',
      msgTextType: 'msg-text-right',
      msgStatus: 'msg-status-right',
      msgText: this.data.inputValue,
      loading: '.msg-status-loading'
    })
    this.setData({
      inputValue: '',
      message:message,
      scrollTop: scrollTop        
    });
    // 向服务器发送数据
    //测试mock数据
    setTimeout(function () {
      var JSON = {code:'200',data:{text:'123'}};
      if(JSON.code == '200'){
        that.data.message[that.data.message.length - 1].loading = '';
        var message = that.addMessage({
          boxType: 'box-left',
          msgTextType: 'msg-text-left',
          msgStatus: 'msg-status-left',
          msgText: JSON.data.text
        });
        that.setData({
          message:message,
          scrollTop: scrollTop                  
        })
      }
    }, 1000);
  }
})