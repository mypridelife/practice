// 1、完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
// 例如，输入 emoji.png，返回 .png。
const extname = filename => {
  /* TODO */
  let suffix = filename.split(".");

  if (suffix[0] && suffix[suffix.length - 1] && suffix.length - 1 != 0) {
    return "." + suffix[suffix.length - 1];
  } else {
    return '';
  }
  
};
console.log("正常", extname("234.jpg.bpm"));
console.log("无后缀", extname("234"));
console.log("无前缀", extname(".jpg"));
