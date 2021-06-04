import React from 'react'
import Spell from './Spell'

const SpellList = (props) => {
  const { spells } = props
  return (
    <div>
      {spells.sort((a, b) => a.name.charAt(0).toLowerCase() > b.name.charAt(0).toLowerCase() ? 1 : -1).map(spell => {
        return <Spell key={spell.id} spell={spell} />
      })}
    </div>
  )
}

export default SpellList
