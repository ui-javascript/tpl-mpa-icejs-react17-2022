# README

React多页面

# 常见问题 @faq

- 依赖安装时间长 @todo
- entry 为 object 且为 vite模式 时启动报错 @todo
    - https://github.com/alibaba/ice/issues/5237

```
不要启动vite模式
估计暂时不支持
```


- gitpod中报错, Error: spawn xdg-open ENOENT 无法对外暴露地址 @fix

```
sudo apt-get update
sudo apt-get -y install xdg-utils

在.gitpod.yml初始化脚本里加上这两句话
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1647922947944-4Fc8cFeyAnre.png)
