import React from 'react';
import LaptopDetails from '../components/LaptopDetails';
import PageTransition from '../components/PageTransition';

export default function LaptopDetailsPage() {
    return (
        <PageTransition>
            <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
                <LaptopDetails />
            </div>
        </PageTransition>
    );
}
