import { createThunk } from '@rootstrap/redux-tools';
import targetService from 'services/targetService';
import parseError from 'utils/parseError';

export const getTargets = createThunk('GET_TARGETS', async () => {
  try {
    const {
      data: { targets },
    } = await targetService.getTargets();
    return targets;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const getTopics = createThunk('GET_TOPICS', async () => {
  try {
    const {
      data: { topics },
    } = await targetService.getTopics();
    return topics;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const { success: getTargetsSuccess } = getTargets;
export const { success: getTopicsSuccess } = getTopics;
