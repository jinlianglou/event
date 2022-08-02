# event
基于浏览器端的自定义事件管理器

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
import event from '@jinlinglou/dist/event.esm'


function App(){
  
}
```

### 通过 CommonJS 导入
```js
const event = require('@jinlinglou/dist/event.umd');

function App(){
  
}
