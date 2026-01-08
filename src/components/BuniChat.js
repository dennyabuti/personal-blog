import React, { useEffect } from 'react';
import { BuniChatProvider, BuniChatWidget, BuniChatFloatingButton, useBuniChat } from '@buni.ai/chatbot-react';

const BuniChatComponent = () => {
    const { show, isReady } = useBuniChat();

    useEffect(() => {
        if (isReady) {
            show();
        }
    }, [isReady, show]);

    return (
        <>
            <BuniChatFloatingButton />
            <BuniChatWidget />
        </>
    );
};

const BuniChatWidgetWrapper = () => {
    return (
        <BuniChatProvider
            options={{
                token: process.env.REACT_APP_BUNI_CHAT_TOKEN || '',
                config: {
                    theme: 'light',
                    primaryColor: '#3b82f6',
                    position: 'bottom-right',
                    width: 370,
                    height: 680,
                    showMinimize: true,
                    initialMinimized: true,
                    allowMinimize: true,
                    showTriggerText: false,
                }
            }}
        >
            <BuniChatComponent />
        </BuniChatProvider>
    );
};

export default BuniChatWidgetWrapper;
