import {Hint} from './Hint';

type CatProps = {
    name: string
}
export const Cat = (props: CatProps) => {
    return (<li>{props.name} for <Hint /></li>);
};
