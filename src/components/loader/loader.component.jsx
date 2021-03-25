import { Container, Loading, Dot } from './loader.styles';

const Loader = () => (
    <Container class="dots">
        <Loading>Loading</Loading>
        <Dot className="dot-1"></Dot>
        <Dot className="dot-2"></Dot>
        <Dot className="dot-3"></Dot>
    </Container>
)

export { Loader };