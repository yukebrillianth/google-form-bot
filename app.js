const { default: axios } = require("axios");
const qs = require('qs')
const config = require('./config.json');

const date = new Date;
const year = date.getFullYear();
const month = date.getMonth() + 1; // beware: January = 0; February = 1, etc.
const day = date.getDate();

const dateFormat = year + "-" + ("0" + month).slice(-2) + "-" + day

// const key = () => {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < 24; i++) {
//         result += characters.charAt(Math.floor(Math.random() *
//             charactersLength));
//     }
//     return result;
// }

// const keyToken = key();

const firstData = qs.stringify({
    'entry.1107982372_year': year,
    'entry.1107982372_month': ("0" + month).slice(-2),
    'entry.1107982372_day': day,
    'entry.1570564577': config.keterangan,
    'entry.1831653095': config.kelas,
    'entry.762512528': config.nama,
    'entry.986366620': config.absen,
    'entry.1570564577_sentinel': '',
    'fvv': '1',
    'draftResponse': '[[[null,762512528,[' + config.nama + '],0],[null,986366620,["' + config.absen + '"],0],[null,1831653095,["' + config.kelas + '"],0],[null,1107982372,[' + dateFormat + '],0],[null,1570564577,["' + config.keterangan + '"],0],[null,1856075124,["' + config.kelasDetail + '"],0]],null,"4734432169028665497"]',
    'pageHistory': '0',
    'fbzx': '435254377647',
    'continue': '1'
});

const nextData = qs.stringify({
    'entry.1856075124': config.kelasDetail,
    'entry.1856075124_sentinel': '',
    'fvv': '1',
    'draftResponse': '[[[null,762512528,[' + config.nama + '],0],[null,986366620,["' + config.absen + '"],0],[null,1831653095,["' + config.kelas + '"],0],[null,1107982372,[' + dateFormat + '],0],[null,1570564577,["' + config.keterangan + '"],0],[null,1856075124,["' + config.kelasDetail + '"],0]],null,"4734432169028665497"]',
    'pageHistory': '0,1',
    'fbzx': '435254377647'
});

const firstRequestConfig = {
    method: 'post',
    url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScOwnlOEdG2z7SVJLjd4LE-QU_8V22dx9EVPN9YURvsnOb0Kw/formResponse',
    headers: {
        'authority': 'docs.google.com',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'sec-ch-ua-mobile': '?0',
        'upgrade-insecure-requests': '1',
        'origin': 'https://docs.google.com',
        'content-type': 'application/x-www-form-urlencoded',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'x-chrome-connected': 'source=Chrome,id=104123847749328984487,mode=0,enable_account_consistency=false,supervised=false,consistency_enabled_by_default=false',
        'x-client-data': 'CJG2yQEIo7bJAQjEtskBCKmdygEI7urKAQjQmssBCKOgywEI7/LLAQjO9ssBCLT4ywEIn/nLAQj2+csBCK/6ywEI5P3LARiP9csB',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'referer': 'https://docs.google.com/forms/d/e/1FAIpQLScOwnlOEdG2z7SVJLjd4LE-QU_8V22dx9EVPN9YURvsnOb0Kw/viewform?entry.762512528=MAMAN%20SUPRAMAN&entry.986366620=36&entry.1831653095=B&entry.1107982372_year=2021&entry.1107982372_month=8&entry.1107982372_day=14&entry.1570564577=Hadir&entry.1856075124=A%20MIPA%201&fbzx=4734432169028665497',
        'accept-language': 'en-US,en;q=0.9,id;q=0.8',
    },
    data: firstData
};

const nextRequestConfig = {
    method: 'post',
    url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScOwnlOEdG2z7SVJLjd4LE-QU_8V22dx9EVPN9YURvsnOb0Kw/formResponse',
    headers: {
        'authority': 'docs.google.com',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'sec-ch-ua-mobile': '?0',
        'upgrade-insecure-requests': '1',
        'origin': 'https://docs.google.com',
        'content-type': 'application/x-www-form-urlencoded',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'x-chrome-connected': 'source=Chrome,id=104123847749328984487,mode=0,enable_account_consistency=false,supervised=false,consistency_enabled_by_default=false',
        'x-client-data': 'CJG2yQEIo7bJAQjEtskBCKmdygEI7urKAQjQmssBCKOgywEI7/LLAQjO9ssBCLT4ywEIn/nLAQj2+csBCK/6ywEI5P3LARiP9csB',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'referer': 'https://docs.google.com/forms/d/e/1FAIpQLScOwnlOEdG2z7SVJLjd4LE-QU_8V22dx9EVPN9YURvsnOb0Kw/viewform?entry.762512528=MAMAN%20SUPRAMAN&entry.986366620=36&entry.1831653095=B&entry.1107982372_year=2021&entry.1107982372_month=8&entry.1107982372_day=14&entry.1570564577=Hadir&entry.1856075124=A%20MIPA%201&fbzx=4734432169028665497',
        'accept-language': 'en-US,en;q=0.9,id;q=0.8',
    },
    data: nextData
};

console.log("\x1b[36m%s\x1b[0m", "Sedang mengisi presensi....");

axios(firstRequestConfig)
    .then(() => {
        axios(nextRequestConfig)
            .then(() => {
                console.log("\x1b[32m%s\x1b[0m", "Sukses mengisi presensi!");
            })
    })


