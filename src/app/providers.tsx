'use client';

import { Provider } from 'react-redux';
import { store } from '../store/store';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
    primaryColor: 'blue',
});

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <MantineProvider theme={theme}>
                {children}
            </MantineProvider>
        </Provider>
    );
}