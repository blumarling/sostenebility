import { createSelector } from "reselect"

export const selectActiveModals = createSelector(
  state => state.modals,
  modals => modals
)