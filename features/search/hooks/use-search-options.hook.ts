import { ValuesEnums } from '@/enums/values';
import { useState } from 'react';
import { SearchOptionsMapper } from '../constants';

export function useSearchOptions() {
  const [activeTab, setActiveTab] = useState<ValuesEnums.SearchOptions>(
    ValuesEnums.SearchOptions.All,
  );

  const tabOptions = Object.values(ValuesEnums.SearchOptions).map((option) => ({
    value: option,
    label: SearchOptionsMapper[option],
  }));

  return {
    states: {
      tabOptions,
      activeTab,
    },
    actions: {
      setActiveTab,
    },
  };
}
