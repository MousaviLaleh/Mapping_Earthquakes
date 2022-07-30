# Mapping_Earthquakes
A project to visualize the earthquake GeoJSON data from USGS with interactive maps using JavaScript, Leaflet.js, and geoJSON.
The earthquake data is represented on the maps in relation to the tectonic plates’ location on the earth, and according to each event's magnitude.


### Resources

- Data Source :&nbsp; [Eartquake GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson),&nbsp; [Earthquake above 4.5 GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson),&nbsp; [Tectonic Plate GeoJSON](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)
- Softwares :&nbsp; HTML,&nbsp; CSS,&nbsp; [JavaScript](https://www.w3schools.com/js/default.asp),&nbsp; [D3.js](https://d3js.org/),&nbsp; [Leaflet](https://leafletjs.com/examples/geojson/)


## Analysis
To interact with the maps API the user needs to visit [mapbox.com](https://www.mapbox.com/), create an account and retrieve the access token.
<br/>

![01.png](images/01.png)

<br/>

Thec, call the token file in the html file.
<br/>

![02.png](images/02.png)

<br/>

To run the index.html file, open the Terminal in VS-Code, navigate to your project folder and enter  _**python -m http.server**_  command. <br/>

## Link to interactive map
The deployed webpage is accessible at &nbsp;  https://mousavilaleh.github.io/EarthquakeMap/  <br/>


### Map View

with the center of [40.7, -94.5] cordinates.  <br/>

![03.png](images/03.png)
<p align="center">Street View </p>

<br/>

![04.png](images/04.png)
<p align="center">Satellite View</p>

<br/>

![05.png](images/05.png)
<p align="center">Dark View </p>

<br/>

User also can choose which data to display.  

<br/>

![06.png](images/06.png)

<br/>
