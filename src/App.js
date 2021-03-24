// import logo from './logo.svg';
// import './App.css';
// import DemoStateLess from './Components/DemoStateLess.js'
// import DemoStateFull from './Components/DemoStateFull';

import BaiTapThucHanhLayout from "./Components/BaiTapThucHanhLayout/BaiTapThucHanhLayout";
import DemoProps from "./Components/Props/DemoProps";
import RenderWithMap from "./Components/RenderWithMap/RenderWithMap";
import BaiTapChonXe from "./Components/StateDemo/BaiTapChonXe";
import StateDemo from "./Components/StateDemo/StateDemo";
import HandleEvent from "./HandleEvent/HandleEvent";
import StyleComponent from "./StyleComponent/StyleComponent";

import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BTQuanLySanPham from "./Components/Props/BTQuanLySanPham/BTQuanLySanPham";
function App() {
  return (
    <div className="App">

      {/* <BaiTapLayout></BaiTapLayout> */}
      {/* <StyleComponent /> */}
      {/* <p className="text-red">App component2</p> */}

      {/* <BaiTapThucHanhLayout /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      <BTQuanLySanPham />
    </div >
  );
}

export default App;
