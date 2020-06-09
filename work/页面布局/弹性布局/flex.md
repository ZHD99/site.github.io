## 弹性布局 代码

```html

    <style>
        .parent{
            width: 500px;
            height: 200px;
            display: flex;
            flex-direction: row;/* 虽然默认的排列方式是水平的，但是为了区分起见，加上该属性 */
        }
        .child-one{
            background: lightblue;
            flex: 1;
        }
        .child-two{
            background: lightgray;
            flex: 2;
        }
        .child-three{
            background: lightgreen;
            flex: 3;
        }
    </style>
</head>
<div style="display:flex;flex-direction:row;justify-content:center;border: 1px solid #000;"><!---box-pack:center让.parent水平居中-->
    <div class="parent">
        <div class="child-one">1</div>
        <div class="child-two">2</div>
        <div class="child-three">3</div>
    </div>
</div>
```

## 展示

[website](http://site.dearmsdan.com/work/页面布局/响应式布局/flow.html ':include :type=iframe width=100% height=400px')

