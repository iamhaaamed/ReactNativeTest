import React from 'react';

import Spinner from 'react-native-loading-spinner-overlay';
import {Colors} from '../../styles';

export default ({visible}) => {
  return (
    <Spinner
      visible={visible}
      textContent={'loading'}
      textStyle={{color: Colors.white}}
    />
  );
};
