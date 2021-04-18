import React, { Component } from 'react'
import { Card } from 'antd';
import BaseForm from '../../components/BaseForm/index'
import axios from '../../axios/index';

export default class BikeMap extends Component {
  state = {
    bikeInfo:{}
  }
  map = {}
  formList = [
    {
      type: '城市'
    }, {
      type: '时间查询'
    }, {
      type: 'SELECT',
      label: '订单状态',
      field: 'order_status',
      placeholder: '全部',
      initialValue: '0',
      width: 150,
      list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '3', name: '行程结束' }]
    }
  ]
  requesList = () => {
    axios.ajax({
      url: '/map/bike_list',
      data: {
        params: this.params
      }
    }).then((res) => {
      if (res.code == 0) {
        this.setState({
          total_count: res.result.total_count
        })
        this.renderMap(res);
      }
    })
  }

  componentWillMount() {
    this.requesList();
  }

  handelFilterSubmit = (filterParams) => {
    this.params = filterParams;
    this.requesList();
  }
  renderMap = (res) => {
    let list = res.result.route_list;
    this.map = new window.BMapGL.Map('container');
    let gps1 = list[0].split(',');
    let startPoint = new window.BMapGL.Point(gps1[0], gps1[1]);
    let gps2 = list[list.length - 1].split(',');
    let endPoint = new window.BMapGL.Point(gps2[0], gps2[1]);

    this.map.centerAndZoom(endPoint, 11);
    // map.clearOverlays();

    //添加起始图标
    let startPointIcon = new window.BMapGL.Icon("/assets/start_point.png", new window.BMapGL.Size(36, 42), {
      imageSize: new window.BMapGL.Size(36, 42),
      anchor: new window.BMapGL.Size(18, 42)
    });

    var bikeMarkerStart = new window.BMapGL.Marker(startPoint, { icon: startPointIcon });
    this.map.addOverlay(bikeMarkerStart);

    let endPointIcon = new window.BMapGL.Icon("/assets/end_point.png", new window.BMapGL.Size(36, 42), {
      imageSize: new window.BMapGL.Size(36, 42),
      anchor: new window.BMapGL.Size(18, 42)
    });
    var bikeMarkerEnd = new window.BMapGL.Marker(endPoint, { icon: endPointIcon });
    this.map.addOverlay(bikeMarkerEnd);

    let routeList = [];
    list.forEach((item) => {
      let p = item.split(",");
      let point = new window.BMapGL.Point(p[0], p[1]);
      routeList.push(point);
    })
    // 行驶路线
    var polyLine = new window.BMapGL.Polyline(routeList, {
      strokeColor: "#ef4136",
      strokeWeight: 3,
      strokeOpacity: 1
    });
    this.map.addOverlay(polyLine);

    // 服务区路线
    let serviceList = res.result.service_list;
    let servicePointist = [];
    serviceList.forEach((item) => {
      let point = new window.BMapGL.Point(item.lon, item.lat);
      servicePointist.push(point);
    })
    // 画线
    var polyServiceLine = new window.BMapGL.Polyline(servicePointist, {
      strokeColor: "#ef4136",
      strokeWeight: 3,
      strokeOpacity: 1
    });
    this.map.addOverlay(polyServiceLine);

    // 添加地图中的自行车
    let bikeList = res.result.bike_list;
    let bikeIcon = new window.BMapGL.Icon("/assets/bike.jpg", new window.BMapGL.Size(36, 42), {
      imageSize: new window.BMapGL.Size(36, 42),
      anchor: new window.BMapGL.Size(18, 42)
    });
    bikeList.forEach((item) => {
      let p = item.split(",");
      let point = new window.BMapGL.Point(p[0], p[1]);
      var bikeMarker = new window.BMapGL.Marker(point, { icon: bikeIcon });
      this.map.addOverlay(bikeMarker);
    })

    // 添加地图控件
    this.addMapControl();
  };

  // 添加地图控件
  addMapControl = () => {
    let map = this.map;
    // 左上角，添加比例尺
    var top_right_control = new window.BMapGL.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT });
    var top_right_navigation = new window.BMapGL.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT });
    //添加控件和比例尺
    map.addControl(top_right_control);
    map.addControl(top_right_navigation);
    map.enableScrollWheelZoom(true);
    // legend.addLegend(map);
  };
  render() {
    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handelFilterSubmit} />
        </Card>
        <Card style={{ marginTop: 10 }}>
          <div>共{this.state.total_count}辆汽车</div>
          <div id="container" style={{ height: 500 }}></div>
        </Card>
      </div>
    )
  }
}
