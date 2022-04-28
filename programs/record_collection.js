// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    // const val = prop

    if (prop !== 'tracks') {

      if (value.length != 0) {
        records[id][prop] = value;
      }
      else {
        delete records[id][prop];
      }
    }
    else if (prop === 'tracks') {
      if (records[id].hasOwnProperty(prop) === false) {
        records[id][prop] = [value];
      }
      else if (records[id].hasOwnProperty(prop) === true && value.length != 0) {
        records[id][prop].push(value);
      }
      else if (records[id].hasOwnProperty(prop) === true && value.length == 0) {
        delete records[id][prop];
      }
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log(recordCollection);