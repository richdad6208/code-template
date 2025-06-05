import { create } from 'zustand';
import { ReactNode } from 'react';

export type CommonStatusType = 'success' | 'error';

interface IModal {
    title?: string;
    content?: string;
    action?: () => void;
    iconClass?: string;
    icon?: ReactNode;
    type?: CommonStatusType;
    actionText?: string;
    closeText?: string;
    closeAction?: () => void;
    closeOnClickOutside?: boolean;
    closeOnEscape?: boolean;
    isCloseButton?: boolean;
}

interface IDefaultStore {
    modal: IModal | null;
    setModal: (modal: IModal | null) => void;
}

export const useConfirmModal = create<IDefaultStore>((set) => ({
    modal: null,
    setModal: (modal) => {
        if (modal) {
            set({
                modal: { ...modal, type: modal.type ?? 'success' },
            });
        } else {
            set({ modal: null });
        }
    },
}));
