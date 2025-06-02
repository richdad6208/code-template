'use client';

import { useConfirmModal } from '@/src/store/use-confirm-modal';
import { Button, Modal } from '@mantine/core';

export default function ConfirmModal() {
    const { modal, setModal } = useConfirmModal();

    const map = {
        success: {
            title: 'Success',
            content: '요청이 성공적으로 처리되었습니다.',
        },
        error: {
            title: 'Error',
            content: '죄송합니다. 요청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
        },
    };

    return (
        <Modal
            closeOnClickOutside={modal?.closeOnClickOutside ?? false}
            closeOnEscape={modal?.closeOnEscape ?? false}
            opened={!!modal}
            onClose={() => setModal(null)}
            withCloseButton={false}
            yOffset="calc(50vh - 126px)"
            xOffset={0}
            classNames={{
                root: `w-[438px]!`,
                content: 'rounded-[16px]!',
                header: 'p-0! text-lg font-semibold text-gray-800',
                close: 'text-gray-500 hover:text-gray-700',
                body: 'p-0!',
            }}
        >
            {modal && (
                <div className="min-h-[252px] max-h-[252px] py-8 px-10 flex items-center font-gothic">
                    <div className="space-y-8 flex-auto">
                        <div className="text-center space-y-4">
                            <div className=" text-xl font-bold">
                                {modal?.title ?? map[modal.type!].title}
                            </div>
                            <div className="text-[#717171] font-medium leading-6 tracking-[-0.32px]">
                                {modal?.content ?? map[modal.type!].content}
                            </div>
                        </div>
                        <div className="flex justify-center gap-2">
                            {((modal?.isCloseButton ?? false) || modal.closeAction) && (
                                <Button
                                    size="md"
                                    onClick={() => {
                                        if (modal?.closeAction) {
                                            modal.closeAction();
                                        }
                                        setModal(null);
                                    }}
                                >
                                    {modal?.closeText ?? 'Cancel'}
                                </Button>
                            )}

                            <Button
                                size="md"
                                onClick={() => {
                                    if (modal?.action) {
                                        modal.action();
                                    }
                                    setModal(null);
                                }}
                            >
                                {modal?.actionText ?? 'OK'}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
}
