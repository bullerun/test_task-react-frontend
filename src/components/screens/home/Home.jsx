import CoordinateForm from "./CoordinateForm/CoordinateForm";
import {useEffect, useState} from "react";
import {YMaps, Map, Clusterer, Placemark} from "@pbe/react-yandex-maps";
import {CoordinateService} from "../../../services/coordinate.service";


function Home() {
    const [coordinates, setCoordinates] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (loaded) return;
        const fetchData = async () => {
            setCoordinates(await CoordinateService.getAll())
        }
        setLoaded(true)
        fetchData()
    }, [loaded]);

    return (

        <div className="container col-xs-12">
            <div className="row">
                <div className="col-12 mt-5 align-items-center justify-content-center" style={{display:"flex"}}>

                    <YMaps>
                        <Map
                            width='50%'
                            height='300px'
                            defaultState={{
                                center: [55.751574, 37.573856],
                                zoom: 1,
                            }}
                        >
                            <Clusterer
                                options={{
                                    preset: "islands#invertedVioletClusterIcons",
                                    groupByCoordinates: false,
                                }}
                            >

                                {coordinates.map((coordinate, index) => (
                                    <Placemark key={index} geometry={[coordinate.latitude, coordinate.longitude]}/>
                                ))}
                            </Clusterer>
                        </Map>
                    </YMaps>
                    {/*{*/}
                    {/*    coordinates.map(coordinate =>*/}
                    {/*        <div>*/}
                    {/*            {coordinate.latitude        }*/}
                    {/*            {coordinate.longitude}*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                </div>
                <div className="col-12 mt-5 justify-content-center" style={{
                    alignItems: "center",
                    display: "flex",

                }}><CoordinateForm setLoaded={setLoaded}/></div>
            </div>

        </div>
    )
}

export default Home