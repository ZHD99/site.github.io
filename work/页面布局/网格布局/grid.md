## 网格布局  代码

```html
<div class="game-board">
  <div class="box">X</div>
  <div class="box">O</div>
  <div class="box">O</div>
  <div class="box">O</div>
  <div class="box">X</div>
  <div class="box">O</div>
  <div class="box">O</div>
  <div class="box">X</div>
  <div class="box">X</div>
</div>
<style>

.game-board
{
    width: 600px;
    height: 600px;
    margin: 0 auto;
  background-color: #34495e;
  color: #fff;
  border: 6px solid #2c3e50;
  border-radius: 10px;
    
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
}

.box
{
  border: 6px solid #2c3e50;
  border-radius: 2px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

## 展示

[website](http://site.dearmsdan.com/work/页面布局/网格布局/grid.html ':include :type=iframe width=100% height=400px')

