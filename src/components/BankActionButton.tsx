import * as React from 'react';
import { BankAction } from '../types';
import cxs from 'cxs';
import cx from 'classnames';

const styles = {
  container: cxs({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    pointerEvents: 'all',
  }),
  inner: cxs({
    fontFamily: '"Nanum Pen Script", cursive',
    fontWeight: 'bold',
    textShadow: `0 -4px 0 rgba(0, 0, 0, .3)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '10px',
    height: '75%',
    marginLeft: '-4px',

    ' h3': {
      fontSize: '22px',
      color: 'rgba(255, 255, 255, .55)',
      margin: '0px'
    },
    ' button': {
      opacity: 0,
      fontFamily: '"Nanum Pen Script", cursive',
      fontWeight: 'bold',
      fontSize: '36px',
      color: 'rgba(255, 255, 255, .8)',
      backgroundColor: 'transparent',
      border: 'none',
      textAlign: 'left',
      margin: '-10px 16px 0 0',
      outline: 'none !important'
    }
  }),
  innerClickable: cxs({
    cursor: 'pointer',
    ' button': {
      opacity: 1,
      cursor: 'pointer',
    },
    ':hover': {
      background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%)'
    },
    ':hover h3': {
      color: 'rgba(255, 255, 255, .7)',
    },
    ':hover button': {
      color: 'rgba(255, 255, 255, 1)',
    }
  })
}

export const BankActionButton: React.FC<{
  clickable: boolean,
  onClick: () => void,
  action: BankAction,
}> = props => {

  return (
    <div className={styles.container}>
      <div
        className={cx(
          styles.inner,
          props.clickable && styles.innerClickable
        )}
        onClick={props.clickable ? props.onClick : undefined}
      >
        <h3>
          {(() => {
            switch (props.action) {
              case BankAction.Move:
                return 'Move tile';
              case BankAction.Recolor:
                return 'Recolor tile';
              case BankAction.PlaceInRow:
                return 'Place tile in row';
            }
          })()}
        </h3>
        <button>
          Use action
        </button>
      </div>
    </div>
  );
};
