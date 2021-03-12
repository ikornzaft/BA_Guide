import React from 'react';

import { InputField } from './search-box.styles';

const SearchBox = ({ placeholder, onChange }) => (
  <InputField placeholder={placeholder} onChange={onChange} />
)

export { SearchBox };