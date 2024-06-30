import React from 'react';
import { View } from '@aws-amplify/ui-react';
import { CSSTransition } from 'react-transition-group';

const ForegroundOverlay = ({ children, isVisible, onClose }) => {
  return (
    <CSSTransition
      in={isVisible}
      timeout={300}
      classNames="overlay"
      unmountOnExit
    >
      <View
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex="1000"
        onClick={onClose}
      >
        <CSSTransition
          in={isVisible}
          timeout={300}
          classNames="overlay-content"
        >
          <View
            backgroundColor="white"
            padding="20px"
            borderRadius="10px"
            maxWidth="90%"
            maxHeight="90%"
            overflow="auto"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </View>
        </CSSTransition>
      </View>
    </CSSTransition>
  );
};

export default ForegroundOverlay;