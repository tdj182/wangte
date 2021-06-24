import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const App = (props) => {

  return (
    <div>
      <ProSidebar>
        <Menu iconShape="square">
          {/* <MenuItem icon={<FaGem />}>Dashboard</MenuItem> */}
          <MenuItem>Home</MenuItem>
          <SubMenu title="Calculators">
            <MenuItem>Bounty Reward</MenuItem>
            <MenuItem>Business</MenuItem>
            <MenuItem>Crafting Duration</MenuItem>
            <MenuItem>CR x Creatures to Lvl y</MenuItem>
            <MenuItem>Dice Probabilities</MenuItem>
            <MenuItem>Jail Sentence</MenuItem>
            <MenuItem>Foot Travel Duration</MenuItem>
            <MenuItem>Horizon Calculator</MenuItem>
            <MenuItem>Level Demographics</MenuItem>
            <MenuItem>Cargo Transport Revenue</MenuItem>
            <MenuItem>Currency Weight</MenuItem>
            <MenuItem>Training</MenuItem>
          </SubMenu>
          <SubMenu title="Generators">
            <MenuItem>Battle Maps</MenuItem>
            <MenuItem>Creature (Picker)</MenuItem>
            <MenuItem>Encounter</MenuItem>
            <MenuItem>Item (Picker)</MenuItem>
            <MenuItem>Magic Item Shop</MenuItem>
            <MenuItem>Mysterious Island</MenuItem>
            <MenuItem>NPC</MenuItem>
            <MenuItem>Ship</MenuItem>
            <MenuItem>Shipwreck</MenuItem>
            <MenuItem>Spell (Picker)</MenuItem>
            <MenuItem>Weather</MenuItem>
            <MenuItem>Wild Magic Surge (Picker)</MenuItem>
          </SubMenu>
          <SubMenu title="Homebrew">
            <MenuItem>Adjusting Races</MenuItem>
            <MenuItem>Animal Husbandry</MenuItem>
            <MenuItem>Arrows</MenuItem>
            <MenuItem>Beer Brewing</MenuItem>
            <MenuItem>Crafting</MenuItem>
            <MenuItem>Divine Ranks and Powers</MenuItem>
            <MenuItem>Doing Time</MenuItem>
            <MenuItem>Enlarge/Reduce Spell</MenuItem>
            <MenuItem>Fall Damage</MenuItem>
            <MenuItem>Flanking</MenuItem>
            <MenuItem>Foraging/Harvesting</MenuItem>
            <MenuItem>High-level Spells</MenuItem>
            <MenuItem>Gemstones & Control Gems</MenuItem>
            <MenuItem>Identifying a Spell Being Cast</MenuItem>
            <MenuItem>Improving Ability Scores</MenuItem>
            <MenuItem>Intelligence</MenuItem>
            <MenuItem>Item Prices</MenuItem>
            <MenuItem>Kibble's Crafting</MenuItem>
            <MenuItem>Medicine Check for Determining Health</MenuItem>
            <MenuItem>Mounts & Vehicles</MenuItem>
            <MenuItem>Negotiating a Price</MenuItem>
            <MenuItem>Ship Navigation</MenuItem>
            <MenuItem>Sprint</MenuItem>
            <MenuItem>Street Drugs</MenuItem>
            <MenuItem>Tavern Games</MenuItem>
            <MenuItem>The Economy</MenuItem>
            <MenuItem>Training a Skill</MenuItem>
            <MenuItem>Traveling</MenuItem>
          </SubMenu>
          <SubMenu title="Tools">
            <MenuItem>Bounty Board</MenuItem>
            <MenuItem>Bounty Board (TEST)</MenuItem>
            <MenuItem>Calendar</MenuItem>
            <MenuItem>Character Inventory</MenuItem>
            <MenuItem>Combat Tracker</MenuItem>
            <MenuItem>Ship Expenses</MenuItem>
            <MenuItem>Spell Helper</MenuItem>
          </SubMenu>
          <SubMenu title="Data Viz">
            <MenuItem>Backgrounds</MenuItem>
            <MenuItem>Bestiary</MenuItem>
            <MenuItem>Items</MenuItem>
            <MenuItem>Races</MenuItem>
            <MenuItem>Spells</MenuItem>
          </SubMenu>
          <MenuItem>Donate</MenuItem>

        </Menu>
      </ProSidebar>
    </div>
  );
}

export default App;