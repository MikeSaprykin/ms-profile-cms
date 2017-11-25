import * as React from 'react';
import {
    ModalWrapper,
    ModalOverlay,
    ModalOverlayWrapper,
    ModalContentWrapper,
    ModalContent
} from './styles';

interface ModalProps {
    onOverlayClick?: Function;
    visible?: boolean;
}

export class Modal extends React.Component<ModalProps, any> {

    componentWillUpdate(nextProps: ModalProps) {
        document.body.style.overflow = nextProps.visible ? 'hidden' : 'visible';
    }

    render() {
        const { onOverlayClick = () => ({}), visible } = this.props;
        return (
            <ModalWrapper className={visible ? 'visible' : null}>
                <ModalOverlayWrapper
                    transitionName='modal-overlay'
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={100}
                >
                    {
                        visible &&
                        <ModalOverlay
                            onClick={() => onOverlayClick()}
                        />
                    }
                </ModalOverlayWrapper>
                <ModalContentWrapper
                    transitionName='modal-content'
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={150}
                >
                {
                    visible &&
                    <ModalContent>
                        {this.props.children}
                    </ModalContent>
                }
                </ModalContentWrapper>
            </ModalWrapper>
        );
    }
}
