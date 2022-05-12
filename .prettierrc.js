module.exports = {
  printWidth: 100, //单行长度
  tabWidth: 2, //缩进长度
  useTabs: false, //使用空格代替tab缩进
  semi: true, //句末使用分号
  singleQuote: true, //使用单引号
  endOfLine: 'crlf', // Windows
};

/** 
  tips：
    endOfLine: 'crlf' 因为eslint和prettier就这个问题上不一致互相冲突，我们这里统一使用Windows系统的.
    如果是有mac使用需求的请使用git config --global core.autocrlf false解决
 */
