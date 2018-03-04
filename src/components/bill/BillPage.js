import React from 'react';
import { TopNav } from '../common/Topnav';
import { Chatbar } from '../common/Chatbar';

class BillPage extends React.Component {

    render() {
        return (
            <div>
                <TopNav />
                <Chatbar />
            </div>
            
        );
    }
}

export default BillPage;
