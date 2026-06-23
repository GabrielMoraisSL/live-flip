import { ValuesEnums } from '@/enums/values';
import { baseTricks, fakieTricks, nollieTricks, switchTricks } from '../mocks';
import { useState } from 'react';
import { calculatePercentage } from '@/lib/helpers';
import { InstancesLabelsMapper } from '../constants';

export function useTricksByInstance() {
  const [activeTab, setActiveTab] = useState<ValuesEnums.Instances>(
    ValuesEnums.Instances.Base,
  );

  //   const { data: tricks } = useQuery({
  //     queryKey: ['tricks', instance], //adicionar para constant global
  //     queryFn: async () => await {},
  //     enabled: !!instance,
  //   });

  // temporario
  function getTricksByInstance() {
    switch (activeTab) {
      case ValuesEnums.Instances.Base:
        return baseTricks;
      case ValuesEnums.Instances.Fakie:
        return fakieTricks;
      case ValuesEnums.Instances.Nollie:
        return nollieTricks;
      case ValuesEnums.Instances.Switch:
        return switchTricks;
    }
  }

  // temporario
  const tricks = getTricksByInstance();

  // temporario
  const percentage = calculatePercentage(
    tricks?.filter((t) => t.isUnlocked)?.length,
    tricks?.length,
  );

  // temporario
  const data = {
    tricks,
    percentage,
  };

  const tabOptions = Object.values(ValuesEnums.Instances).map((instance) => ({
    value: instance,
    label: InstancesLabelsMapper[instance],
  }));

  return {
    states: {
      data,
      activeTab,
      tabOptions,
    },
    handlers: {
      setActiveTab,
    },
  };
}
