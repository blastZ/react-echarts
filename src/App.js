import React, { Component } from 'react';
import Button from 'antd/lib/button';
import { Table, Icon, Divider } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class App extends Component {
  state = {
    xAxisData: [],
    series: []
  }

  componentDidMount() {
    const myChart = echarts.init(document.getElementById('my-echart'));
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: this.state.xAxisData
        },
        yAxis: {},
        series: this.state.series
    });
    myChart.showLoading();
    setInterval(() => {
      this.getData().then(() => {
        myChart.hideLoading();
        myChart.setOption({
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
              data: this.state.xAxisData
          },
          yAxis: {},
          series: this.state.series
        });
      });
    }, 3000);
  }

  getData = () => (
    new Promise((resolve) => {
      setTimeout(() => {
        this.setState({
          xAxisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [Math.random() * 10 + 5, Math.random() * 10 + 20, Math.random() * 10 + 36, Math.random() * 10 + 10, Math.random() * 10 + 10, Math.random() * 10 + 20]
            }
          ]
        })
        resolve();
      }, 3000)
    })
  )

  render() {
    return (
      <div>
        <div id="my-echart" style={{width: '400px', height: '400px'}}>
        </div>
      </div>
    );
  }
}

export default App;
