import { ScopedStateKey } from '@/ui/utilities/recoil-scope/scopes-internal/types/ScopedStateKey';
import { createScopeInternalContext } from '@/ui/utilities/recoil-scope/scopes-internal/utils/createScopeInternalContext';

type ObjectFilterDropdownScopeInternalContextProps = ScopedStateKey;

export const ObjectFilterDropdownScopeInternalContext =
  createScopeInternalContext<ObjectFilterDropdownScopeInternalContextProps>();
