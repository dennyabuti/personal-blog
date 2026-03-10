import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useBuniChat, BuniChatWidget } from '@buni.ai/chatbot-react';
import { useTheme } from '../contexts/ThemeContext';

const BuniChatWidgetInstance = ({ chatTheme, onAutoOpenHandled, onOpenStateChange, shouldAutoOpen, token }) => {
    const hasOpenedRef = useRef(false);

    const options = useMemo(() => ({
        token,
        config: {
            theme: chatTheme,
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
    }), [chatTheme, token]);

    const { isLoaded, isOpen, open, hide } = useBuniChat(options);
    const isButtonVisible = !isOpen;

    useEffect(() => {
        onOpenStateChange(isOpen);
    }, [isOpen, onOpenStateChange]);

    useEffect(() => {
        if (isLoaded && shouldAutoOpen) {
            open();
            onAutoOpenHandled();
        }
    }, [isLoaded, onAutoOpenHandled, open, shouldAutoOpen]);

    useEffect(() => {
        if (isOpen) {
            hasOpenedRef.current = true;
            return;
        }

        if (isLoaded && hasOpenedRef.current) {
            hide();
        }
    }, [hide, isLoaded, isOpen]);

    return (
        <>
            <BuniChatWidget />
            {isButtonVisible && (
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

const BuniChatWidgetWrapper = () => {
    const token = process.env.REACT_APP_BUNI_CHAT_TOKEN || '';
    const { theme } = useTheme();
    const chatTheme = theme === 'dark' ? 'dark' : 'light';
    const previousThemeRef = useRef(chatTheme);
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);
    const [shouldAutoOpen, setShouldAutoOpen] = useState(false);

    useEffect(() => {
        if (previousThemeRef.current !== chatTheme) {
            if (isWidgetOpen) {
                setShouldAutoOpen(true);
            }

            previousThemeRef.current = chatTheme;
        }
    }, [chatTheme, isWidgetOpen]);

    if (!token) {
        return null;
    }

    return (
        <BuniChatWidgetInstance
            key={chatTheme}
            chatTheme={chatTheme}
            onAutoOpenHandled={() => setShouldAutoOpen(false)}
            onOpenStateChange={setIsWidgetOpen}
            shouldAutoOpen={shouldAutoOpen}
            token={token}
        />
    );
};

export default BuniChatWidgetWrapper;
