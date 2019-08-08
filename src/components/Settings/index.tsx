import * as React from 'react';

import { ConfigurationContainer, ConfigurationSection, Switch, ToggleButton } from './index.styles';

const CONFIGURATION_VALUE = {
  activity: 'activity',
  prepare: 'preparation'
};

const Settings = () => {
  const [checkedActivity, setCheckedActivity] = React.useState(localStorage.getItem(CONFIGURATION_VALUE.activity) === 'true');
  const [isPreparing, setIsPreparing] = React.useState(localStorage.getItem(CONFIGURATION_VALUE.prepare) !== 'false');
  const [isActive, setActive] = React.useState(false);

  const save = (e, name: string) => {
    localStorage.setItem(name, e.target.value.toString());
  };

  return (
    <>
      <ToggleButton onClick={() => setActive(true)}>
        <img alt={'Settings'} src="https://img.icons8.com/ios-filled/50/000000/settings.png"/>
      </ToggleButton>
      <ConfigurationContainer style={{ left: isActive ? 0 : '-100%' }}>
        <ToggleButton onClick={() => setActive(false)}>
          <img alt={'Close'} src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/>
        </ToggleButton>

        <h2>Configuration</h2>

        <ConfigurationSection>
          <h6>Keep the screen active all the time</h6>
          <Switch onClick={() => setCheckedActivity(!checkedActivity)}>
            <input type="checkbox" checked={checkedActivity} onChange={e => save(e, CONFIGURATION_VALUE.activity)}/>
            <div/>
          </Switch>
        </ConfigurationSection>

        <ConfigurationSection>
          <h6>Add preparation step</h6>
          <Switch onClick={() => setIsPreparing(!isPreparing)}>
            <input type="checkbox" checked={isPreparing} onChange={e => save(e, CONFIGURATION_VALUE.activity)}/>
            <div/>
          </Switch>
        </ConfigurationSection>
      </ConfigurationContainer>
    </>
  );
};

export default Settings;
