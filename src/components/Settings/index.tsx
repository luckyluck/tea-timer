import * as React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { ConfigurationContainer, ToggleButton } from './index.styles';
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
        <MenuIcon/>
      </ToggleButton>
      <ConfigurationContainer style={{ left: isActive ? 0 : '-100%' }}>
        <ToggleButton onClick={() => setActive(false)}>
          <CloseIcon/>
        </ToggleButton>

        <h2>Configuration</h2>

        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={!!state.activity}
                onChange={() => update({ type: SET_ACTIVITY, payload: !state.activity })}
                color="primary"
              />
            }
            label="Keep the screen active all the time"
          />
        </FormGroup>

        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={!!state.preparation}
                onChange={() => update({ type: PREPARATION, payload: !state.preparation })}
                color="primary"
              />
            }
            label="Add preparation step"
          />
        </FormGroup>
      </ConfigurationContainer>
    </>
  );
};

export default Settings;
