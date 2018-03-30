import React, { Component } from 'react';

import Recipe from './Recipe'
import Summary from './Summary'
import '../../stylesheets/Menu.css'

const Menu = ({ recipes }) =>
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            { recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>

Menu.displayName = 'Menu'

render(
  <Summary title="Peanut Butter and Jelly"
           ingredients="peanut butter, jelly, bread"
           steps="spread peanut butter and jelly between bread" />,
  document.getElementById('react-container')
)

export default Menu
