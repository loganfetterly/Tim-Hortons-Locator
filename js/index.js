var map;
let marker;
// home
const edmonton = {lat: 53.5461, lng: -113.4938};
// get image
const image = "./assets/coffee-cup.png";

function initMap() {
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: edmonton,
        zoom: 11
    });
    createMarker();
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

const createMarker = () => {
    // add a marker
    marker = new google.maps.Marker({
        map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: edmonton,
        icon: image,
        });
        marker.addListener("click", toggleBounce);
}