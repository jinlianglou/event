var event = (function () {
  'use strict';

  function Event() {
    // 存所有事件名字的
    this.eventNames = {// "click":[],
    };
  }

  (function (p) {
    // 检查事件名
    function eventNameCheck(eventName) {
      if (typeof eventName !== 'string') {
        throw TypeError('事件名必须使用字符串类型');
      }
    } // 检查事件监听函数


    function handleCheck(handle) {
      if (typeof handle !== 'function') {
        throw TypeError('事件监听 handle必须是一个函数');
      }
    } // 添加事件


    function addHandle(eventName, handle) {
      if (!this.eventNames[eventName]) {
        this.eventNames[eventName] = [];
      }

      this.eventNames[eventName].push(handle);
    } // 监听事件


    p.on = function on(eventName, handle) {
      // eslint-disable-line
      eventNameCheck(eventName);
      handleCheck(handle);
      addHandle.call(this, eventName, handle);
    }; // 一次事件 事件执行一次即被删除


    p.once = function once(eventName, handle) {
      // eslint-disable-line
      eventNameCheck(eventName);
      handleCheck(handle);
      var that = this;

      var newHandle = function newHandle(data) {
        handle(data);
        that.remove(eventName, newHandle);
      };

      addHandle.call(this, eventName, newHandle);
    }; // 派发事事件


    p.emit = function emit(eventName, data) {
      // eslint-disable-line
      eventNameCheck(eventName); // 如果有eventName事件的兼听函数

      if (this.eventNames[eventName]) {
        var oldEventName = this.eventNames[eventName];
        oldEventName.forEach(function (handle) {
          handle(data);
        });
      }
    }; // 移除事件


    p.remove = function remove(eventName, handle) {
      // eslint-disable-line
      eventNameCheck(eventName);
      handleCheck(handle);
      var oldEventName = this.eventNames[eventName];

      if (oldEventName) {
        var index;
        this.eventNames[eventName].forEach(function (newHandle, newIndex) {
          if (newHandle === handle) {
            index = newIndex;
          }
        });

        if (index != undefined) {
          // eslint-disable-line
          oldEventName.splice(index, 1); // 移除一个事件回调函数后如果此事件已没有其它回调函数，则将当前事件清空，已节省内存

          if (!oldEventName.length) {
            this.eventNames[eventName] = null;
          }

          return true;
        }

        return false;
      }

      throw Error("\u6CA1\u6709\u76D1\u542C\u7684[".concat(eventName, "]\u4E8B\u4EF6"));
    }; // 移除所有事件


    p.removeAll = function removeAll(eventName) {
      // eslint-disable-line
      if (eventName) {
        eventNameCheck(eventName);
        var oldEventName = this.eventNames[eventName];

        if (oldEventName) {
          this.eventNames[eventName] = null;
          return true;
        }

        return false;
      } // 如果没有传事件名字，则清空所有事件


      this.eventNames = {};
      return true;
    };
  })(Event.prototype);

  var event = new Event();

  return event;

})();