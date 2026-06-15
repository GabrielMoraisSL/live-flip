import { LabelsEnums } from '@/enums/labels';
import { ValuesEnums } from '@/enums/values';

export const InstancesLabelsMapper: Record<string, string> = {
  [ValuesEnums.Instances.Base]: LabelsEnums.Instances.Base,
  [ValuesEnums.Instances.Fakie]: LabelsEnums.Instances.Fakie,
  [ValuesEnums.Instances.Nollie]: LabelsEnums.Instances.Nollie,
  [ValuesEnums.Instances.Switch]: LabelsEnums.Instances.Switch,
};
