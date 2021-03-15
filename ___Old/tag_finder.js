/*
  item: String
  return: List of strings
*/
// function baseItemTags(item) {
//   var json = JSON.parse("../RePoE/RePoE/data/base_items.json")
//   console.log();
// }


export function getBaseItemWithName(item) {
  let rawdata = fs.readFileSync(path.resolve(__dirname, '../RePoE/RePoE/data/base_items.min.json'))
  let json = JSON.parse(rawdata)
  for (obj in json) {
    let objData = json[obj]
    if (objData.name == item) {
      return objData
    }
  }
}

export function getModPoolForBaseItem(item) {
  let rawdata = fs.readFileSync(path.resolve(__dirname, '../RePoE/RePoE/data/mods.min.json'))
  let json = JSON.parse(rawdata)
  let itemTags = item.tags
  var mods = []
  for (obj in json) {
    let objData = json[obj]
    if (objData.domain == item.domain && (objData.generation_type == 'prefix' || objData.generation_type == 'suffix')) {
      let objSpawnWeights = objData.spawn_weights
      for (spawnWeight of objSpawnWeights) {
        if (itemTags.includes(spawnWeight.tag) && spawnWeight.weight > 0) {
          mods.push(objData)
        }
      }
    }
  }
  return [...new Set(mods)]
}

export function getStatTranslation(stat) {
  let rawdata = fs.readFileSync(path.resolve(__dirname, '../RePoE/RePoE/data/stat_translations.min.json'))
  let json = JSON.parse(rawdata)
  for (obj in json) {
    if (json[obj].ids.includes(stat.id)) {
      return stat.min + '-' + stat.max + ' ' + json[obj].English[0].string
    }
  }
}
