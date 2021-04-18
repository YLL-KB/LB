import React from 'react';
import { HashRouter,Redirect,Route,Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Home from './pages/home/index';
import Buttons from './pages/ui/buttons'
import  NoMatch from './pages/nomatch/index'
import Modals from './pages/ui/modals'
import Login from './pages/login';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/messages';
import Tab from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import BesicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';
import City from  './pages/city/index'
import Order from './pages/order/index'
import User from './pages/user/index'
import Common from './common'
import OrderDetail from './pages/order/detail'
import BikeMap from './pages/map/bikeMap';
import Bar from './pages/echarts/bar/index'
import Par from './pages/echarts/pie/index'
import Line from './pages/echarts/line/index'
import RichText from './pages/rich';
import PermissionUser from './pages/perminssion/index';
export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/common" render={()=>
                        <Common>
                            <Route path="/common/order/detail/:orderId" extract component={OrderDetail}/>
                        </Common>
                    } />
                    <Route path="/" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/home" component={Home}/>
                                <Route path="/ui/buttons" component={Buttons}/>
                                <Route path="/ui/modals" component={ Modals }/>
                                <Route path="/ui/loadings" component={ Loadings }/>
                                <Route path="/ui/notification" component={ Notice }/>
                                <Route path="/ui/messages" component={  Messages }/>
                                <Route path="/ui/tabs" component={ Tab }/>
                                <Route path="/ui/gallery" component={ Gallery }/>
                                <Route path="/ui/carousel" component={ Carousels }/>
                                <Route path="/form/login" component={ FormLogin }/>
                                <Route path="/form/reg" component={ FormRegister }/>
                                <Route path="/table/basic" component={ BesicTable }/>
                                <Route path="/table/high" component={HighTable}/>
                                <Route path="/city" component={City}/>
                                <Route path="/order" component={Order}/>
                                <Route path="/user" component={User}/>
                                <Route path="/bikeMap" component={BikeMap}/>
                                <Route path="/charts/bar" component={Bar}/>
                                <Route path="/charts/pie" component={Par}/>
                                <Route path="/charts/line" component={Line}/>
                                <Route path="/rich" component={RichText}/>
                                <Route path="/permission" component={PermissionUser}/>
                                <Route  component={ NoMatch }/>
                                <Redirect to="/home"/>
                            </Switch>
                        </Admin>
                    } />
                   </Switch>
                </App>
            </HashRouter>
        )
    }
}
