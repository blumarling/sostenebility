import { createSelector } from "reselect"

export const selectHomeModalSeen = createSelector(
  state => state.common,
  common => common.homeModalSeen
)