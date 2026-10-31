import { thQuickEntry } from './th_quick_entry'
import { thExternalOpenFailedCopy } from './th_surface_external_open_failed'
import { thPreviewCopy } from './th_surface_preview'
import { thProfilesCopy } from './th_surface_profiles'
import { thSettingsCopy } from './th_surface_settings'
import { thSkillDeepLinkCopy } from './th_surface_skill_deep_link'
import { thStatusStackCopy } from './th_surface_status_stack'
// Thai is bundled so language selection also works before connecting to a backend.
import type { Translations } from './types'

/** Authored Thai catalog, without an English merge. Coverage tests inspect this object. */
export const th: Translations = {
  quickEntry: thQuickEntry,
  ...thExternalOpenFailedCopy,
  ...thSettingsCopy,
  ...thSkillDeepLinkCopy,
  ...thProfilesCopy,
  ...thStatusStackCopy,
  ...thPreviewCopy
}
