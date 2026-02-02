import React from 'react';
import LaptopGrid from '../components/LaptopGrid';
import PageTransition from '../components/PageTransition';

export default function LaptopsPage() {
    return (
        <PageTransition>
            <div style={{ paddingTop: '80px' }}>
                <LaptopGrid />
            </div>
        </PageTransition>
    );
}
