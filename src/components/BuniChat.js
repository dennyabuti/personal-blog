import React, { useEffect, useMemo, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { useBuniChat, BuniChatWidget } from '@buni.ai/chatbot-react';

const BuniChatWidgetWrapper = () => {
    const token = process.env.REACT_APP_BUNI_CHAT_TOKEN || '';

    const options = useMemo(() => ({
        token,
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
            hideDefaultTrigger: true,
        }
    }), [token]);

    const { isLoaded, isOpen, open, hide } = useBuniChat(options);
    const hasOpenedRef = useRef(false);

    useEffect(() => {
        if (isOpen) {
            hasOpenedRef.current = true;
            return;
        }

        if (isLoaded && hasOpenedRef.current) {
            hide();
        }
    }, [hide, isLoaded, isOpen]);

    if (!token) {
        return null;
    }

    return (
        <>
            <BuniChatWidget />
            {!isOpen && (
                <button
                    type="button"
                    onClick={open}
                    disabled={!isLoaded}
                    aria-label="Open chat"
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px',
                        width: '56px',
                        height: '56px',
                        border: 'none',
                        borderRadius: '9999px',
                        background: '#3b82f6',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 30px rgba(59, 130, 246, 0.35)',
                        cursor: isLoaded ? 'pointer' : 'wait',
                        opacity: isLoaded ? 1 : 0.75,
                        zIndex: 1000000,
                    }}
                >
                    <MessageCircle size={24} strokeWidth={2.25} />
                </button>
            )}
        </>
    );
};

export default BuniChatWidgetWrapper;
