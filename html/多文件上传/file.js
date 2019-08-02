var Main = {
  data() {
    return {
      dialog: false,
      loaded: 0,
      total: 0,
      progress: 0,
      fileList: []
    }
  },
  methods: {
    submit() {
      const files = this.$refs.upload.uploadFiles
      if (files && files.length) {
        const fd = new FormData()
        files.forEach(item => {
          fd.append('files', item.raw, item.name)
        })
        this.dialog = true
        this.progress = this.loaded = this.total = 0
        axios({
          url: '你的接口地址',
          method: 'post',
          onUploadProgress: pe => {
            this.progress = Number.parseInt((pe.loaded / pe.total) * 100)
            this.loaded = pe.loaded
            this.total = pe.total
          },
          data: fd,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(res => {
            this.$message.success('上传成功')
            this.$refs.upload.clearFiles()
            this.dialog = false
          })
          .catch(_ => {
            this.$message.error('上传失败')
            this.$refs.upload.clearFiles()
            this.dialog = false
          })
      } else {
        this.$message.warning('至少选择一个文件')
      }
    }
  }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')
