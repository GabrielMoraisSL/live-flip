'use client';
import { Tabs } from '@/components/client';
import { useSearchOptions } from '../hooks';
import { Column, Show } from '@/components/server';
import { ValuesEnums } from '@/enums/values';

export const ResultsList = () => {
  const {
    states: { activeTab, tabOptions },
    actions: { setActiveTab },
  } = useSearchOptions();

  return (
    <Column>
      <Tabs options={tabOptions} value={activeTab} onChange={setActiveTab} />
      <Show when={activeTab !== ValuesEnums.SearchOptions.Publications}>
        <Column>
          <h3>Usuários</h3>
        </Column>
      </Show>
      <Show when={activeTab !== ValuesEnums.SearchOptions.Users}>
        <Column>
          <h3>Publicações</h3>
        </Column>
      </Show>
    </Column>
  );
};
