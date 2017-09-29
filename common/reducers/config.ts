import {
  ChangeGasPriceAction,
  ChangeLanguageAction,
  ChangeNodeAction,
  ConfigAction,
  ToggleOfflineAction
} from 'actions/config';
import { TypeKeys } from 'actions/config/constants';
import { languages, NODES } from '../config/data';

export interface State {
  // FIXME
  languageSelection: string;
  nodeSelection: string;
  gasPriceGwei: number;
  offline: boolean;
}

export const INITIAL_STATE: State = {
  languageSelection: 'en',
  nodeSelection: Object.keys(NODES)[0],
  gasPriceGwei: 21,
  offline: false
};

function changeLanguage(state: State, action: ChangeLanguageAction): State {
  return {
    ...state,
    languageSelection: action.payload
  };
}

function changeNode(state: State, action: ChangeNodeAction): State {
  return {
    ...state,
    nodeSelection: action.payload
  };
}

function changeGasPrice(state: State, action: ChangeGasPriceAction): State {
  return {
    ...state,
    gasPriceGwei: action.payload
  };
}

function toggleOffline(state: State, action: ToggleOfflineAction): State {
  return {
    ...state,
    offline: !state.offline
  };
}

export function config(
  state: State = INITIAL_STATE,
  action: ConfigAction
): State {
  switch (action.type) {
    case TypeKeys.CONFIG_LANGUAGE_CHANGE:
      return changeLanguage(state, action);
    case TypeKeys.CONFIG_NODE_CHANGE:
      return changeNode(state, action);
    case TypeKeys.CONFIG_GAS_PRICE:
      return changeGasPrice(state, action);
    case TypeKeys.CONFIG_TOGGLE_OFFLINE:
      return toggleOffline(state, action);
    default:
      return state;
  }
}
