import React, { PureComponent } from 'react'

 class   extends PureComponent {
    render() {
        return (
            <div>
                {/* pure componnent only renders once as shouldcomponentmonunt by default sends false but
                in case of regular it sends true for no to stop stop rendering we use memo in which only when
                state is change a regular component load else not */}
            </div>
        )
    }
}

export default PureComponent
