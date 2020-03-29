function value(){
  var paketData={
    type: 'Telkomsel',
    size: ['4Gb', '6Gb', '13Gb'],
    tahun: 2020
  }
  paketData.size[1]=150000000;
  console.log(paketData.size[1])
}
value()
