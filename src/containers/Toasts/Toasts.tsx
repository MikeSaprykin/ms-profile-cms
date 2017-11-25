import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { map } from 'lodash';

import { ToastsContainer, ToastsList } from './styles';
import { State, Toast, toastsStateSelector, hideToast } from '../../store';
import ToastItem from '../../components/ToastItem';

interface ToastsProps extends Dispatch<any> {
    toasts?: { [key: string]: Toast };
    hideToast?: any;
}

export class Toasts extends React.Component<ToastsProps> {

    renderToasts() {
        const { toasts, hideToast } = this.props;
        return map(toasts, toast => (
            <ToastItem
                key={toast.id}
                toast={toast}
                onCloseClick={id => hideToast(id)}
            />
        ));
    }

    render() {
        return (
            <ToastsContainer>
                <ToastsList
                    transitionName='toast'
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={200}
                >
                    {this.renderToasts()}
                </ToastsList>
            </ToastsContainer>
        );
    }
}

const mapStateToProps = (state: State) => ({
   toasts: toastsStateSelector(state)
});

export default connect<any>(mapStateToProps, { hideToast })(Toasts);
