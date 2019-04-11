import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { PageButton } from '../src/components';



storiesOf('Button', module)
    .add('with red text', () => (
        <PageButton
            id='id'
            text='jonas'
            onClick={() => {}}
        />
    ));
  