import { createThunk } from '@rootstrap/redux-tools';
import targetService from 'services/targetService';

export const getTargets = createThunk('GET_TARGETS', async () => {
  const {
    data: { targets },
  } = await targetService.getTargets();
  return targets;
});

export const getTopics = createThunk('GET_TOPICS', async () => {
  const {
    data: { topics },
  } = await targetService.getTopics();
  return topics;
});

export const createTarget = createThunk('CREATE_TARGET', async target => {
  const { data } = await targetService.createTarget(target);
  return data;
});

export const deleteTarget = createThunk('DELETE_TARGET', targetService.deleteTarget);

export const { success: getTargetsSuccess } = getTargets;
<<<<<<< HEAD
export const { success: createTargetSuccess, reset: createTargetReset } = createTarget;
=======
export const { success: createTargetSuccess } = createTarget;
export const { reset: createTargetReset } = createTarget;
>>>>>>> Add: Error message when user attempts to create more than 10 targets
export const { success: getTopicsSuccess } = getTopics;
