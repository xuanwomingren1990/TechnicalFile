### 弹框组件
下面的对话框组件，相对于 `body` 元素左右居中。
因为 `element-ui` 的弹框组件，`.el-dialog__wrapper` 盒子的 `position` 属性为 `filexed`，因此其位置设置是相对于`body`元素的。
```scss
.el-dialog__wrapper {
    position: fixed;
    top: 39px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
}
```
