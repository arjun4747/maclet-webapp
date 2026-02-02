import React from 'react';
import Accessories from '../components/Accessories';
import PageTransition from '../components/PageTransition';

export default function AccessoriesPage() {
    return (
        <PageTransition>
            <div style={{ paddingTop: '80px' }}> {/* Pad for fixed navbar */}
                <Accessories />
            </div>
        </PageTransition>
    );
}
