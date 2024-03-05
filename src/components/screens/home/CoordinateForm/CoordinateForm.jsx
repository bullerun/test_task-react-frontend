import {useState} from "react";
import {CoordinateService} from "../../../../services/coordinate.service";

const CoordinateForm = ({setLoaded}) => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const createCoordinate = (e) => {
        e.preventDefault()
        if (/^(-?\d{1,2}\.?\d{0,6}?)$/.test(latitude) && /^(-?\d{1,3}\.?\d{0,6}?)$/.test(longitude)) {
            let newLatitude = Number.parseFloat(latitude)
            let newLongitude = Number.parseFloat(longitude)
            if (-85 > newLatitude || newLatitude > 85 || isNaN(newLatitude)) {
                alert("широта должна принадлежать от -85 до 85")
                return;
            }
            if (-180 > newLongitude || newLongitude > 180 || isNaN(newLongitude)) {
                alert("долгота должна принадлежать от -180 до 180")
                return;
            }
            CoordinateService.add(newLatitude, newLongitude).then(r => setLoaded(false))
        } else {
            if (!/^(-?\d{1,2}\.?\d{0,6}?)$/.test(latitude)) alert("неккоретно введена широта")
            if (!/^(-?\d{1,3}\.?\d{0,6}?)$/.test(longitude)) alert("неккоретно введена долгота")
        }
    }
    return (
        <form className="row g-3 needs-validation justify-content-center" >
            <div className="col-8 position-relative">
                <input className="form-control" placeholder='широта'
                       onChange={e => setLatitude(e.target.value)} value={latitude}/>
            </div>
            <div className="col-8 position-relative">
                <input className="form-control" placeholder='долгота'
                       onChange={e => setLongitude(e.target.value)} value={longitude}/>
            </div>
            <div className="col-8 justify-content-center" style={{
                display: "flex"
            }}>
                <button className="btn btn-primary" onClick={e => createCoordinate(e)}>Отправить</button>
            </div>

        </form>
    )
}

export default CoordinateForm