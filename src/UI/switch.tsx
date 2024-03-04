import React from 'react';
import { Switch } from 'antd';

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const Check: React.FC = () => <Switch defaultChecked onChange={onChange} />;

export default Check;