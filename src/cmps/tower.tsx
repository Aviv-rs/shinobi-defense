import { Sprite } from '@inlet/react-pixi';

export function Tower({ ...props }: React.ComponentProps<typeof Sprite>) {
  return <Sprite image={'./imgs/tower.png'} {...props}></Sprite>;
}
