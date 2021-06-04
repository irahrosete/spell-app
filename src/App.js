import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './app.css'

// data
import spellData from './data/spells'
import categoryData from './data/categories'
import getSpellFromId from './utils/get-spell'
// components
import SpellList from './components/SpellList'
import NewSpell from './components/NewSpell'
import Nav from './components/Nav'
import Spell from './components/Spell'
import nextId from './utils/next-id'

const App = () => {
  const [spells, setSpells] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setSpells(spellData)
    setCategories(categoryData)
  }, [])

  const createNewSpell = (newSpell) => {
    setSpells([...spells, newSpell])
  }

  return (
    <div >
      <BrowserRouter>
        <Nav />
        <h1>Super Cool Spell App</h1>
        <Switch>
          {/* <SpellList spells={spells} /> */}
          <Route exact path="/"
            render={(props) => <SpellList {...props} spells={spells} />}
          />
          <Route exact path="/spells/new"
            render={(props) => <NewSpell {...props} categories={categories} createNewSpell={createNewSpell} nextId={nextId(spells)} />}
          />
          <Route exact path="/spells/:id"
            render={(props) => <Spell {...props} spell={getSpellFromId(props.match.params.id, spells)} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
