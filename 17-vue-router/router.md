[toc]
### vue 路由的安装和使用
> 步骤一：安装router
>
> - npm install vue-router --save

> - 创建路由实例，并且传入路由映射配置
> - 在Vue实例中挂载创建的路由实例

### vue -router的使用步骤

- 创建路由组件

- 配置路由映射 ：组件和路径的映射关系

- 使用路由：通过<router-link> 和<router-view>

  

### router-link的 属性

> - to 属性: 配置的路由路径
> - tag : 可以指定<router-link>之后渲染程什么组件，比如渲染程<li> 而不是默认的<a>
> - replace不会保留history记录 指定replace 后退键不能返回上一个页面
> - active-class 选中class属性  一般不进行修改

