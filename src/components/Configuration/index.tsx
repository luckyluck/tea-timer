import * as React from 'react';

import { ConfigurationContainer, ConfigurationSection, Switch } from './index.styles';

const CONFIGURATION_VALUE = {
  activity: 'activity',
  prepare: 'preparation'
};

const Configuration = () => {
  const [checkedActivity, setCheckedActivity] = React.useState(localStorage.getItem(CONFIGURATION_VALUE.activity) === 'true');
  const [isPreparing, setIsPreparing] = React.useState(localStorage.getItem(CONFIGURATION_VALUE.prepare) !== 'false');

  const toggleConfiguration = (name: string): void => {
    if (name === CONFIGURATION_VALUE.activity) {
      localStorage.setItem(name, (!checkedActivity).toString());
      setCheckedActivity(!checkedActivity);
    }

    if (name === CONFIGURATION_VALUE.prepare) {
      localStorage.setItem(name, (!isPreparing).toString());
      setIsPreparing(!isPreparing);
    }
  };

  return (
    <ConfigurationContainer>
      <h2>Configuration</h2>

      <ConfigurationSection>
        <h6>Keep the screen active all the time</h6>
        <Switch onClick={() => toggleConfiguration(CONFIGURATION_VALUE.activity)}>
          <input type="checkbox" checked={checkedActivity}/>
          <div/>
        </Switch>
      </ConfigurationSection>

      <ConfigurationSection>
        <h6>Add preparation step</h6>
        <Switch onClick={() => toggleConfiguration(CONFIGURATION_VALUE.prepare)}>
          <input type="checkbox" checked={isPreparing}/>
          <div/>
        </Switch>
      </ConfigurationSection>
    </ConfigurationContainer>
  );
};

export default Configuration;
