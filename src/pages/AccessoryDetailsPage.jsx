import React from 'react';
import AccessoryDetails from '../components/AccessoryDetails';
import PageTransition from '../components/PageTransition';

export default function AccessoryDetailsPage() {
    return (
        <PageTransition>
            <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
                <AccessoryDetails />
            </div>
        </PageTransition>
    );
}
