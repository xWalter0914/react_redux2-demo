import fetchJsonp from 'fetch-jsonp'

export const weatherAction=dispatch=>({
    getWeather:()=>(
        fetchJsonp('http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC%E5%B8%82&output=json&ak=3p49MVra6urFRGOT9s8UBWr2&callback=__jp0',
            {
                jsonpCallback:'callback'//默认是callback
            }
        )
        .then((res)=>{
            return res.json()
        })
        .then((json)=>{
            if(json.status === 'success'){
                let data=json.results[0].weather_data[0]
                dispatch({
                    type:'weather',
                    payload:{ 
                        imgUrl:data.dayPictureUrl,
                        weathertext:data.weather
                    }
                })
            }else{
                throw new Error('获取天气失败')
            }
        })
    )
});