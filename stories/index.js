import React from 'react';
import { storiesOf } from '@storybook/react';
import { PageButton } from '../src/components/pageButton';

storiesOf('Button', module)
    .add('with red text', () => (
        <PageButton
            text='Klikk meg'
            id='id'
            onClick={() => {}}
        />
    ));
  