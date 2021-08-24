(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{458:function(t,e,a){"use strict";a.r(e);var n=a(4),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-client"}},[t._v("#")]),t._v(" Python Client")]),t._v(" "),a("p",[t._v("This Getting Started guide will give you just a simple overview of the capabilities of the openEO Python client library.\nMore in-depth information can be found in the "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("The openEO Python client library is available on "),a("a",{attrs:{href:"https://pypi.org/project/openeo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyPI"),a("OutboundLink")],1),t._v("\nand can easily be installed with a tool like "),a("code",[t._v("pip")]),t._v(", for example:")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openeo\n")])])]),a("p",[t._v("It's recommended to work in a virtual environment of some kind ("),a("code",[t._v("venv")]),t._v(", "),a("code",[t._v("conda")]),t._v(", ...),\ncontaining Python 3.6 or higher.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For more details, alternative installation procedures or troubleshooting tips:\nsee the "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official "),a("code",[t._v("openeo")]),t._v(" installation documentation"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"connecting-to-openeo-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-openeo-platform"}},[t._v("#")]),t._v(" Connecting to openEO Platform")]),t._v(" "),a("p",[t._v("First we need to establish a connection to the openEO Platform back-end, which is available at "),a("code",[t._v("https://openeo.cloud")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" openeo\nconnection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openeo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openeo.cloud"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/api.html#module-openeo.rest.connection",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Connection")]),t._v(" object"),a("OutboundLink")],1),t._v("\nis your central gateway to")]),t._v(" "),a("ul",[a("li",[t._v("list data collections, available processes, file formats and other capabilities of the back-end")]),t._v(" "),a("li",[t._v("start building your openEO algorithm")]),t._v(" "),a("li",[t._v("execute and monitor (batch) jobs")]),t._v(" "),a("li",[t._v("etc.")])]),t._v(" "),a("h3",{attrs:{id:"collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collections"}},[t._v("#")]),t._v(" Collections")]),t._v(" "),a("p",[t._v('The EO data available at a back-end is organised in so-called collections.\nFor example, a back-end might provide fundamental satellite collections like "Sentinel 1" or "Sentinel 2",\nor preprocessed collections like "NDVI".\nCollections are used as input data for job executions.')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v('More information on how openEO "collections" relate to terminology used in other systems can be found in\n('),a("a",{attrs:{href:"https://openeo.org/documentation/1.0/glossary.html#eo-data-collections",target:"_blank",rel:"noopener noreferrer"}},[t._v("the openEO glossary"),a("OutboundLink")],1),t._v(").")])]),t._v(" "),a("p",[t._v("Let's list all available collections on the back-end,\nusing "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.list_collections",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("list_collections")]),a("OutboundLink")],1),t._v(", which returns list of collection metadata dictionaries:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list_collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The output will be something like:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[{'id': 'AGERA5', 'title': 'ECMWF AGERA5 meteo dataset', 'description': 'Daily surface meteorolociga datal ...', ...},\n {'id': 'SENTINEL2_L2A_SENTINELHUB', 'title': 'Sentinel-2 top of canopy', ...},\n {'id': 'SENTINEL1_GRD', ...},\n ...\n]\n")])])]),a("p",[t._v("This listing includes basic metadata for each collection.\nIf necessary, a more detailed metadata listing for a given collection can be obtained with\n"),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.describe_collection",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("describe_collection")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Programmatically listing collections is just a very simple usage example of the Python client.\nIn reality, you probably want to look up or inspect available collections on handy webpage.\nCheck out "),a("RouterLink",{attrs:{to:"/data-collections/"}},[t._v("the openEO Platform collections overview")]),t._v("\nor "),a("a",{attrs:{href:"https://hub.openeo.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("openEO Hub"),a("OutboundLink")],1),t._v(" for collection listings of other back-ends.")],1)]),t._v(" "),a("h3",{attrs:{id:"processes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#processes"}},[t._v("#")]),t._v(" Processes")]),t._v(" "),a("p",[t._v('Processes in openEO are operations that can be applied on (EO) data\n(e.g calculate the mean of an array, or mask out observations outside a given polygon)\nThe output of one process can be used as the input of another process,\nand by doing so, multiple processes can be connected that way in a larger "process graph":\na new (user-defined) processes that implements a certain algorithm.')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Check ("),a("a",{attrs:{href:"https://openeo.org/documentation/1.0/glossary.html#eo-data-collections",target:"_blank",rel:"noopener noreferrer"}},[t._v("the openEO glossary"),a("OutboundLink")],1),t._v(")\nfor more details on pre-defined, user-defined processes and process graphs.")])]),t._v(" "),a("p",[t._v("Let's list the (pre-defined) processes available on the back-end\nwith "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.list_processes",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("list_processes")]),a("OutboundLink")],1),t._v(" which returns a list of dictionaries describing the process (including expected arguments and return type):")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list_processes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Resulting in something like:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[{'id': 'absolute', 'summary': 'Absolute value', 'description': 'Computes the absolute value of a real number `x`, which is th...', \n {'id': 'mean', 'summary': 'Arithmetic mean(average)', ...}\n ...]\n")])])]),a("p",[t._v("Like with collections, instead of programmatic exploration you'll probably prefer a\n"),a("RouterLink",{attrs:{to:"/processes/"}},[t._v("visual overview of the available processes on openEO Platform")]),t._v(".\nYou can also use the "),a("a",{attrs:{href:"https://hub.openeo.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("openEO Hub"),a("OutboundLink")],1),t._v(" for back-end specific process descriptions\nor browse the "),a("a",{attrs:{href:"https://processes.openeo.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("reference specifications of openEO processes"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),a("p",[t._v("TODO (VITO)")]),t._v(" "),a("p",[t._v("In the code snippets above, authentication is usually not necessary, since we only fetch general information about the back-end.\nTo run your own jobs at the back-end or to access job results, you need to authenticate at the back-end.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://openid.net/connect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenID Connect (OIDC)"),a("OutboundLink")],1),t._v(" authentication can be used to authenticate with openEO Platform.")]),t._v(" "),a("p",[t._v("The following code snippet shows how to log in via OIDC authentication:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authenticate with OIDC authentication"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authenticate_OIDC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Calling this method shows a link that you can open in your system web browser, with which you can authenticate yourself on the back-end authentication system.\nAfter that the website will give you the instructions to go back to the python client, where your connection has logged your account in.\nThis means that every call that comes after that via the connection variable is executed by your user account.")]),t._v(" "),a("p",[t._v("As OpenID Connect authentication is a bit more complex and depends on the environment your are using it in, please refer to the general "),a("RouterLink",{attrs:{to:"/authentication/"}},[t._v("Authentication documentation for openEO Platform")]),t._v(" for more information.")],1),t._v(" "),a("h2",{attrs:{id:"creating-a-datacube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-datacube"}},[t._v("#")]),t._v(" Creating a Datacube")]),t._v(" "),a("p",[t._v("Now that we know how to discover the back-end and how to authenticate, lets continue by creating a new batch job to process some data.\nFirst you need to initialize a datacube by selecting a collection from the back-end via calling "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.load_collection",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("load_collection")]),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("datacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SENTINEL1_GRD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  spatial_extent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"west"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.06")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"south"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.06")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"east"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"north"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  temporal_extent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-03-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-04-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VV"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("This results in a "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/api.html#module-openeo.rest.datacube",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("datacube")]),t._v(" object"),a("OutboundLink")],1),t._v(' containing the "SENTINEL1_GRD" data restricted to the given spatial extent, the given temporal extend and the given bands .')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can also filter the datacube at a later stage by using the following filter methods:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("datacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_bbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("west"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.06")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" south"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.06")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" east"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" north"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_temporal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start_date"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-03-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end_date"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-04-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_bands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VV"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Still, it is recommended to always use the filters in "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.load_collection",target:"_blank",rel:"noopener noreferrer"}},[t._v("load_collection"),a("OutboundLink")],1),t._v(" to avoid loading too much data upfront.")])]),t._v(" "),a("p",[t._v("Having the input data ready, we want to apply a process on the datacube.\nTherefore, we can call the process directly on the datacube object, which then returns a datacube with the process applied.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("datacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("min_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v('The datacube is now reduced by the time dimension, by taking the minimum value of the timeseries values.\nNow the datacube has no time dimension left.\nOther so called "reducer" processes exist, e.g. for computing maximum and mean values.\nA list of supported processes using the Python client datacube can be found on the '),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Manually Adding Processes")]),t._v(" "),a("p",[t._v("Applying a process not supported by the Python client can be added to the datacube manually:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("datacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    process_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ndvi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    arguments"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nir"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("This applies the "),a("a",{attrs:{href:"https://docs.openeo.cloud/processes/#ndvi",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ndvi")]),t._v(" process"),a("OutboundLink")],1),t._v(' to the datacube with the arguments of "data", "nir" and "red". This example requires a datacube that includes bands '),a("code",[t._v("B8")]),t._v(" and "),a("code",[t._v("B4")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Still unsure on how to make use of processes with the Python client? Visit the "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/processes.html#working-with-processes",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("After applying all processes you want to execute, we need to tell the back-end to export the datacube, for example as GeoTiff:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save_result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GTiff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Everything applied to the datacube at this point is neither executed locally on your machine nor executed on the back-end.\nIt just defines the input data and process chain the back-end needs to apply when it sends the datacube to the back-end and executes it there.\nHow this can be done is the topic of the next chapter.")])]),t._v(" "),a("h2",{attrs:{id:"batch-job-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-job-management"}},[t._v("#")]),t._v(" Batch Job Management")]),t._v(" "),a("p",[t._v("Assuming that the definition of the datacube object and all related processes is finished, we can now send it to the back-end and start the execution.\nIn openEO, an execution of a (user-defined) process (here defined in the datacube object) is called a "),a("a",{attrs:{href:"https://openeo.org/documentation/1.0/glossary.html#data-processing-modes",target:"_blank",rel:"noopener noreferrer"}},[t._v("(batch) job"),a("OutboundLink")],1),t._v(".\nTherefore, we need to create a job at the back-end using our datacube, giving it the title "),a("code",[t._v("Example Title")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Creating a new job at the back-end by sending the datacube information.")]),t._v("\njob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.send_job",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("send_job")]),a("OutboundLink")],1),t._v(" method sends all necessary information to the back-end and creates a new job, which gets returned.")]),t._v(" "),a("p",[t._v("After this, the job is just created, but has not started the execution at the back-end yet.\nTo start the job and let your Python script wait until the job has finished then\ndownload it automatically, you can use the "),a("code",[t._v("start_and_wait")]),t._v(" method.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Starts the job and waits until it finished to download the result.")]),t._v("\njob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start_and_wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download_results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("More information on job management with the Python client can be\nfound on the "),a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/basics.html#managing-jobs-in-openeo",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"additional-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[t._v("#")]),t._v(" Additional Information")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Open-EO/openeo-python-client/tree/master/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Examples"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Open-EO/openeo-python-client/tree/master/examples/notebooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jupyter Notebooks"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Documentation"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Open-EO/openeo-python-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Repository"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);