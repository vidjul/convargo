'use strict';

//list of truckers
//useful for ALL 5 exercises
var truckers = [{
  'id': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'name': 'les-routiers-bretons',
  'pricePerKm': 0.05,
  'pricePerVolume': 5
}, {
  'id': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'name': 'geodis',
  'pricePerKm': 0.1,
  'pricePerVolume': 8.5
}, {
  'id': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'name': 'xpo',
  'pricePerKm': 0.10,
  'pricePerVolume': 10
}];

//list of current shippings
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var deliveries = [{
  'id': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'shipper': 'bio-gourmet',
  'truckerId': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'distance': 100,
  'volume': 4,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'convargo': 0
  }
}, {
  'id': '65203b0a-a864-4dea-81e2-e389515752a8',
  'shipper': 'librairie-lu-cie',
  'truckerId': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'distance': 500,
  'volume': 12,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'convargo': 0
  }
}, {
  'id': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'shipper': 'otacos',
  'truckerId': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'distance': 1250,
  'volume': 30,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'convargo': 0
  }
}];

//list of actors for payment
//useful from exercise 5
const actors = [{
  'deliveryId': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '65203b0a-a864-4dea-81e2-e389515752a8',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}];

function searchTruck(truckerId) {
  for (var i = 0; i < truckers.length; i++) {
    if (truckers[i].id == truckerId) {
      return truckers[i];
    }
  }
  return false;
}

for (var i = 0; i < deliveries.length; i++) {
  var trucker = searchTruck(deliveries[i].truckerId)
  if (trucker) {
    deliveries[i].price = deliveries[i].distance * trucker.pricePerKm + deliveries[i].volume * trucker.pricePerVolume;
    if (deliveries[i].volume > 5) {
      if (deliveries[i].volume > 10) {
        if (deliveries[i].volume > 25) {
          deliveries[i].price *= 0.5;
        } else {
          deliveries[i].price *= 0.7;
        }
      } else {
        deliveries[i].price *= 0.9;
      }
      if (deliveries[i].options.deductibleReduction) {
        deliveries[i].price += deliveries[i].volume;
      }
      deliveries[i].price = Math.round(deliveries[i].price * 100)/100;
      var commission = Math.round(deliveries[i].price * 30)/100;
      deliveries[i].commission.convargo = commission/2;
      deliveries[i].commission.insurance = commission/2;
    }
  }
  else {
    console.log('error');
  }
}

console.log(truckers);
console.log(deliveries);
console.log(actors);
