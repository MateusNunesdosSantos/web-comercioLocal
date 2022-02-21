import { useEffect, useState } from "react";

const defaultCoords = [-23.55052, -46.633308];

export default function useGetLocation() {
    const [coords, setCoords ] = useState<Number[] | null>(null);


    useEffect(() => {
    function onSuccses(position: GeolocationPosition){
        setCoords([position.coords.latitude, position.coords.longitude ])
    }

    function onError() {
        console.log('Error on get location')
        setCoords(defaultCoords);
    }

        try {
            navigator.geolocation.getCurrentPosition(onSuccses, onError)
        } catch (error) {
            setCoords(defaultCoords);
        }
    }, [])

    return {coords};
}