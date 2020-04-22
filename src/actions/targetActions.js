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

export const { success: getTargetsSuccess } = getTargets;
export const { success: createTargetSuccess } = createTarget;
export const { success: getTopicsSuccess } = getTopics;
