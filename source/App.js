import React from 'react';
import createTitle from './title/index';
const Title = createTitle(React);

export default React => ({ ...props }) => (
    <div>
        Content goes here: { props.foo }
        <Title { ...props}></Title>
    </div>);
