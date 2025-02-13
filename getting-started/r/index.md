# R Client

## Installation

Before you install the R client module into your R environment, please make sure that you have at least R version 3.6. Older versions might also work, but were not tested.

Stable releases can be installed from the master branch or one of the releases of the [Github repository](https://github.com/Open-EO/openeo-r-client) using `install_github` from the devtools package using the following command:

```r
devtools::install_github(repo="Open-EO/openeo-r-client",dependencies=TRUE)
```

::: tip Note
Please make sure to have the package 'devtools' installed. If it is not installed use `install.packages("devtools")`.
:::

If you want to install the development version, please use the `ref="develop"` in the prior installation command.
It may contain more features, but may also be unstable.

If this gives you an error, something went wrong with the installation so please check the requirements again. 

If you have still troubles installing the package, feel free to leave an issue at the [GitHub project](https://github.com/Open-EO/openeo-r-client/issues).

Now that the installation was successfully finished, we can load the package and connect to openEO compliant back-ends. 
In the following chapters we quickly walk through the main features of the R client.

## Connecting to openEO Platform

First we need to establish a connection to the openEO Platform back-end, which is available at `https://openeo.cloud`.

```r
library(openeo)
con = connect(host = "https://openeo.cloud")
```

The object stored as variable `con` is a connection and resembles the `OpenEOClient` - an object, that bundles all information and functions to interact with the back-end. It can be used explicitly in all of the functions to determine which connection has to be used (usually parameter `con`). If only one connection is active, then you can omit the parameter, because the last active connection is always stored in a package environment and used if no specific connection was present (see `?active_connection` in the package documentation).

The capabilities of the back-end and the collections are generally publicly available, unless the data collections are proprietary and licensing issues prevent the back-end provider from publishing the collection. For the publicly available information you do not need to have an account on the back-end for reading them.

### Collections

Collections represent the basic data the back-end provides (e.g. Sentinel 1 collection) and are therefore often used as input data for job executions ([more info on collections](https://openeo.org/documentation/1.0/glossary.html#eo-data-collections)).
With the following code snippet you can get all available collection names and their description. The collection list and its entries have their own implementations of the `print` function. The collection list object is coerced into a `data.frame` only for printing purposes and the collection for the collection some key information are printed. 

To get the collection list can be indexed by the collections ID to get the more details about the overview information. With the `describe_collection` function you can get an even more detailed information about the collection.

```r
# get the collection list
collections = list_collections()

# print an overview of the available collections (printed as data.frame or tibble)
print(collections)

# to print more of the reduced overview metadata
print(collections$SENTINEL1_GRD)

# Dictionary of the full metadata of the "SENTINEL1_GRD" collection (dict)
s2 = describe_collection("SENTINEL1_GRD") # or use the collection entry from the list, e.g. collections$SENTINEL1_GRD
print(s2)
```

In general all metadata objects are based on lists, so you can use `str()` to get the structure of the list and address fields by the `$` operator.

::: tip
If the package is used with RStudio the metadata can also be nicely rendered as a web page in the viewer panel by running `collection_viewer(x="SENTINEL1_GRD")`.
:::

### Processes

Processes in openEO are tasks that can be applied to (EO) data.
The input of a process might be the output of another process, so that several connected processes form a new (user-defined) process itself.
Therefore, a process resembles the smallest unit of task descriptions in openEO ([more details on processes](https://openeo.org/documentation/1.0/glossary.html#processes)).
The following code snippet shows how to get the available processes.

```r
# List of available openEO processes with full metadata
processes = list_processes()

# List of available openEO processes by identifiers (string)
print(names(processes))

# print metadata of the process with ID "load_collection"
print(processes$load_collection)
```

The `list_processes()` method returns a list of process metadata objects that the back-end provides.
Each process list entry is a more complex list object (called 'ProcessInfo') and contains the process identifier and additional metadata about the process, such as expected arguments and return types. 

::: tip
As for the collection, processes can also be rendered as a web page in the viewer panel, if RStudio is used. In order to open the viewer use `process_viewer()` with either a particular process (`process_viewer("load_collection")`) or you can pass on all processes (`process_viewer(processes)`). When all processes are chosen, there is also a search bar and a category tree.
:::

For other graphical overviews of the openEO processes, there is an [online documentation](../processes.md) for general process descriptions and the [openEO Hub](https://hub.openeo.org/) for back-end specific process descriptions. 

## Authentication 

TODO (WWU/EURAC)

In the code snippets above, authentication is usually not necessary, since we only fetch general information about the back-end.
To run your own jobs at the back-end or to access job results, you need to authenticate at the back-end.

[OpenID Connect (OIDC)](https://openid.net/connect/) authentication can be used to authenticate with openEO Platform.

The following code snippet shows how to log in via OIDC authentication:

::: tip Action required
**Unfortunately, you need to request a *Client ID* and a *Client Secret* for this from the openEO Platform support due to the R client not being officially supported by openEO Platform!**
Once you have received the *Client ID* and a *Client Secret*, you can can continue with the instructions below.
:::

```r
# get supported OIDC providers which the back-end supports
oidc_providers = list_oidc_providers()

login(login_type="oidc",
      provider = oidc_providers$some_provider,
      config = list(
        client_id= "...",
        secret = "..."))
```

Calling this method opens your system web browser, with which you can authenticate yourself on the back-end authentication system. 
After that the website will give you the instructions to go back to the python client, where your connection has logged your account in. 
This means, that every call that comes after that via the connection variable is executed by your user account.

As OpenID Connect authentication is a bit more complex and depends on the environment your are using it in, please refer to the general [Authentication documentation for openEO Platform](../../authentication/index.md) for more information.

## Creating a (user-defined) process

Now that we know how to discover the back-end and how to authenticate, lets continue by creating a new batch job to process some data.

First we need to create a process builder object that carries all the available predefined openEO processes of the connected back-end as attached R functions with the parameters stated in the process metadata.

```r
p = processes()
```

The functions of the builder return process nodes, which represent a particular result in the workflow. As one of the first steps we need to select the source data collection.

```r
datacube = p$load_collection(
  id = "SENTINEL1_GRD",
  spatial_extent=list(west = 16.06, south = 48.06, east = 16.65, north = 48.35),
  temporal_extent=c("2017-03-01", "2017-04-01"),
  bands=c("VV", "VH")
)
```

This results in a process node that represents a [datacube](https://openeo.org/documentation/1.0/glossary.html#spatial-datacubes) and contains the "SENTINEL1_GRD" data restricted to the given spatial extent, the given temporal extent and the given bands .

::: tip
You can also filter the datacube at a later stage by using the following filter methods:

```r
datacube = p$load_collection(id = "SENTINEL1_GRD")
datacube = p$filter_bbox(data = datacube, extent=list(west=16.06, south=48.06, east=16.65, north=48.35))
datacube = p$filter_temporal(data=datacube,extent=c("2017-03-01","2017-04-01"))
datacube = p$filter_bands(data = datacube, bands=c("VV", "VH"))
```

Still, it is recommended to always use the filters in `load_collection` to avoid loading too much data upfront.
:::

Having the input data ready, we want to apply a process on the datacube.
Therefore, we can call the process directly on the datacube object, which then returns a datacube with the process applied. 

```r
min_reducer = function(data,context) { 
  return(p$min(data = data))
}

reduced = p$reduce_dimension(data = datacube, reducer = min_reducer, dimension="t")
```

The datacube is now reduced by the time dimension named `t`, by taking the minimum value of the timeseries values. Now the datacube has no time dimension left. Other so called "reducer" processes exist, e.g. for computing maximum and mean values.


::: tip Note
Everything applied to the datacube at this point is neither executed locally on your machine nor executed on the back-end.
It just defines the input data and process chain the back-end needs to apply when it sends the datacube to the back-end and executes it there.
How this can be done is the topic of the next chapter. 
:::

After applying all processes you want to execute, we need to tell the back-end to export the datacube, for example as GeoTiff:

```r
formats = list_file_formats()

result = p$save_result(data = reduced, format = formats$output$`GTIFF-ZIP`)
```

The first line retrieves the back-ends offered input and output formats. The second line creates the result node, which stores the data as a zipped GeoTiff.

## Batch Job Management

After you have finished working on your (user-defined) process, we can now send it to the back-end and start the execution. 
In openEO, an execution of a (user-defined) process is called a [(batch) job](https://openeo.org/documentation/1.0/glossary.html#data-processing-modes).
Therefore, we need to create a job at the back-end using our datacube, giving it the title `Example Title`.

```r
job = create_job(graph=result,title = "Example Title")
```

The `create_job` method sends all necessary information to the back-end and creates a new job, which gets returned.
After this, the job is just created, but has not started the execution at the back-end yet.
It needs to be queued for processing explicitly:

```r
start_job(job = job)
```

After the job was executed, status updates can be fetched by using the `list_jobs()` function. This function returns a list of job descriptions, which can be indexed with the jobs ID to limit the search results. But remember that only `list_jobs()` refreshes this list. So, to monitor a job you have to iteratively call the job (`describe_job()`) or the job list `list_jobs()`.

```r
jobs = list_jobs()
jobs # printed as a tibble or data.frame, but the object is a list

# or use the job id (in this example 'cZ2ND0Z5nhBFNQFq') as index to get a particular job overview
jobs$cZ2ND0Z5nhBFNQFq

# alternatively request detailed information about the job
describe_job(job = job)
```

When the job is finished, calling `download_results()` will download the results of a job. Using `list_results()` will return an overview about the created files and their download link or it states the error message, in case of an error.

```r
# list the processed results
list_results(job = job)

# download all the files into a folder on the file system
download_results(job = job, folder = "/some/folder/on/filesystem")
```

::: tip Note
The printing behavior and the actual data structure might differ!
:::

## Additional Information

* [Examples](https://github.com/Open-EO/openeo-r-client/tree/master/examples)
* [Repository](https://github.com/Open-EO/openeo-r-client)
* for function documentation, use R's `?` function