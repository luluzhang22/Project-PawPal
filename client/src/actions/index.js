import { utilAction } from './config';

export const closeModal = (obj) => ({
    type: utilAction.CLOSE_MODAL,
    obj
});

export const setVisibilityFilter = (type, filter) => ({
    type,
    filter
});

export const openAlter = (message) => ({
    type: utilAction.OPEN_MODAL,
    modalType: utilAction.ALTER,
    modalProps: message
});

export function modifyModalProps(modalProps) {
    return {
        type: utilAction.MODIFY_MODAL_PROPS,
        modalProps
    };
}
