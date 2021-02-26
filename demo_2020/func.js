const fundAmount = {
  110011: {
    name: '易方达中小盘混合',
    amount: 714.7,
    price: '9.9250',
    unitPrice: 9.4159,
    earnings: -24.73,
    priceDate: '2021-02-23',
  },
  160222: {
    name: '国泰国证食品饮料行业(LOF)',
    amount: 1751.51,
    price: '1.4010',
    unitPrice: 1.4133,
    earnings: -70.76,
    priceDate: '2021-02-23',
  },
  161725: {
    name: '招商中证白酒指数(LOF)',
    amount: 3055.15,
    price: '1.4360',
    unitPrice: 15040,
    earnings: -120.42,
    priceDate: '2021-02-23',
  },
  163402: {
    name: '兴全趋势投资混合(LOF)',
    amount: 1035.27,
    price: '1.1020',
    unitPrice: 1.0644,
    earnings: 16.35,
    priceDate: '2021-02-23',
  },
  320007: {
    name: '诺安成长混合',
    amount: 0,
    price: '1.9410',
    unitPrice: 0,
    earnings: 0,
    priceDate: '2021-01-26',
  },
  502003: {
    name: '易方达中证军工(LOF)',
    amount: 451.01,
    price: '1.3480',
    unitPrice: 1.5076,
    earnings: -2.94,
    priceDate: '2021-02-23',
  },
  '001186': {
    name: '富国文体健康股票A',
    amount: 1942.11,
    price: '2.5260',
    unitPrice: 2.3331,
    earnings: 3.08,
    priceDate: '2021-02-23',
  },
  '001838': {
    name: '国投瑞银国家安全混合',
    amount: 439.5,
    price: '1.2430',
    unitPrice: 1.4141,
    earnings: -2.83,
    priceDate: '2021-02-23',
  },
  '003096': {
    name: '中欧医疗健康混合C',
    amount: 246.72,
    price: '3.6210',
    unitPrice: 3.866,
    earnings: -15.67,
    priceDate: '2021-02-23',
  },
  '005534': {
    name: '华夏新时代混合(QDII)',
    amount: 976.9,
    price: '2.5276',
    unitPrice: 0,
    earnings: 0,
    priceDate: '2021-02-22',
  },
  '005827': {
    name: '易方达蓝筹精选混合',
    amount: 1016.56,
    price: '3.2979',
    unitPrice: 3.2441,
    earnings: -20.87,
    priceDate: '2021-02-23',
  },
}

let finalArr = []
for (const key in fundAmount) {
  if (Object.hasOwnProperty.call(fundAmount, key)) {
    const element = fundAmount[key]
    const elefinal = {
      code: key,
      name: element.name,
    }
    finalArr.push(elefinal)
  }
}

console.log('finalArr,', finalArr.length)

const funds = [
  { code: '005827', name: '易方达蓝筹精选混合', remark: 'long' },
  { code: '001186', name: '富国文体健康股票A', remark: 'long' },

  { code: '110011', name: '易方达中小盘混合', remark: 'temp' },
  { code: '161725', name: '招商中证白酒指数(LOF)', remark: 'temp' },
  { code: '160222', name: '国泰国证食品饮料行业(LOF)', remark: 'temp' },
  { code: '160632', name: '鹏华酒', remark: 'temp' },

  { code: '320007', name: '诺安成长混合', remark: 'temp' },
  { code: '519674', name: '银河创新成长混合', remark: 'temp' },

  { code: '001838', name: '国投瑞银国家安全混合', remark: 'temp' },
  { code: '003096', name: '中欧医疗健康混合C', remark: 'temp' },

  { code: '163402', name: '兴全趋势投资混合(LOF)', remark: 'not' },
]

console.log('funds', JSON.stringify(funds))
