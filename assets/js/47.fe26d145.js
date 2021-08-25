(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{452:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"analysis-ready-data-for-sar-sentinel-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#analysis-ready-data-for-sar-sentinel-1"}},[t._v("#")]),t._v(" Analysis-Ready Data for SAR (Sentinel-1)")]),t._v(" "),s("p",[t._v("Data from synthetic aperture radar sensors requires significant preprocessing to be calibrated and normalized for terrain.\nThis is referred to as backscatter computation, and supported by\n"),s("a",{attrs:{href:"https://processes.openeo.org/draft/#sar_backscatter",target:"_blank",rel:"noopener noreferrer"}},[t._v("sar_backscatter"),s("OutboundLink")],1),t._v(" and the CARD4L compliant variant\n"),s("a",{attrs:{href:"https://processes.openeo.org/draft/#ard_normalized_radar_backscatter",target:"_blank",rel:"noopener noreferrer"}},[t._v("ard_normalized_radar_backscatter"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The user should load a datacube containing raw SAR data, such as Sentinel-1 GRD. On the resulting datacube, the\n"),s("code",[t._v("openeo.rest.datacube.DataCube.sar_backscatter")]),t._v(" Python method can be invoked. The CEOS CARD4L variant is:\n"),s("code",[t._v("openeo.rest.datacube.DataCube.ard_normalized_radar_backscatter")]),t._v(" in Python. These processes are tightly coupled to\nmetadata from specific sensors, so it is not possible to apply other processes to the datacube first,\nwith the exception of specifying filters in space and time.")]),t._v(" "),s("p",[t._v("This section shows a few working examples for these processes.")]),t._v(" "),s("h2",{attrs:{id:"eodc-back-end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eodc-back-end"}},[t._v("#")]),t._v(" EODC back-end")]),t._v(" "),s("p",[t._v("EODC supports sar_backscatter, based on the "),s("a",{attrs:{href:"https://sentinel.esa.int/web/sentinel/toolboxes/sentinel-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentinel-1 toolbox"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"terrascope-back-end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terrascope-back-end"}},[t._v("#")]),t._v(" Terrascope back-end")]),t._v(" "),s("p",[t._v("When working with the Sentinelhub SENTINEL1_GRD collection, both sar processes can be used. The underlying implementation is\nprovided by "),s("a",{attrs:{href:"https://docs.sentinel-hub.com/api/latest/data/sentinel-1-grd/#processing-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentinelhub"),s("OutboundLink")],1),t._v(", and offers full\nCARD4L compliant processing options.")]),t._v(" "),s("p",[t._v("This is an example of "),s("code",[t._v("openeo.rest.datacube.DataCube.ard_normalized_radar_backscatter")]),t._v(" in Python:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("s1grd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SENTINEL1_GRD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    spatial_extent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'west'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.59003")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'east'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.8949")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'south'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.069")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'north'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.2206")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    temporal_extent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bands"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VH'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VV'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\njob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s1grd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ard_normalized_radar_backscatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute_batch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" asset "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_assets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    asset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("When working with other GRD data, an implementation based on Orfeo Toolbox is used:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.orfeo-toolbox.org/CookBook/Applications/app_SARCalibration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Orfeo docs"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Open-EO/openeo-geopyspark-driver/blob/master/openeogeotrellis/collections/s1backscatter_orfeo.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Implementation"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("The Orfeo implementation currently only supports sigma0 computation, and is not CARD4L compliant.")])])}),[],!1,null,null,null);a.default=n.exports}}]);