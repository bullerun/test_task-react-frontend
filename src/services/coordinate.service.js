import axios from "axios";

export const CoordinateService = {
    async getAll() {
        const response = await axios.get("http://localhost:8080/get/coordinate")
        return response.data
    },
    async add(latitude, longitude) {
        await axios.post("http://localhost:8080/add/coordinate",
            {
                latitude: latitude,
                longitude: longitude
            })
        console.log("post")
    }
}