"use strict"

var map;

var phoThom = document.getElementById('phoThom');

var phoThom = {
    info: '<strong>Pho Thom</strong><br>\
            7313 Baltimore Ave F, College Park, MD 20740<br>\
            <a href="https://goo.gl/maps/4mH2LtEtff12">Get Directions</a>',
    lat: 38.980021,
    long: -76.937719
}



var pho88 = {
    info: '<strong>Pho 88</strong><br>\
            10478 Baltimore Ave, Beltsville, MD 20705<br>\
            <a href="https://goo.gl/maps/MvaR5PbLZ4r">Get Directions</a>',
    lat: 39.028615,
    long: -76.917839
}

var theAscent = {
    info: '<strong>The Ascent: Loyola</strong><br>\
            4900 N Charles St, Baltimore, MD 21210<br>\
            <a href="https://goo.gl/maps/g3nLnvNo1Gr">Get Directions</a>',
    lat: 39.352568,
    long: -76.624660
}

var northWestBranch = {
    info: '<strong>North West Branch</strong><br>\
            Northwest Branch Trail, Silver Spring, MD 20903<br>\
            <a href="https://goo.gl/maps/ZezbENm87Tz">Get Directions</a>',
    lat: 39.03,
    long: -77.004
}

var locations = [
    [phoThom.info, phoThom.lat, phoThom.long],
    [pho88.info, pho88.lat, pho88.long],
    [theAscent.info, theAscent.lat, theAscent.long],
    [northWestBranch.info, northWestBranch.lat, northWestBranch.long],
];

var infowindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.99,
            lng: -76.94
        },
        zoom: 10,
        gestureHandling: 'greedy'
    });

    infowindow = new google.maps.InfoWindow({});

    for (let i = 0; i < locations.length; i++) {
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.close();
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

function zoomPhoThom() {
    let position = new google.maps.LatLng(phoThom.lat,phoThom.long);
    map.setCenter(position);
    map.setZoom(15);

    let marker = new google.maps.Marker({
        position: position,
        map: map
    });

    infowindow.setContent(phoThom.info);
    infowindow.open(map, marker);

    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            infowindow.setContent(phoThom.info);
            infowindow.open(map, marker);
        }
    })(marker));
}

function zoomPho88() {
    let position = new google.maps.LatLng(pho88.lat,pho88.long);
    map.setCenter(position);
    map.setZoom(15);

    let marker = new google.maps.Marker({
        position: position,
        map: map
    });

    infowindow.setContent(pho88.info);
    infowindow.open(map, marker);

    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            infowindow.setContent(pho88.info);
            infowindow.open(map, marker);
        }
    })(marker));
}

function zoomTheAscent() {
    let position = new google.maps.LatLng(theAscent.lat,theAscent.long);
    map.setCenter(position);
    map.setZoom(15);

    let marker = new google.maps.Marker({
        position: position,
        map: map
    });

    infowindow.setContent(theAscent.info);
    infowindow.open(map, marker);

    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            infowindow.setContent(theAscent.info);
            infowindow.open(map, marker);
        }
    })(marker));
}

function zoomNWB() {
    let position = new google.maps.LatLng(northWestBranch.lat,northWestBranch.long);
    map.setCenter(position);
    map.setZoom(15);

    let marker = new google.maps.Marker({
        position: position,
        map: map
    });

    infowindow.setContent(northWestBranch.info);
    infowindow.open(map, marker);

    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            infowindow.setContent(northWestBranch.info);
            infowindow.open(map, marker);
        }
    })(marker));
}
