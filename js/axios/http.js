const axios = require('axios');
const actorArr = require('./actor.json')
var schedule = require('node-schedule');

function createAllFilm(realName) {
    const crawlerBaseUrl = 'https://www.busdmm.work/star'
    axios.post('http://127.0.0.1:4397/api/film/createAll', {
        crawlerBaseUrl,
        realName
    })
}
function createActor(realName) {
    const crawlerBaseUrl = 'https://www.busdmm.work/star'
    axios.post('http://127.0.0.1:4397/api/actor/create', {
        crawlerBaseUrl,
        realName
    })
}

let actorArr2 = []
function getFilmByRealName(realName) {

    return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:4397/api/film/getAllFilms', {
            realName,
        })
            .then(function (response) {
                resolve(response.data.data.baseList.length)
            })
            .catch(function (error) {
                console.log(error);
            });
    });


}

async function run() {
    for (let index = 0; index < actorArr.length; index++) {
        const element = actorArr[index];
        // createActor(element.realName)
        // createAllFilm(element.realName)
        const baseListLength = await getFilmByRealName(element.realName)
        console.log(element.realName, baseListLength);
    }
}

const scheduleCronstyle = () => {
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('3 * * * * *', () => {
        console.log('scheduleCronstyle:' + new Date());
    });
}
scheduleCronstyle()

// run()