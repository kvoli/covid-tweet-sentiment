import {DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_URL} from '../constants/config'
import axios from 'axios'

export const jsonGeoJson = json => {

    let res = {}
    let features = []
    let cur = {}
    res["type"] = "FeatureCollection"
    json["default"]["rows"].forEach(element => {
        cur["type"] = "Feature"
        cur["properties"] = {
            "harvestTime": element["harvestTime"],
            "_id": element["_id"],
            "harvestNode": element["harvestNode"],
            "createdTime": element["created_at"],
            "user": element["user"],
            "hashtags": element["hashtags"],
            "suburb": element["location"]["suburb"] ? element["location"]["suburb"] : "",
            "text": element["text"]
        }
        cur["geometry"] = {
            "type": "Point",
            "coordinates": [element["location"]["longitude"], element["location"]["latitude"]]
        }
        features.push(cur)
        cur = {}
    });

    res["features"] = features
    
    return res

}


export async function requestDB(request) {
    let res = await axios.get(DATABASE_URL + request, {
      auth : {
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
      },
      crossdomain: true,
    }).catch(err => {
        console.log(err)
            return null
        })
    return res;
  }