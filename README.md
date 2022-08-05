# event
基于浏览器端的自定义事件管理器

可以代替 因[WebAPI Event](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/Event)创建自定义事件浏览器不兼容的问题

### 通过script标签引入使用方式
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="dist/event.umd.js"></script>
  <title>Document</title>
</head>
<body>
  <script>
    // 监听事件
    event.on('testEvent',function(data){
      console.log(data);
    })

    // 触发事件
    event.emit('testEvent', '自义事触发的事件哦')
  </script>
</body>
</html>
```

### 通过 esm 导入
```js
import event from '@jinlianglou/dist/event.esm'


function App(){
  
}
```

### 通过 CommonJS 导入
```js
const event = require('@jinlianglou/dist/event.umd');

function App(){
  
}
```
## API

### 移除所有事件(慎用)
+ event.remove()

### 移除所有指定类型事件
+ event.remove('eventName')

### 移除指定事件(事件名称，事件句柄)
+ event.remove('eventName', eventHandle)

### 监听事件
+ evnet.on('eventName', function)

### 只执行一次的事件(事件被触发一次之后，便会remove)
+ evnet.once('eventName', function)