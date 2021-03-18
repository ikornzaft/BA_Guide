import React from 'react';

import { InputField } from './search-box.styles';

const SearchBox = ({ placeholder, onChange, scroll }) => (
  <InputField className={scroll} placeholder={placeholder} onChange={onChange} />
)

export { SearchBox };