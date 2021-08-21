const LOAD_FILMS = 'LOAD_FILMS';
const CLEAN_FILMS = 'CLEAN_FILMS';
const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
const SWITCH_LOADING_FILMS_TO_TRUE = 'SWITCH_LOADING_FILMS_TO_TRUE';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const LOAD_MAIN_FILM = 'LOAD_MAIN_FILM';
const GET_LATEST_FILM_ID = 'GET_LATEST_FILM_ID';
const SWITCH_ABOUT_FILM = 'SWITCH_ABOUT_FILM';
const LOAD_GENRES = 'LOAD_GENRES';
const SWITCH_ITEM_TO_INFO_MODE = 'SWITCH_ITEM_TO_INFO_MODE';
const SWITCH_ITEM_TO_MAIN_MODE = 'SWITCH_ITEM_TO_MAIN_MODE';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SWITCH_TAB = 'SWITCH_TAB';

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
