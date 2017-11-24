import * as React from 'react';
import Modal from '../Modal';
import { Button, DangerButton } from '../Button';

import {
    DeleteDescriptionModalWrapper,
    DeleteDescriptionHeading,
    DeleteDescriptionSubHeading,
    DeleteDescriptionButtons
} from './styles';

interface DeleteDescriptionModalProps {
    visible: boolean;
    onClose: Function;
}

export const DeleteDescriptionModal: React.StatelessComponent<DeleteDescriptionModalProps> =
    (
        {
            visible,
            onClose
        }
    ) => (
        <Modal
            visible={visible}
            onOverlayClick={() => onClose()}
        >
            <DeleteDescriptionModalWrapper>
                <DeleteDescriptionHeading>
                    Are you sure you want to delete this description?
                </DeleteDescriptionHeading>
                <DeleteDescriptionSubHeading>
                    This action can't be undone.
                </DeleteDescriptionSubHeading>
                <DeleteDescriptionButtons>
                    <Button onClick={() => onClose()}>
                        Cancel
                    </Button>
                    <DangerButton>
                        Delete
                    </DangerButton>
                </DeleteDescriptionButtons>
            </DeleteDescriptionModalWrapper>
        </Modal>
);
