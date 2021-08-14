const { default: axios } = require("axios");
const qs = require('qs');
const config = require('./config.json');

const date = new Date;
const year = date.getFullYear();
const month = date.getMonth() + 1; // beware: January = 0; February = 1, etc.
const day = date.getDate();

const dateFormat = year + "-" + ("0" + month).slice(-2) + "-" + day;
const URI = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScOwnlOEdG2z7SVJLjd4LE-QU_8V22dx9EVPN9YURvsnOb0Kw/formResponse';
const draftResponse = '[[[null,762512528,[' + config.nama + '],0],[null,986366620,["' + config.absen + '"],0],[null,1831653095,["' + config.kelas + '"],0],[null,1107982372,[' + dateFormat + '],0],[null,1570564577,["' + config.keterangan + '"],0],[null,1856075124,["' + config.kelasDetail + '"],0]],null,"4734432169028665497"]'
'[[[null,762512528,[' + config.nama + '],0],[null,986366620,["' + config.absen + '"],0],[null,1831653095,["' + config.kelas + '"],0],[null,1107982372,[' + dateFormat + '],0],[null,1570564577,["' + config.keterangan + '"],0],[null,1856075124,["' + config.kelasDetail + '"],0]],null,"4734432169028665497"]';

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
    'draftResponse': draftResponse,
    'pageHistory': '0',
    'fbzx': '435254377647',
    'continue': '1'
});

const nextData = qs.stringify({
    'entry.1856075124': config.kelasDetail,
    'entry.1856075124_sentinel': '',
    'fvv': '1',
    'draftResponse': draftResponse,
    'pageHistory': '0,1',
    'fbzx': '435254377647'
});


console.log("\x1b[36m%s\x1b[0m", "Sedang mengisi presensi....");

axios.post(URI, firstData)
    .then(() => {
        axios.post(URI, nextData)
            .then(() => {
                console.log("\x1b[32m%s\x1b[0m", "Sukses mengisi presensi!");
            });
    });


