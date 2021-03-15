# Log style
use css to make `console.log` colourful

## Use
``` html
<style title="log"> //if logTitle is true. It applies only to this tag
    #app{
      color: red;
      font-size: 15px;
    }
    .mid{
      color: burlywood;
    }
</style> 
<style>
    .main {
      color: blue;
      font-size: 40px;
    }
</style>
<script>
    var log = Logstyle(false)
    console.log('%capp%cmid', 'color: red;font-size: 15px;', 'color: burlywood;font-size: 30px;')
    log('%capp%cmid', '#app', '.mid')
    log('%capp', '#app', '.mid')
    log('%capp', '#app', '%css.mid')
    console.log('%capp', 'color: red;font-size: 15px;', 'color: burlywood;font-size: 30px;')
    log('%cmain%capp', '.main #app')
</script>
```

### Screenshoot  
![image](https://user-images.githubusercontent.com/55834428/110735324-8c78ce80-8264-11eb-9480-fab77b4d106f.png)
