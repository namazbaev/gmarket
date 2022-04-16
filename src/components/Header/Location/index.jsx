import Modal from 'components/Modal'
import { useState, useRef } from 'react'
import { FullscreenControl } from 'react-yandex-maps'
import { Container, LocationIcon, IconBtn, Text, DownIcon, YMap, MapYandex } from "./style"
export default () => {
    const ymaps = useRef(null);
    const mapRef = useRef(null);
    const placemarkRef = useRef(null);
    const [open, setOpen] = useState(false)
    const [address, setAddress] = useState("2972 Westheimer Rd. Santa Ana");
    const [active, setActive] = useState(false)
    const MAPKEY = process.env.REACT_APP_MAP_KEY
    const mapState = { center: [41.293168, 69.299702], zoom: 12 };
    const createPlacemark = (coords) => {
        return new ymaps.current.Placemark(
            coords,
            {
                iconCaption: "Loading..."
            },
            {
                preset: "islands#violetDotIconWithCaption",
                draggable: true
            }
        );
    };
    const getAddress = (coords) => {
        placemarkRef.current.properties.set("iconCaption", "Loading..");
        ymaps.current.geocode(coords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);

            const newAddress = [
                firstGeoObject.getAddressLine().length
                    ? firstGeoObject.getAddressLine()
                    : firstGeoObject.getAddressLine()
            ]
                .filter(Boolean)
                .join(", ");
            setAddress(newAddress);
            placemarkRef.current.properties.set({
                iconCaption: newAddress,
                balloonContent: firstGeoObject.getAddressLine()
            });
        });
    };
    const onMapClick = (e) => {
        const coords = e.get("coords");

        if (placemarkRef.current) {
            placemarkRef.current.geometry.setCoordinates(coords);
        } else {
            placemarkRef.current = createPlacemark(coords);
            mapRef.current.geoObjects.add(placemarkRef.current);
            placemarkRef.current.events.add("dragend", () => {
                getAddress(placemarkRef.current.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    };
    return (
        <Container onClick={() => {
            setOpen(!open);
            setActive(!active);
        }}>
            <IconBtn>
                <LocationIcon />
            </IconBtn>
            <Text>{address}</Text>
            <IconBtn>
                <DownIcon active={active} />
            </IconBtn>
            <Modal open={open} onClose={() => setOpen(false)} title={<Text>{address}</Text>}>
                <YMap query={{ apikey: MAPKEY, lang: "uz_UZ" }}>
                    <MapYandex
                        instanceRef={mapRef} state={mapState} onClick={onMapClick}
                        modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                        onLoad={(ympasInstance) => (ymaps.current = ympasInstance)}>
                        <FullscreenControl />
                    </MapYandex>
                </YMap>
            </Modal>
        </Container>
    )
}