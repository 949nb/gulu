# gule-demo

+ 这是一个基于vue的UI框架

> 这里的单元测试还没成功

* 本项目属于开发阶段 *

项目重新设置了css样式，使用了新的和模型并且重置了边距：
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

+ 个人练习项目，使用TDD(测试驱动开发，代码编辑器`VS Code`, 一般深夜提交代码 嘻嘻。🥰



> TODO ::: col组件加上响应式 // 10.6
> TODO ::: 添加自动化测试 // 10.6  first


##### 现在Layout有两种用法： 
第一种是常用的上中下布局: 
```html
<g-layout>
  <g-header></g-header>
  <g-content></g-content>
  <g-footer></g-footer>
</g-layout>
```
第二种是带有侧边栏的上， 中间左边是侧边栏，右边是content的布局:
```html
<g-layout>
  <g-header></g-header>
  <g-layout>
    <!-- 这个是sider在左边 放到下面就是sider在右边 -->
    <g-sider></g-sider>
    <g-content></g-content>
  </g-layout>
  <g-footer></g-footer>
</g-layout>
```