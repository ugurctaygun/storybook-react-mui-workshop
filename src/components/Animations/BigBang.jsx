import { styled } from '@mui/system';

const Root = styled('div')({
    background: 'rgba(0, 0, 0, 0)',
    display: 'flex',
    height: '100%',
    width: '100%',
    filter: 'blur(5px)',
    cursor: 'wait',
    alignSelf: 'center'
});

const Container = styled('div')({
    position: 'relative',
    width: 100,
    height: 100,
    margin: 'auto'
});


const waveAnimation = '@keyframes waveAnimation {' +
    '0% {' +
        'top: 60px;' +
        'left: 60px;' +
        'width: 0;' +
        'height: 0;' +
        'opacity: 1;' +
    '}' +
    '100% {' +
        'top: 0;' +
        'left: 0;' +
        'width: 100px;' +
        'height: 100px;' +
        'opacity: 0.001;' +
    '}' +
'}';

const Wave = styled('div')({
    background: '#0091EA',
    backfaceVisibility: 'hidden',
    zoom: 1,
    position: 'absolute',
    opacity: 1,
    borderRadius: '50%',
    overflow: 'hidden',
    animation: 'waveAnimation 1s infinite'
});

Wave.defaultProps = {
    // This is how you attach the keyframes animation to the styled component
    animation: `${waveAnimation} 1s infinite`
};

export default () => {
    return (
        <Root>
            <Container>
                <Wave />
            </Container>
        </Root>
    );
};
