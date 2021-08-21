import {
  LOAD_FILMS, CLEAN_FILMS, CHANGE_SEARCH_VALUE, SWITCH_LOADING_FILMS_TO_TRUE, CHANGE_CURRENT_PAGE,
  LOAD_MAIN_FILM, GET_LATEST_FILM_ID, SWITCH_ABOUT_FILM, LOAD_GENRES, SWITCH_ITEM_TO_INFO_MODE,
  SWITCH_ITEM_TO_MAIN_MODE, OPEN_MODAL, CLOSE_MODAL, SWITCH_TAB,
} from './constants';

export const loadFilmsAction = (payload) => ({ type: LOAD_FILMS, payload });
export const cleanFilmsAction = () => ({ type: CLEAN_FILMS });
export const switchLoadingFilmsToTrueAction = () => ({ type: SWITCH_LOADING_FILMS_TO_TRUE });
export const changeCurrentPageAction = () => ({ type: CHANGE_CURRENT_PAGE });
export const changeSearchValueAction = (payload) => ({ type: CHANGE_SEARCH_VALUE, payload });
export const loadMainFilmAction = (payload) => ({ type: LOAD_MAIN_FILM, payload });
export const getLatestFilmIdAction = (payload) => ({ type: GET_LATEST_FILM_ID, payload });
export const switchAboutFilmAction = () => ({ type: SWITCH_ABOUT_FILM });
export const loadGenresAction = (payload) => ({ type: LOAD_GENRES, payload });
export const switchItemToInfoModeAction = (payload) => ({
  type: SWITCH_ITEM_TO_INFO_MODE, payload,
});
export const switchItemToMainModeAction = (payload) => ({
  type: SWITCH_ITEM_TO_MAIN_MODE, payload,
});
export const openModalAction = (payload) => ({ type: OPEN_MODAL, payload });
export const closeModalAction = () => ({ type: CLOSE_MODAL });
export const switchTabAction = (payload) => ({ type: SWITCH_TAB, payload });
