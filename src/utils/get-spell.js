const getSpellFromId = (id, spells) => {
  return spells.find((spell) => spell.id === parseInt(id))
}

export default getSpellFromId