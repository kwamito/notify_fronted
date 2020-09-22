import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels(props) {
  const isDark = window.localStorage.getItem('isDark')
  const [state, setState] = React.useState({
    checkedA: props.dec,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    
      <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} onClick={props.handleClick} name="checkedA" />}
        label={props.label}
      />
      
  
  );
}