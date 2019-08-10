import * as React from 'react';

import { ConfigurationContainer, ConfigurationSection, Switch, ToggleButton } from './index.styles';
import { State, SET_ACTIVITY, PREPARATION } from '../../utils/store';

interface Props {
  state: State,
  update: Function,
}

const Settings: React.FunctionComponent<Props> = ({ state, update }: Props) => {
  const [isActive, setActive] = React.useState(false);

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
          <Switch onClick={() => update({ type: SET_ACTIVITY, payload: !state.activity })}>
            <input type="checkbox" checked={state.activity} onChange={() => {}}/>
            <div/>
          </Switch>
        </ConfigurationSection>

        <ConfigurationSection>
          <h6>Add preparation step</h6>
          <Switch onClick={() => update({ type: PREPARATION, payload: !state.preparation })}>
            <input type="checkbox" checked={state.preparation} onChange={() => {}}/>
            <div/>
          </Switch>
        </ConfigurationSection>
      </ConfigurationContainer>
    </>
  );
};

export default Settings;
